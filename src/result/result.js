import populateUser from '../user-profile.js';
populateUser();

const resultMessage = document.getElementById('result-message');

const jsonString = window.localStorage.getItem('userInfo');
const userInfo = JSON.parse(jsonString);

if(userInfo.hp <= 0 && userInfo.gold >= 0){
    resultMessage.textContent = 'Well, looks like you made some poor choices. Remember you can\'t spend your gold if you\'re dead';
} 
else if(userInfo.hp <= 0 && userInfo.gold <= 0){
    resultMessage.textContent = 'Dead and broke? not a great outcome.';
}
else if(userInfo.hp > 0 && userInfo.gold > 0){
    resultMessage.textContent = 'Alive and wealthy? Good job.';
}
else if(userInfo.hp > 0 && userInfo.gold < 0){
    resultMessage.textContent = 'Broke but still standing. Time to go on another adventure?';
}