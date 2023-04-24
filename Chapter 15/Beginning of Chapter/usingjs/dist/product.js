export class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        // no statements required
    }
}
export var SPORT;
(function (SPORT) {
    SPORT[SPORT["Running"] = 0] = "Running";
    SPORT[SPORT["Soccer"] = 1] = "Soccer";
    SPORT[SPORT["Watersports"] = 2] = "Watersports";
    SPORT[SPORT["Other"] = 3] = "Other";
})(SPORT = SPORT || (SPORT = {}));
export class SportsProduct extends Product {
    id;
    name;
    price;
    _sports;
    constructor(id, name, price, ...sportArray) {
        super(id, name, price);
        this.id = id;
        this.name = name;
        this.price = price;
        this._sports = sportArray;
    }
    usedForSport(s) {
        return this._sports.includes(s);
    }
    get sports() {
        return this._sports;
    }
}
