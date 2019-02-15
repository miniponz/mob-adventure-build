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