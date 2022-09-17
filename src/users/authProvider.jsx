const authProvider = {
    // called when the user attempts to log in
    login: ({ username }) => {
        console.log('foii')
        localStorage.setItem('username', username);
        // accept all username/password combinations
        return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        console.log('foii')
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        console.log('foii')
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        console.log('foii')
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    getIdentity: params => Promise.resolve(),
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authProvider; 