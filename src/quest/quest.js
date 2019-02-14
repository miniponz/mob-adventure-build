import questNames from '../quests.js';

const searchParams = new URLSearchParams(window.location.search);
const questToFind = searchParams.get('id');
const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const questChoices = document.getElementById('quest-choices');

questTitle.textContent = questToFind.title;

for(let i = 0; i < questNames.length; i++) {
    let currentQuest = questNames[i];

    if(currentQuest.id === questToFind){
        questTitle.textContent = currentQuest.title;

        const image = document.createElement('img');
        questImage.appendChild(image);
        image.src = currentQuest.image;

        questDescription.textContent = currentQuest.description;

        for(let i = 0; i < currentQuest.choices.length; i++) {
            let choice = currentQuest.choices[i];
            const input = document.createElement('input');
            const label = document.createElement('label');
            questChoices.appendChild(input);
            questChoices.appendChild(label);
            
            label.textContent = choice.label;

            input.type = 'radio';


        }




    }
}


console.log(questNames);