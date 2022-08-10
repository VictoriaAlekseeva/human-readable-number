module.exports = function toReadable (number) {


    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const tens = ['' ,'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const hundreds = ['hundred'];

    let humanReadableNumber = '';

    if (number == 0) {
        humanReadableNumber = 'zero'
    }


    if (number / 100 >= 1) {

        let hundredsQuantity = Math.floor(number / 100);

        humanReadableNumber = ones[hundredsQuantity] + ' ' + hundreds[0];

        number = number % 100;

    };

    if ((number / 10 > 1) && (number >= 20)) {

        let tensQuantity = Math.floor(number / 10);

        humanReadableNumber = humanReadableNumber + ' ' + tens[tensQuantity];

        number = number % 10;
    }

    if ((number > 10) && (number < 20)) {

        let teensNumber = number - 10;

        humanReadableNumber = humanReadableNumber + ' ' + teens[teensNumber];

    }

    if ((number <= 10) && (number !=0)) {

        humanReadableNumber = humanReadableNumber + ' ' + ones[number]
    }




    if (humanReadableNumber[0] === ' ') {
        humanReadableNumber = humanReadableNumber.slice(1);
    }

    return humanReadableNumber;


}
