const underwaterDescription = 'You are about to adventure into the deepest regions of the ocean in pursuit of PEARLS!! But the Kraken is guarding the treasure chest, do you:';
const caveDescription = 'You are at the entrance to a cave. It looks suspicious, but you’ve heard that there may be a great reward and a hidden world inside. You hear a growl. Do you...';
const bladeRunnerDescription = 'You are trudging through a desolate snowscape trying desperately to reach the next warming hut when the temperature begins to drop rapidly. Night is fast approaching. Fearing that you won\'t reach your destination before being overcome by frostbite, you scan the horizon for any sign of life when you spot a figure in the distance. The figure grows larger as it draws near. Blinking your eyes against the cold, you make out the figure of Ryan Gosling approaching. Do you:';

// blade-runner choices

const bladeChoice1 = {
    label: 'run away screaming.',
    hp: -100,
    gold: 0,
    value: 'bladeChoice1'
};

const bladeChoice2 = {
    label: 'Wait for Ryan Gosling to take off his shirt and offer it to you for warmth.',
    hp: 100,
    gold: 100,
    value: 'bladeChoice2'
};

const bladeChoice3 = {
    label: 'Ask him to help you build a snow cave to wait out the night.',
    hp: -5,
    gold: 0,
    value: 'bladeChoice3'
};

const bladeChoices = [bladeChoice1, bladeChoice2, bladeChoice3];

// cave choice objects

const caveChoice1 = {
    label: 'Run full speed ahead into the cave',
    hp: -5,
    gold: 20,
    value: 'caveChoice1'
};

const caveChoice2 = {
    label: 'Nope, right out of there',
    hp: -25,
    gold: 0,
    value: 'caveChoice2'
};

const caveChoice3 = {
    label: 'Tiptoe in a few feet, and yell “helllo??”',
    hp: 5,
    gold: 50,
    value: 'caveChoice3'
};

const caveChoices = [caveChoice1, caveChoice2, caveChoice3];


// underwater choice objects

const underwaterChoice1 = {
    label: 'try to attack the Kraken with a submarine equipped with torpedoes?',
    hp: 0,
    gold: -25,
    value: 'underwaterChoice1'
};

const underwaterChoice2 = {
    label: 'try to attack the Kraken with just your scuba suit and a harpoooon!',
    hp: -25,
    gold: 0,
    value: 'underwaterChoice2'
};

const underwaterChoice3 = {
    label: 'ask the Kraken if you can borrow a cup of sugar',
    hp: 25,
    gold: 25,
    value: 'underwaterChoice3'
};

const underwaterChoices = [underwaterChoice1, underwaterChoice2, underwaterChoice3];


// quest objects
const underwater = {
    id: 'underwater',
    title: 'Under The Sea Adventure',
    image: '/assets/seaweed.jpg',
    description: underwaterDescription,
    choices: underwaterChoices

};

const cave = {
    id: 'cave',
    title: 'Cave Spelunking',
    image: '/assets/cave.jpg',
    description: caveDescription,
    choices: caveChoices
};

const bladeRunner = {
    id: 'blade-runner',
    title: 'hey girl: A Ryan Gosling Adventure',
    image: '/assets/blade-runner.jpg',
    description: bladeRunnerDescription,
    choices: bladeChoices
};

const questNames = [underwater, cave, bladeRunner];


export default questNames;
 