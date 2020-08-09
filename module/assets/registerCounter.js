
export function registerCounter(index) {
    let counter = 25;
    if (index === 0) {
        return counter;
    } else {
        counter = index;
    }
    console.log(counter);
    return counter;
}