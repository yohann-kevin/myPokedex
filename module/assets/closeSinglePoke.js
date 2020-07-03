const closeSinglePoke = document.getElementById('closeSinglePoke');
const views = document.getElementById('id01');

export function closePoke(div) {
    closeSinglePoke.addEventListener("click", function() {
        div.children[1].remove();
        views.style.display = 'none';
    })
}