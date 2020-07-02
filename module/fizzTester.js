// test spec with fizzBuzz

function fizzBuzz(min, max) {
    var tab = [];
    for (let i = min; i < max; i++) i % 3 == 0 && i % 5 == 0 ? tab.push("FizzBuzz") : i % 3 == 0 ? tab.push("Fizz") : i % 5 == 0 ? tab.push("Buzz") : tab.push(i);
    return tab
}
module.exports = fizzBuzz, fizzBuzz(9, 16);