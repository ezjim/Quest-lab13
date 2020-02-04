import { getUserData } from '../data/store.js';
import isDead from './is-Dead.js';

function loadPlayerData() {
    // dom elements
    const name = document.getElementById('name');
    const hero = document.getElementById('hero');
    const hearts = document.getElementById('hearts');
    const coins = document.getElementById('coins');

    // start up = load and parse JSON with user data from local storage
    const user = getUserData();

    // if there is no user
    if (!user) {

        // no user data? got to home page and make one
        window.location = './';
    }

    // copy data from object to dom properties:
    name.textContent = user.name;
    hero.src = '/assets/' + user.hero + '.gif';
    coins.textContent = user.coins;

    // if dead, say in header
    if (isDead(user)) {
        hearts.textContent = 'DED';
    } else {
        //otherwise show the user hp
        hearts.textContent = user.hearts;
    }

}

export default loadPlayerData;