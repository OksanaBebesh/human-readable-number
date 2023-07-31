module.exports = function toReadable(number) {
    let stringResult = "";
    let numberLength = number.toString().split("").length;

    switch (numberLength) {
        case 1:
            stringResult = returnNumberString(number);
            break;
        case 2: {
            stringResult = combineTwoDigit(number);
            break;
        }
        case 3: {
            let first = Math.trunc(number / 100);
            stringResult = returnNumberString(first) + " hundred ";
            let second = number % 100;
            stringResult = stringResult + combineTwoDigit(second);
            break;
        }
        default:
            return "";
    }
    return stringResult.replaceAll("  ", " ").trim();
};

function combineTwoDigit(number) {
    let first = Math.trunc(number / 10);
    let second = number % 10;
    return first === 1
        ? stringDigitAfterNine(number)
        : !second
        ? stringDigit(first)
        : stringDigit(first) + " " + returnNumberString(second);
}

function returnNumberString(number) {
    switch (number) {
        case 9:
            return "nine";
        case 8:
            return "eight";
        case 7:
            return "seven";
        case 6:
            return "six";
        case 5:
            return "five";
        case 4:
            return "four";
        case 3:
            return "three";
        case 2:
            return "two";
        case 1:
            return "one";
        case 0:
            return "zero";
        default:
            return "";
    }
}

function stringDigitAfterNine(digitAfterNine) {
    switch (digitAfterNine) {
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
        default:
            return "";
    }
}

function stringDigit(countOfDigit) {
    switch (countOfDigit) {
        case 2:
            return "twenty";
        case 3:
            return "thirty";
        case 4:
            return "forty";
        case 5:
            return "fifty";
        case 6:
            return "sixty";
        case 7:
            return "seventy";
        case 8:
            return "eighty";
        case 9:
            return "ninety";
        default:
            return "";
    }
}
