// IMPORTS
import { saveUserData } from '../data/store.js'


//Grab from home page
const userEnlist = document.getElementById('user-Enlist');

//submit button

userEnlist.addEventListener('submit', function(event) {
    event.preventDefault();
    //so the page doesnt redirect

const formData = new FormData(userEnlist); 
// new form data object created > use form data object to make a user
cost user = makeUser(formData);

// keep it data in LS
saveUserData(user);

//redirect to the map page
window.location = 'map';


});