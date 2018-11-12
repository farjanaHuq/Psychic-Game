
       // declaring global variables
        var machineGuessElem = document.getElementById("machine-guess");
        var winsCounter = document.getElementById("wins");
        var lossCounter = document.getElementById("loses");
        var guessLeftCounter = document.getElementById("guess-left");
        var lastUserGuess = document.getElementById("user-guess");

        var wins = 0;
        var loses = 0;
        var userGuessLimit = 5;

        //Array to store the user guesses.
        var userGuessArr = [];

        // store the possible machine guess in an array
        var randomGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


        // Create random number for machine guess
        var randomNums = Math.floor(Math.random() * (randomGuess.length));
        console.log(randomNums);
        
        var machineGuess = randomGuess[randomNums];
       // machineGuessElem.textContent = machineGuess;
        console.log(machineGuess);

        // on key up for user choice
        document.onkeyup = function (event) {
            var userGuess = event.key;
            console.log(userGuess);

            //Check if the user guess is already choosen or not

            if (!"abcdefghijklmnopqrstuvwxyz".split("").includes(userGuess.toLowerCase())) {
                console.log("Invalid Choice \"" + userGuess + "\"!");
            }
            else if (userGuessArr.includes(userGuess)) {
                alert("You have already choosed this letter : " + userGuess);
            }
            else {
                console.log(lastUserGuess, userGuess);
                userGuessArr.push(userGuess);
                // display the user guesses in the your guess so far section.
                lastUserGuess.textContent = userGuessArr.join(" , ");
            }

            //if else statement for loses and wins counter
            // if wins >= 1 then increase winscounter and clear the previous user choices

            if (userGuess == machineGuess) {
                wins++;
                alert("Congratulation! You won the game!");
                //restart the game
                userGuessArr = [];
                lastUserGuess.textContent = null;
                // Create random number for machine guess
                randomNums = Math.floor(Math.random() * (randomGuess.length));
                machineGuess = randomGuess[randomNums];
               
            }
            //if loses>1 then increase losescounter and restart the game
            else if ((userGuess != machineGuess) && (userGuessLimit > 1)) {
                userGuessLimit--;
            }
            else if ((userGuess != machineGuess) && (userGuessLimit == 1)) {
                loses++;
                alert("You Loose :-(");

                userGuessArr = [];
                lastUserGuess.textContent = null;
                // Create random number for machine guess
                randomNums = Math.floor(Math.random() * (randomGuess.length));
                machineGuess = randomGuess[randomNums];
            
            }
        

            winsCounter.textContent = wins;                 //display wins
            lossCounter.textContent = loses;                //display loses
            guessLeftCounter.textContent = userGuessLimit;  // display guess left

        }