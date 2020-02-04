function scoreQuest(choice, questId, user) {
    // add hearts to user according to the choices consequences
    user.hearts += choice.hearts;
    //add coins to the user according to the choices
    user.coins += choice.coins; //change coins to whjatever you decide the value
    // set this quest id to the comp;leted in the user
    user.completed[questId] = true;
    
}

export default scoreQuest;