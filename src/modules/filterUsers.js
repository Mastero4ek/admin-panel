import { render } from "./render"

export const filterUsers = () => {
    const btnIsChildren = document.getElementById('btn-isChildren'),
        btnIsPermissions = document.getElementById('btn-isPermissions'),
        btnIsAll = document.getElementById('btn-isAll');

    btnIsChildren.addEventListener('click', () => {
        userService.filterUsers('children').then(users => {
            if (!users) return

            render(users)
        })
    })

    btnIsPermissions.addEventListener('click', () => {
        userService.filterUsers('permissions').then(users => {
            if (!users) return

            render(users)
        })
    })

    btnIsAll.addEventListener('click', () => {
        userService.getUsers().then(users => {
            if (!users) return

            render(users)
        })
    })
}