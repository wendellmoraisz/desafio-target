const data = require("./dados.json");

const lowerBilling = data.reduce((month, nextMonth) => {
    return month.valor < nextMonth.valor ? month : nextMonth;
});

const higherRevenue = data.reduce((month, nextMonth) => {
    return month.valor > nextMonth.valor ? month : nextMonth;
});

function daysAboveAverage(){
    let allValues = null;
    data.forEach(month => allValues += month.valor);
    const media = allValues / data.length;

    let daysAboveAverage = 0;
    data.forEach(month => daysAboveAverage += month.valor > media ? 1 : 0);
    return daysAboveAverage;
}   

console.log(lowerBilling);
console.log(higherRevenue);
console.log(daysAboveAverage());