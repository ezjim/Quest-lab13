import { getUserData } from '../data/store.js';
import quests from '../data/api.js';
import loadPlayerData from '../common/load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import hasCompletedAllQuest from './has-completed-all-quest.js';
import isDead from '../common/is-Dead.js';

loadPlayerData(); //wanting to load header on every page

//grab playerdata from local storage
const user = getUserData();

// if dead or if they completed all the quest
if (isDead(user) || hasCompletedAllQuest(quests, user)) {
    //send them to results page
    window.location = '../results';
}
// quest element for DOM
const nav = document.getElementById('quest');

for (let i = 0; i < quest.length; i++) {
    //for every quest
    const quest = quest[i];
    let questDisplay = null;

    //if user completed specific quest
    if (user.completed[quest.id]) {
        //make completed quest with checkmark
        questDisplay = createCompletedQuest(quest);
    }
    else {
        //otherwise make a link to the quest
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay); //add quest to display in nav
}
