const pic = document.querySelector("#pic");
const nameUser= document.querySelector("#name");
const followers = document.querySelector("#followers");

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/ahnufmir');
xhr.onreadystatechange = function () {
    const state = (xhr.readyState);
    console.log(state);
    if(state === 4){
        const data = JSON.parse(this.responseText);
        console.log(data.avatar_url);
        console.log(data);
        pic.src = data.avatar_url;
        nameUser.innerHTML = data.login;
        followers.innerHTML = data.followers;


    }
}
xhr.send();

