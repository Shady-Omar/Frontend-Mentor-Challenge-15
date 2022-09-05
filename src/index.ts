let acc: any = document.querySelectorAll(".acc");
let panel: any = document.querySelectorAll(".panel");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', () => {

    for (let i = 0; i < acc.length; i++) {
      acc[i].classList.contains("active")
      acc[i].classList.remove("active")
      panel[i].style.height = "0px"
    };
    
    acc[i].classList.add("active");
    panel[i].style.height = "60px"

// *****************************************
    // Failed attempt: 
    // ***************

    // if (acc[i].classList.contains("active")) {
    //   acc[i].classList.remove("active")
    //   panel[i].style.height = "0px"
    // } else {
    //   acc[i].classList.add("active");
    //   panel[i].style.height = "50px"
    // }

    acc[i].addEventListener('click', () => {
      acc[i].classList.toggle("active")
      for (let i = 0; i < acc.length; i++) {
        if (acc[i].classList.contains("active")) {
          panel[i].style.height = "60px"
        } else {
          panel[i].style.height = "0px"
        }
      };
    })
  })
};