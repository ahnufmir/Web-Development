const input = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const prevGuessesList=[];
const prevGuesses = document.querySelector(".guesses");
const guessCount = document.querySelector(".lastResult");
const lowHigh = document.querySelector(".lowOrHi");
const win = document.querySelector(".win");
// prevGuesses = document.querySelector("#guesses");

let guessCounting = 10;

    submitBtn.addEventListener("click", function(e){
        e.preventDefault();
        const min = 1;
        const max = 100;
        let random = Math.floor(Math.random() * (max-min+1))+ min;
        console.log(random)
        console.log(input.value);
            if(isNaN(input.value) || (input.value<0 || input.value>100))
            {
                console.log("Enter the right number")
                win.innerHTML = "Enter the correct integer!";

                return;
            }
        else
        {
        if(guessCounting==0){
            win.innerHTML = "YOU LOOSE BUDDY!";
            guessCount.innerHTML = "0";
            prevGuesses.innerHTML = "0";
            return;
        }
        if(input.value==random){
            win.innerHTML = "YOU GUESSED THE RIGHT!";
            guessCount.innerHTML = "0";
            prevGuesses.innerHTML = "0";
            return;
        }
        else
        {
            win.innerHTML = "";
            if(input.value<random)
                lowHigh.innerHTML = "Low"
            else
                lowHigh.innerHTML = "High"
            prevGuessesList.push(input.value);
            // function list(){
            //     prevGuessesList.forEach(
            //     function(e){
            //     console.log(e);
            //     return e;
            //     }
            //     )      
            // }      
            prevGuesses.innerHTML = prevGuessesList.join(',');
            guessCounting--;
            guessCount.innerHTML = guessCounting;
        }
    }
    })
