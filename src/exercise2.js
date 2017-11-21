exports.run = function (input) {
    console.log("Exercise #2");
    var numbers = input.split("");
    var aNumber = numbers[0];

    numbers.forEach(element => {
        if (element > aNumber) {
            aNumber = element;
        }
    });
    return parseInt(aNumber);
};
