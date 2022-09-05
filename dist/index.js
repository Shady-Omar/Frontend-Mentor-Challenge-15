"use strict";
let acc = document.querySelectorAll(".acc");
let panel = document.querySelectorAll(".panel");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', () => {
        for (let i = 0; i < acc.length; i++) {
            acc[i].classList.contains("active");
            acc[i].classList.remove("active");
            panel[i].style.height = "0px";
        }
        ;
        acc[i].classList.add("active");
        panel[i].style.height = "60px";
        acc[i].addEventListener('click', () => {
            acc[i].classList.toggle("active");
            for (let i = 0; i < acc.length; i++) {
                if (acc[i].classList.contains("active")) {
                    panel[i].style.height = "60px";
                }
                else {
                    panel[i].style.height = "0px";
                }
            }
            ;
        });
    });
}
;
//# sourceMappingURL=index.js.map