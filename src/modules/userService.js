export class UserService {
    getData(url) { return fetch(url).then(res => res.json()) }

    postData(url, options) { return fetch(url, options).then(res => res.json()) }

    getUsers() {
        return this.getData('http://localhost:4545/users')
    }

    addUser(user) {
        return this.postData('http://localhost:4545/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

    removeUser(id) {
        return this.postData(`http://localhost:4545/users/${id}`, {
            method: 'DELETE'
        })
    }

    changeUser(id, data) {
        return this.postData(`http://localhost:4545/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    editUser(id, user) {
        return this.postData(`http://localhost:4545/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    getUser(id) { return this.getData(`http://localhost:4545/users/${id}`) }
    filterUsers(filterOption) { return this.getData(`http://localhost:4545/users?${filterOption}=true`) }
    getSortUsers(sortOption) { return this.getData(`http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`) }
    getSearchUsers(str) { return this.getData(`http://localhost:4545/users?name_like=${str}`) }
}