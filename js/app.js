document.getElementById("sec1").addEventListener("click", function () {
    const div = document.getElementById("section1");
    sectionActive(div);
    sectionUnactive(div.id);

})
document.getElementById("sec2").addEventListener("click", function () {
    const div = document.getElementById("section2");
    sectionActive(div);
    sectionUnactive(div.id);
})
document.getElementById("sec3").addEventListener("click", function () {
    const div = document.getElementById("section3");
    sectionActive(div);
    sectionUnactive(div.id);
})
document.getElementById("sec4").addEventListener("click", function () {
    const div = document.getElementById("section4");
    sectionActive(div);
    sectionUnactive(div.id);
})

function sectionActive(id) {
    id.classList.replace(id.className, "your-active-class");
    console.log([id.id, id.className]);
}

function sectionUnactive(id) {
    const elem = document.querySelectorAll("section");
    for (let i = 0;i<elem.length;i++) {
        if (elem[i].id != id) {
            elem[i].classList.replace(elem[i].className, "Unactive-section");
            console.log([elem[i].id , elem[i].className]);
        }

    }
}