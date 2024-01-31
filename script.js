document.title = "Number guessing Game";
const trailsRemaining = document.querySelector(".trails-remain");
const winnerPage = (document.getElementsByClassName("winner"))[0].style;
const loserPage = document.getElementsByClassName("winner")[1].style;
const loserText = document.getElementById("loser-text");
const inputNumber = document.getElementById("user-input");

alert("Welcome user Guess number between 0 to 50 or you can change difficulty below");
// winnerPage.display="block";
let tasks = 5;
presetlevel = 1;
trailsRemaining.innerHTML = `Tasks remaining ${tasks}`
let randomnumber = Math.floor((Math.random() * 50) + 1);
console.log(randomnumber);
function takeInput() {
    // if (inputNumber.value==null) {
    //     alert("Input can't be blank");
    //     return;
    // }
    if (tasks > 1) {
        if (inputNumber.value == randomnumber) {
            tasks = tasks - 1;
            winnerPage.display = "flex";
            setTimeout(() => {
                winnerPage.display = "none";
                inputNumber.value = null;
            difficulty(presetlevel);
            return;
            }, 3000);
            
        }
        else{
            inputNumber.value = null;
            tasks = tasks - 1;
            trailsRemaining.innerHTML = `Tasks remaining ${tasks}`
        }
        if (tasks==2&&inputNumber.value != randomnumber) {
            const msgevenodd=`number is between ${randomnumber-5>=0?randomnumber-5:0} and ${randomnumber>40?50:randomnumber+10}`;
            alert(msgevenodd);
            
        }
        else if (tasks==3&&inputNumber.value != randomnumber) {
            const msgevenodd=randomnumber%2==0?"number is even":"number is odd";
            alert(msgevenodd);
        }
       
    }
    else {
        inputNumber.value = null;
        tasks = tasks - 1;
        loserText.innerHTML = `Oops! You Failed Text was -> ${randomnumber}`;
        loserPage.display = "flex";
        setTimeout(() => {
        loserPage.display = "none";
        trailsRemaining.innerHTML = `Tasks remaining ${tasks}`
        tasks = 5;
        difficulty(parseInt(presetlevel));
        }, 3000);
        
    }
}
//change difficulty 
function difficulty(level) {
    
    if (level === 1) {
        inputNumber.value = null;

        randomnumber = Math.floor((Math.random() * 50) + 1);
        presetlevel = level;
        tasks = 5;
        trailsRemaining.innerHTML = `Tasks remaining ${tasks}`
        console.log(randomnumber);
        alert("Guess number between 0 to 50");

    }
    else if (level === 2) {
        inputNumber.value = null;

        randomnumber = Math.floor((Math.random() * 100) + 1);
        tasks = 5;
        presetlevel = level;
        console.log(randomnumber);
        trailsRemaining.innerHTML = `Tasks remaining ${tasks}`

        alert("Guess number between 0 to 100");
        
    }
    else if (level === 3) {
        inputNumber.value = null;

        randomnumber = Math.floor((Math.random() * 1000) + 1);
        tasks = 5;
        console.log(randomnumber);
        presetlevel = level;
        trailsRemaining.innerHTML = `Tasks remaining ${tasks}`

        alert("Guess number between 0 to 1000");

    }
    else {
        console.log(level);
        alert("prompt error")
    }
}
