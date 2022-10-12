// Here, we create our main function.
function fizzbuzz() {
    console.log("Welcome to FizzBuzz!");

    // Put your code here...
    for (let x = 1; x < 101; x++) {
        if (x % 11 == 0) {
            console.log("Bong");
        } else if (x % 15 == 0) {
            console.log("FizzBuzz");
        } else if (x % 21 == 0 || x % 35 == 0) {
            console.log("FizzBang");
        } else if (x % 3 == 0) {
            console.log("Fizz");
        } else if (x % 5 == 0) {
            console.log("Buzz");
        } else if (x % 7 == 0) {
            console.log("Bang");
        } else {
            console.log(x);
        }
    }
}

// Now we run the main function...
fizzbuzz();
