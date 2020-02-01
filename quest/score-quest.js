function scoreQuest(choice, questId, user) {
    // add hp to user according to the choices consequences
    user.hp += choice.hearts;
    //add gold to the user according to the choices
    user.gold += choice.gold; //change gold to whjatever you decide the value
    // set this quest id to the comp;leted in the user
    user.completed[questId] = true;
    
}

export default scoreQuest;