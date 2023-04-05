import { render } from "./render"

export const removeUsers = () => {
    const tbody = document.getElementById('table-body')

    tbody.addEventListener('click', (e) => {
        e.preventDefault()

        if (event.target.closest('.btn-remove')) {
            const tr = e.target.closest('tr'),
                id = tr.dataset.key

            userService.removeUser(id).then(() => {
                if (!id) return

                userService.getUsers().then(users => {
                    if (!users) return

                    render(users)
                })
            })
        }
    })
}