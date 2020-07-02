const closeSinglePoke = document.getElementById('closeSinglePoke');
const views = document.getElementById('id01');

export function closePoke(div) {
    closeSinglePoke.addEventListener("click", function() {
        views.style.display = 'none';
        let img = div.children
        img[0].remove();
    })
}