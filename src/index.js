const userForm = document.getElementById('user-form');
//const avatarDisplay = document.getElementById('avatar-display');

//const avatars = ['mermaid', 'warrior', 'wizard']
import questNames from './quests.js';

console.log(questNames);


userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userForm);

    const userInfo = {
        name: formData.get('name'),
        avatar: formData.get('avatar'),
        hp: 50,
        gold: 50
    };

    const serialize = JSON.stringify(userInfo);
    window.localStorage.setItem('userInfo', serialize);

    const serializeQuest = JSON.stringify(questNames);
    window.localStorage.setItem('questNames', serializeQuest);
   
    window.location = 'map.html';

});