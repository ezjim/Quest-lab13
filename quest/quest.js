import loadPlayerData from '../common/load-profile.js';
import { getUserData, saveUserData } from '../data/store.js';
import quest from '../data/api.js';
import createChoice from './create-choice.js';
import findById from '../common/find-by-ids.js';
import scoreQuest from './score-quest.js';

loadPlayerData();

//grab the query param from the URL
const searchParams = new URLSearchParams(window.location.search);
// go get quest id from the URL
const questId = searchParams.get('id');
// findbyid to get quest
const quest = findById(quests, questId);

// if no such quest
if (!quest) {
    window.location = '../map';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

//use quest we found to populate the dom
title.textContent = quest.title;
image.src = '../assets/' + quest.image;
audio.src = '../assets/' + quest.audio;
description.textContent = quest.description;

// for each of the quests choic|
for (let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];
    //go make a dom element
    const choiceDOM = createChoice(choice);
    // and append that choice
    choices.appendChild(choiceDOM);

}

choiceForm.addEventListener('submit', function (event) {

    //get user choice
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    //get element by id
    const choice = findById(quest.choices, choiceId);

    //get userdata out of localstorage
    const user = getUserData();
    // generate a score and manipulate user state
    scoreQuest(choice, quest.id, user)

    saveUserData(user);

    // update UI
    audio.src = '../assets/' + quest.action;
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
    // reload profile for new stats
    loadProfile(); // goes into state changes header
    
});
