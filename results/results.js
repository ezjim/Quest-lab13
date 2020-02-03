import loadPlayerData from '../common/load-profile.js';
import { getUserData } from '../data/store.js';
import scoreHearts from './score.js';
from '.js';
from '.js';

loadPlayerData();

const user = getUserData();

const storyResults = document.getElementById('story-display');

const heartsResult = scoreHearts(user.hp) // 6+hears 3+ hearts 0hearts
const coinResult = scoreCoins(user.gold) // YOOOOOOOOOOO SWITCH ALL THE GOLD TO COINS MY DUDE.
const heartsMessage = heartsMessages[heartsResult];

let goldMessages = null;
if (heartsResult === 'DED') {
    goldMessages = deadGoldMessages;
} else {
    goldMessages = aliveGoldMessages;
}

const goldMessage = goldMessages[goldResult];// goldmessages the array, and we are calling the gold result

let story = 'Till the next journey Hero!, ';