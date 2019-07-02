export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'JSESSIONID';

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        console.log("LLLLLLLLLLLLLLLLLLLLLLL");
        return fetch(`/login`,
            {
                method: "post",
                headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }
}

export default new AuthenticationService()