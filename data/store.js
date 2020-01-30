// LOCAL STORAGE FOR USER DATA
// saves user data
export function saveUserData(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user');
}
// pull user data from local storage
export function getUserData() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}