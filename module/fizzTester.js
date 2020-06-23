// test spec with fizzBuzz

function fizzBuzz(min, max) {
    let tab = [ ];

    for (let i = min ; i < max; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            tab.push ('FizzBuzz');
        }else if (i % 3 == 0) {
            tab.push ('Fizz');
        }else if (i % 5 == 0) {
            tab.push ('Buzz');
        }else {
            tab.push(i);
        }
    }
    return tab;    
}

module.exports = fizzBuzz;

fizzBuzz(9,16)