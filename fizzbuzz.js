// Here, we create our main function.
function fizzbuzz() {
    console.log("Welcome to FizzBuzz!");

    // Put your code here...
    for (let x = 1; x < 101; x++) {
        if (x % 15 == 0) {
            console.log("FizzBuzz");
            //continue;
        } else if (x % 3 == 0) {
            console.log("Fizz");
            //    continue
        } else if (x % 5 == 0) {
            console.log("Buzz");
            //    continue
        } else {
            console.log(x);
        }
    }
}

// Now we run the main function...
fizzbuzz();
