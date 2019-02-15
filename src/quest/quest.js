import bladeChoices from './blade-choices.js';
import caveChoices from './cave-choices.js';
import underwaterChoices from './underwater-choices.js';
import populateUser from '../user-profile.js';
populateUser();

const questString = window.localStorage.getItem('questNames');
const questNames = JSON.parse(questString);

const searchParams = new URLSearchParams(window.location.search);
const questToFind = searchParams.get('id');
const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const questChoices = document.getElementById('quest-choices');
const choiceForm = document.getElementById('choice-form');

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
            input.name = 'option';
            input.value = choice.value;
        }
    }
}

const jsonString = window.localStorage.getItem('userInfo');
const userInfo = JSON.parse(jsonString);



choiceForm.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const questDecision = formData.get('option');

    let selected = null;
    if(questDecision.includes('underwater')) {
        selected = underwaterChoices;
    }
    if(questDecision.includes('blade')) {
        selected = bladeChoices;
    }
    if(questDecision.includes('cave')) {
        selected = caveChoices;
    }

    for(let i = 0; i < selected.length; i++){ 
        let currentDecision = selected[i];

        if(questDecision === currentDecision.value) {
            userInfo.hp += currentDecision.hp;
            userInfo.gold += currentDecision.gold;
            const serialize = JSON.stringify(userInfo);
            window.localStorage.setItem('userInfo', serialize);
        }

    }
    let removeIndex = questNames.map(function(item) {
        return item.id; }).indexOf(questToFind);

    questNames.splice(removeIndex, 1);
    console.log(questNames);

    const stringify = JSON.stringify(questNames);
    window.localStorage.setItem('questNames', stringify);

    window.location = 'map.html';
});

