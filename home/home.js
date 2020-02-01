import { saveUserData } from '../data/store.js';
import makeUserData from './make-user.js';

// grab info from home page

const userSignUp = document.getElementById('user-enlist');

// when we submit
userSignUp.addEventListener('submit', function (event) {
    // maske it so it doesnt weirdly redirect
    event.preventDefault();

    // make a new form data object
    const formData = new FormData(userSignUp);
    // use the form data object to make a user
    const user = makeUserData(formData);

    // pop that user in local storage
    saveUserData(user);

    // redirect us to the map page
    window.location = 'map/map.html';
});