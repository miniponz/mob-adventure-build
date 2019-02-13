const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userForm);

    const userInfo = {
        name: formData.get('name'),
        avatar: formData.get('avatar'),
        hp: 0,
        gold: 0
    };
    const serialize = JSON.stringify(userInfo);
    window.localStorage.setItem('userInfo', serialize);
   
    window.location = 'map.html';

});