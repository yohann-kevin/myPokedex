
export function pokeName(a,name,color,className) {
    a.classList.add(className);
    a.textContent = name;
    a.style.color = color;
}