function populateUser(){
    
    const userName = document.getElementById('user-name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const jsonUser = window.localStorage.getItem('userInfo');
    const userInfo = JSON.parse(jsonUser);

    userName.textContent = userInfo.name;
    avatar.textContent = userInfo.avatar;
    hp.textContent = 'HP: ' + userInfo.hp;
    gold.textContent = 'Gold: ' + userInfo.gold; 
}

export default populateUser;

const jsonUser = window.localStorage.getItem('userInfo');
const userInfo = JSON.parse(jsonUser);
const userInfoArray = Object.keys(userInfo).map(function(key) {
    return [String(key), String(userInfo[key])];
});

console.log(userInfoArray);

for(let i = 0; i < userInfoArray.length; i++) {
    let userProperty = userInfoArray[i];

    

    const currentUser = document.getElementById('current-user');
    const p = document.createElement('p');
    currentUser.appendChild(p);
    p.textContent = userProperty;

}


