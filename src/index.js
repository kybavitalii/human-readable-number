module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = [
        "zero",
        "zero",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const exclusion = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const numberLength = number.toString().length;
    const numberArr = number.toString().split("");
    let num = numberArr[0] * 1;
    let numIndex = numberArr[1] * 1;
    let numHundred = numberArr[2] * 1;
    // console.log(num);
    // console.log(typeof num);
    // console.log(numberLength);
    // console.log(numberArr);
    if (numberLength === 1) {
        //0-9
        return units[number];
    } else if ((numberLength === 2) & (num === 1)) {
        //10-19
        return exclusion[numIndex];
    } else if ((numberLength === 2) & (num > 1) & (numIndex === 0)) {
        //20-90
        return tens[num];
    } else if ((numberLength === 2) & (num > 1)) {
        //21-99
        let combination = tens[num] + " " + units[numIndex];
        return combination; //99*********************************************************
    } else if (
        (numberLength === 3) &
        (num > 0) &
        (numIndex === 0) &
        (numHundred > 0)
    ) {
        //101-109
        return units[num] + " hundred " + units[numHundred];
    } else if ((numberLength === 3) & (num > 0) & (numIndex === 1)) {
        //110-119
        return units[num] + " hundred " + exclusion[numHundred];
    } else if (
        (numberLength === 3) &
        (num > 0) &
        (numIndex === 0) &
        (numHundred === 0)
    ) {
        //100-900
        return units[num] + " hundred";
    } else if (
        (numberLength === 3) &
        (num > 0) &
        (numIndex > 1) &
        (numHundred === 0)
    ) {
        //120-990
        return units[num] + " hundred " + tens[numIndex];
    } else if (
        (numberLength === 3) &
        (num > 0) &
        (numIndex > 1) &
        (numHundred > 0)
    ) {
        //121-999
        return (
            units[num] + " hundred " + tens[numIndex] + " " + units[numHundred]
        );
    }
};
