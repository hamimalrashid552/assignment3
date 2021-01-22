
kilometerToMeter

function kilometerToMeter(km) {
    var meter = 1000;
    if (km < 0) {
        return "invalid number";
    }
    else {
        return km * meter;
    }
}

console.log(kilometerToMeter(7));

budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Invalid item provided";
    }
    else {
        var totalWatchPrice = watch * 50;
        var totalPhonrPrice = phone * 100;
        var totalLaptopPrice = laptop * 500;

        var total = totalWatchPrice + totalPhonrPrice + totalLaptopPrice;
        return total;
    }
}
console.log(budgetCalculator(10, 5, 1));