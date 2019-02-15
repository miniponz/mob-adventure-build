import bladeChoices from './quest/blade-choices.js';
import caveChoices from './quest/cave-choices.js';
import underwaterChoices from './quest/underwater-choices.js';

const underwaterDescription = 'You are about to adventure into the deepest regions of the ocean in pursuit of PEARLS!! But the Kraken is guarding the treasure chest, do you:';
const caveDescription = 'You are at the entrance to a cave. It looks suspicious, but you’ve heard that there may be a great reward and a hidden world inside. You hear a growl. Do you...';
const bladeRunnerDescription = 'You are trudging through a desolate snowscape trying desperately to reach the next warming hut when the temperature begins to drop rapidly. Night is fast approaching. Fearing that you won\'t reach your destination before being overcome by frostbite, you scan the horizon for any sign of life when you spot a figure in the distance. The figure grows larger as it draws near. Blinking your eyes against the cold, you make out the figure of Ryan Gosling approaching. Do you:';

// blade-runner choices refactored
// cave choice objects refactored
// underwater choice objects

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
 