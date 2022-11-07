const list = document.getElementById("list");
const moovBNT = document.getElementById("moovBNT")

function moov() {
    const lastLi = list.lastElementChild;
    const firstLi = list.firstElementChild;
    list.insertBefore(lastLi, firstLi);
}
moovBNT.addEventListener('click', moov)
