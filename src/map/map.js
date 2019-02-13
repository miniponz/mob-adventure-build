import questNames from '../quests.js';

const questList = document.getElementById('quests-list');



for(let i = 0; i < questNames.length; i++) {
    const quest = document.createElement('li');
    const questLink = document.createElement('a');
    questList.appendChild(quest);
    quest.appendChild(questLink);
    questLink.textContent = questNames[i];
    questLink.href = 'quests.html?id=' + encodeURIComponent(questNames[i]);
}