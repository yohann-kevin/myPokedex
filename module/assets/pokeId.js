
export function pokeId(id,newId) {
    if (id < 10) {
        newId.textContent = "#00" + id;
        return newId;
    } else if (id >= 10 && id < 100) {
        newId.textContent = "#0" + id;
        return newId;
    } else {
        newId.textContent = "#" + id;
        return newId;
    }
}