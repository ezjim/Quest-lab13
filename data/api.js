const bowser = {
    id: 'bowser',
    name: 'Bowser',
    title: 'The Final Fight',
    map: {
        top: '80%',
        left: '44%'
    },
    image: 'bowser.jpg',
    audio: 'bowserfalls.wav',
    action: 'bowserfire.wav',
    description:`
        You have worked so hard to get to this point.  I can sense your strife legend! What will you do against the might of Bowser?
        `,

    choices: [{
        id:'bargin',
        description: 'dont know how this gonna make this function but i want to give all my gold away.  (message will display, you give all gold in exchange for your life.  bowser keeps peach, you get to live)',
        result:`bowser keeps peach, you get to live.
        `,
        // hp: ??
        // gold: ?? ----- gold  if so much gold you live. if not you die
    }, {
        id:'fight',
        description: 'get ready to eat sh*tload of flowers, and stars.  Everything is on the line here hero!',
        result:`
        `,
        // hp: ??
        // gold: ?? maybe a random function like heads or tails ? or just make it so you win everytime
    }, {
        id:'escape',
        description: 'cower, and run',
        result:`you run and hide. lose all credibility, fall into a deep dark hole becoming adicted to rainbow stardust.
        `,
        // hp: ??
        // gold: ??  
    
    }]
};

const chompchomp = {
    id: 'chompchomp',
    name: 'ChompChomp',
    title: 'Get in the Chommmppaaa',
    map: {
        top: '60%',
        left: '4%'
    },
    image: 'chompchomp.jpg',
    audio: 'bowserfalls.wav',
    action: 'bowserfire.wav',
    description:`
        You have raised chompy since he was a little tiny ball, he has overgrown your capibility to keep him fed and loved.  ChompChomp is very up set with you, and did I mention hungry??
        `,

    choices: [{
        id:'bargin',
        description: 'You get to live, but you lose something',
        result:` Lose a life, get to fight another day
        `,
        // hp: ??
        // gold: ??
    }, {
        id:'fight',
        description: 'battle and show chompy whos boss',
        result:`you win!!!
        `,
        // hp: ??
        // gold: ??
    }, {
        id:'escape',
        description: 'lose all gold? and a life?',
        result:`lose all gold and escape?
        `,
        // hp: ??
        // gold: ??  
    
    }]
};

const quests = [
    bowser,
    chompchomp,
];

export default quests;