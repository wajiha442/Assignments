//challenge 1
const calcTip = function (bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
};
console.log("Tip for 100:", calcTip(100));

// Step 2: Create array of bills
const bills = [125, 555, 44];

// Step 3: Create array of tips
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];

// Step 4 (Bonus)
const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);


// challenge 2
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(${ mark.fullName }'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s(${ john.bmi.toFixed(1) })!);
} else if (john.bmi > mark.bmi) {
    console.log(${ john.fullName }'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s(${ mark.bmi.toFixed(1) })!);
} else {
    console.log(Both have the same BMI(${ mark.bmi.toFixed(1) })!);
}