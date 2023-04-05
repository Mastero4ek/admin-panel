import { render } from "./render"

export const addUsers = () => {
    const form = document.querySelector('form'),
        nameInput = form.querySelector('#form-name'),
        emailInput = form.querySelector('#form-email'),
        childrenInput = form.querySelector('#form-children');

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if (!form.dataset.method) {
            const user = {
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false
            }

            userService.addUser(user).then(() => {
                userService.getUsers().then(users => {
                    if (!users) return

                    render(users)
                    form.reset()
                })
            })
        }
    })
}