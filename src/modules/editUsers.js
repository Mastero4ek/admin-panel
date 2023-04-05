import { render } from "./render"

export const editUsers = () => {
    const tbody = document.getElementById('table-body'),
        form = document.querySelector('form'),
        nameInput = form.querySelector('#form-name'),
        emailInput = form.querySelector('#form-email'),
        childrenInput = form.querySelector('#form-children');

    tbody.addEventListener('click', (e) => {
        if (e.target.closest('.btn-edit')) {
            const tr = e.target.closest('tr'),
                id = tr.dataset.key

            userService.getUser(id).then((user) => {
                if (!user) return

                nameInput.value = user.name
                emailInput.value = user.email
                childrenInput.value = user.children

                form.dataset.method = id
            })
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if (form.dataset.method) {
            const id = form.dataset.method

            const user = {
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false
            }

            userService.editUser(id, user).then(() => {
                if (!id || !user) return

                userService.getUsers().then(users => {
                    if (!users) return

                    render(users)
                    form.reset()
                    form.removeAttribute('data-method')
                })
            })
        }
    })
}