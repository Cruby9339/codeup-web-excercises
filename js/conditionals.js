(
    function() {
        "use strict";


        /* ########################################################################## */

        /**
         * TODO:
         * Create a function named `analyzeColor` that accepts a string that is a color
         * name as input. This function should return a message that related to that
         * color. Only worry about the colors defined below, if the color passed is not
         * one of the ones defined below, return a message that says so
         *
         * Example:
         *  > analyzeColor('blue') // returns "blue is the color of the sky"
         *  > analyzeColor('red') // returns "Strawberries are red"
         *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
         *
         * You should use an if-else-if-else block to return different messages.
         *
         * Test your function by passing various string literals to it and
         * console.logging the function's return value
         */

        //
        // SECOND ATTEMPT TRYING SOMETHING DIFFERENT //
        //
        // function analyzeColor(color) {
        //     var arrColor = ["blue", "red", "cyan"];
        //     if (color === arrColor[0]) {
        //         return console.log("The sky is " + color);
        //     }else if(color === arrColor[1]){
        //         return console.log("Apples are " + color);
        //     }else if(color === arrColor[2]){
        //         return console.log(color + " looks great with pink!")
        //     } else {
        //         return console.log("I've never seen that color...");
        //     }
        // }
        //
        //  console.log(analyzeColor("blue"));
        //
        //  console.log(analyzeColor("red"));
        //
        //  console.log(analyzeColor("cyan"));
        //
        //  console.log(analyzeColor("yellow"));
        //

        // ORIGINAL SOLUTION BELOW //


        // function analyzeColor(color){
        //     if(color === "blue") {
        //         return console.log("I love the color " + color);
        //     }else if(color === "red"){
        //         return console.log("Apples are " + color);
        //     }else if(color === "cyan"){
        //         return console.log(color + " would be an awesome color for a motorcycle.");
        //     }else{
        //         return console.log("I've never seen that color");
        //     }
        // }
        //
        // console.log(analyzeColor("red"));
        //
        // console.log(analyzeColor("cyan"));
        //
        // console.log(analyzeColor("blue"));
        //
        // console.log(analyzeColor("yellow"));
        //


        // Don't change the next two lines!
        // These lines create two variables for you:
        // - `colors`: a list of the colors of the rainbow
        // - `randomColor`: contains a single random color value from the list (this
        //                  will contain a different color every time the page loads)
        // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        // var randomColor = colors[Math.floor(Math.random() * colors.length)];
        /**
         * TODO:
         * Pass the `randomColor` variable to your function and console.log the results.
         * You should see a different message every time you refresh the page
         */

        //console.log(analyzeColor(randomColor));


        /**
         * TODO:
         * Refactor your above function to use a switch-case statement
         */
        // function analyzeColor(color){
        //     switch (color){
        //         case "red":
        //             alert("Firetrucks are red!");
        //           break;
        //         case "cyan":
        //             alert("Cyan looks great with pink.");
        //           break;
        //         case "blue":
        //             alert("Blue looks great with pink!");
        //           break;
        //         default:
        //             alert("I've never seen that color...");
        //
        //     }
        // }
        //

        /**
         * TODO:
         * Prompt the user for a color when the page loads, and pass the input from the
         * user to your `analyzeColor` function. Alert the return value from your
         * function to show it to the user.
         */

        // var userColor = prompt("What is your favorite color?");
        // analyzeColor(userColor);


        /* ########################################################################## */

        /**
         * TODO:
         * Suppose there's a promotion in Walmart, each customer is given a randomly
         * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
         * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
         * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
         * all for free!.
         *
         * Write a function named `calculateTotal` that accepts a lucky number and total
         * amount, and returns the discounted price.
         *
         * Example:
         * calculateTotal(0, 100) // returns 100
         * calculateTotal(4, 100) // returns 50
         * calculateTotal(5, 100) // returns 0
         *
         * Test your function by passing it various values and checking for the expected
         * return value.
         */
        //  function calculateTotal(lucky, total){
        //       switch(lucky) {
        //           case 1:
        //               alert("Your number is 1!");
        //               alert("Price before discount is: " + total);
        //               alert("Price after discount is: " + (.01 * total));
        //               break;
        //           case 2:
        //               alert("Your number is 2!");
        //               alert("Price before discount is: " + total);
        //               alert("Price after discount is: " + (.25 * total));
        //               break;
        //           case 3:
        //               alert("Your number is 3!");
        //               alert("Price before discount is: " + total);
        //               alert("Price after discount is: " + (.35 * total));
        //               break;
        //           case 4:
        //               alert("Your number is 4!");
        //               alert("Price before discount is: " + total);
        //               alert("Price after discount is: " + (.5 * total));
        //               break;
        //           case 5:
        //               alert("Your number is 5!");
        //               alert("Price before discount is: " + total);
        //               alert("Price after discount is: " + (1 * total));
        //               break;
        //
        //       }
        // }


        /**
         * TODO:
         * Uncomment the line below to generate a random number between 0 and 6.
         * Prompt the user for their total bill, then use your `calculateTotal` function
         * and alerts to display to the user what their lucky number was, what their
         * price before the discount was, and what their price after the discount is.
         */
        //Generate a random number between 0 and 6
        // var luckyNumber = Math.floor(Math.random() * 6);
        //
        //
        // var totalBill = prompt("What is your Total?");
        // calculateTotal(luckyNumber,totalBill);

        /**
         * TODO:
         * Write some JavaScript that uses a `confirm` dialog to ask the user if they
         * would like to enter a number. If they click 'Ok', prompt the user for a
         * number, then use 3 separate alerts to tell the user:
         *
         * - whether the number is even or odd
         * - what the number plus 100 is
         * - if the number is negative or positive
         *
         * if what the user enters is not a number, use an alert to tell them that, and
         * do *not* display any of the above information.
         *
         * Can you refactor your code to use functions?
         * HINT: The way we prompt for a value could be improved
         */




       // switch (userNumber) {
       //     case addOneHundred(userNumber):
       //         break;
       //     case isPosOrNeg(userNumber):
       //         break;
       //     case isEvenOrOdd(userNumber):
       //         break;
       // }




        function number() {
            let userChoice = confirm("Would you like to enter a number?");
            if (userChoice === true) {
                var userNumber = prompt("Enter your number");
            }

            let isPosOrNeg = function posOrNeg(num1) {
                return num1 > 0 ? alert("Your number is positive.")
                    : alert("Your number is negative.");
            }

            let isEvenOrOdd = function evenOrOdd(num1) {
                return num1 % 2 !== 0 ? alert("Your number is odd.")
                    : alert("Your number is even.");

            }

            let addOneHundred = function addOne(num1) {
                alert("Your number plus 100 is: " + (parseInt(userNumber) + 100));
            }

            if(userChoice === true){
             switch (userNumber) {
                case addOneHundred(userNumber):
                    break;
                case isPosOrNeg(userNumber):
                    break;
                case isEvenOrOdd(userNumber):
                    break;
            }
            }else{
                alert("Uh, okay...");
            }
        }

            number();

        

    }
)()
