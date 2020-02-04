// build a simple JS user out of the weird formdata object
function makeUserData(formData) {
    const user = {
        name: formData.get('name'),
        hero: formData.get('hero'),
        hearts: 10,
        coins: 20,
        completed: {}
    };

    return user;
}
                    //not currently using //        
// export const newMakeUserData = (formData) => ({
//     name: formData.get('name'),
//     hero: formData.get('hero'),
//     hearts: 35,
//     gold: 0,
//     completed: {} 
// });

export default makeUserData;