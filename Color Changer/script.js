const buttons = document.querySelectorAll('.button');
const main = document.querySelector(".main");

buttons.forEach(function(button){
    //console.log(buttons);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target)

        if(e.target.id === 'grey'){
            main.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'blue'){
            main.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'white'){
            main.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){
            main.style.backgroundColor = e.target.id;
        }
    });
}) 