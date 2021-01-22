
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



hotelCost

function hotelCost(day) {
    if (day < 1) {
        return "Invalid number, please try again";
    }
    else if (day <= 10) {
        var totalBill = day * 100;
    }
    else if (day <= 20) {
        var first = 10 * 100;
        var remainDay = day - 10;
        var second = remainDay * 80;
        var totalBill = first + second;
    }
    else {
        var first = 10 * 100;
        var second = 10 * 80;
        var remainDay = day - 20;
        var third = remainDay * 50;
        var totalBill = first + second + third;
    }
    return totalBill;
}
console.log(hotelCost(43));