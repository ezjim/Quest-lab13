import loadPlayerData from '../common/load-profile.js';
import { getUserData } from '../data/store.js';
import scoreHearts from './score.js';
from '.js';
from '.js';

loadPlayerData();

const user = getUserData();

const storyResults = document.getElementById('story-display');

const heartsResult = scoreHearts(user.hearts) // 6+hears 3+ hearts 0hearts
const coinResult = scoreCoins(user.coins) // YOOOOOOOOOOO SWITCH ALL THE coins TO COINS MY DUDE.
const heartsMessage = heartsMessages[heartsResult];

let coinsMessages = null;
if (heartsResult === 'DED') {
    coinsMessages = deadcoinsMessages;
} else {
    coinsMessages = alivecoinsMessages;
}

const coinsMessage = coinsMessages[coinsResult];// coinsmessages the array, and we are calling the coins result

let story = 'Till the next journey Hero!, ';