// event handler by Section 1 
document.getElementById("sec1").addEventListener("click", function () {
    const div = document.getElementById("section1");
    sectionActive(div);
    sectionUnactive(div.id);

})

// event handler by Section 2 
document.getElementById("sec2").addEventListener("click", function () {
    const div = document.getElementById("section2");
    sectionActive(div);
    sectionUnactive(div.id);
})

// event handler by Section 3
document.getElementById("sec3").addEventListener("click", function () {
    const div = document.getElementById("section3");
    sectionActive(div);
    sectionUnactive(div.id);
})

// event handler by Section 4
document.getElementById("sec4").addEventListener("click", function () {
    const div = document.getElementById("section4");
    sectionActive(div);
    sectionUnactive(div.id);
})

// event handler by scrolling
document.addEventListener("scroll", function() { makeActive()});


// Defind section is being viewed
function sectionActive(id) {
    id.classList.replace(id.className, "your-active-class");
    console.log([id.id, id.className]);
}

// Defind section is not being viewed
function sectionUnactive(id) {
    const elem = document.querySelectorAll("section");
    for (let i = 0;i<elem.length;i++) {
        if (elem[i].id != id) {
            elem[i].classList.replace(elem[i].className, "Unactive-section");
            console.log([elem[i].id , elem[i].className]);
        }

    }
}

// Veiwed section when scrolling
function makeActive() {
    const elem = document.querySelectorAll("section");
    for ( sections of elem) {
        const box = sections.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150){
            sectionActive(sections);
            sectionUnactive(sections.id);
        }
    }
}
