function kilometerToMeter(km) {
    var meter = 1000;
    if (km < 0) {
        return "invalid number";
    }
    else {
        return km * meter;
    }
}
var result = kilometerToMeter(7);
console.log(result);