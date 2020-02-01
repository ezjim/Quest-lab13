function hasCompletedAllQuest(quest, user) {
    //iterate through quest
    for (let i =0; i < quest.length; i++) {
        const quest = quest[i];
        // if any of the quest is incomplete
        if (!user.completed[quest.id]) {
            return false;
        }
}

//if all quest are complete, we get to this point return true
    return true;
}

export default hasCompletedAllQuest;