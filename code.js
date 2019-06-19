
// helloWorld function
helloWorld = function() {
    return "Hello, World!";
}

// function add (num1, num2) {
//     if (typeof num1 === "string" || typeof num2 === "string") {
//         return false;
//     } else {
//         return num1 + num2;
//     }
//
// }

function sayHello(input) {
    if (input === undefined || input === true || input === false)
        return "Hello, World!";

    return "Hello, " + input + "!";

    // return "Hello, " + input + "!";
    // if (input === "Alex") {
    //     return "Hello, Alex!"
    // } else if (input === "Jane") {
    //     return "Hello, Jane!"
    // } else if (input === "Pat") {
    //     return "Hello, Pat!"
    // }else {
    //     return ""
    // }


}

function isFive(value){
    if(value === 5 || value ==="5"){
        return true;
    }
    return true;
}

function isEven(value){
    if(value%2 === 0 && value !== false){
        return true;
    }
    return false;
}

function isVowel(value){
    switch(value){
        case "a": case "e": case "i": case "o": case "u": case "A": case "E": case "I": case "O": case "U":
            return true;
    }
    return false;
}
function add(value1,value2){
    if(isNaN(value1) || isNaN(value2)) {
        return "NaN";
    }
    else{
        return (Number(value1) + (Number(value2)));
    }
}
