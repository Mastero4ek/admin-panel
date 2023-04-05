import { renderError } from "./render"

export class UserService {
    async getData(url) {
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(response.statusText)
            }

            return await response.json()
        } catch (err) {
            renderError()
        }
    }

    async postData(url, method, data) {
        try {
            const response = await fetch(url, {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!response.ok) {
                throw new Error(response.statusText)
            }

            return await response.json()
        } catch (err) {
            renderError()
        }
    }

    getUsers() { return this.getData('http://localhost:4545/users') }

    addUser(user) { return this.postData('http://localhost:4545/users', 'POST', user) }

    removeUser(id) { return this.postData(`http://localhost:4545/users/${id}`, 'DELETE') }

    changeUser(id, data) { return this.postData(`http://localhost:4545/users/${id}`, 'PATCH', data) }

    editUser(id, user) { return this.postData(`http://localhost:4545/users/${id}`, 'PUT', user) }

    getUser(id) { return this.getData(`http://localhost:4545/users/${id}`) }

    filterUsers(filterOption) { return this.getData(`http://localhost:4545/users?${filterOption}=true`) }

    getSortUsers(sortOption) { return this.getData(`http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`) }

    getSearchUsers(str) { return this.getData(`http://localhost:4545/users?name_like=${str}`) }
}