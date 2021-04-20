// class Date {
//     constructor(day, month, year) {
//         this.day = day;
//         this.month = month;
//         this.year = year;
//     }
//
//     getDay() {
//         return this.day;
//     }
//
//     getMonth() {
//         return this.month;
//     }
//
//     getYear() {
//        return  this.year;
//     }
//
//     setDay(day) {
//         this.day = day;
//     }
//
//     setMonth(month) {
//         this.month = month;
//     }
//
//     setYear(year) {
//         this.year = year;
//     }

let MyDate = function(day, month, year) {

    this.day = day;

    this.month = month;

    this.year = year;

    this.getDay = function() {
        return this.day;
    }
    this.getMonth = function() {
        return this.month;
    }
    this.getYear = function() {
        return this.year;
    }

    this.setDay = function(day) {
        this.day  = day;
    }
    this.setMonth = function(month) {
        this.month  = month;
    }
    this.setYear = function(year) {
        this.year  = year;
    }

    this.setDate = function (day,month,year){
        this.day = day;

        this.month = month;

        this.year = year;

    }
};
