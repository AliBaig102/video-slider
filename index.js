let previous = document.querySelector(".pre");

let next = document.querySelector(".next");

let slider = document.querySelector(".slider");

let slide = document.querySelectorAll(".slide");


let dots = document.querySelectorAll(".dot")

let width = slide[0].getBoundingClientRect().width;

window.addEventListener("resize", () => {
    width = slide[0].getBoundingClientRect().width;
});

let index = 0;

slider.insertAdjacentHTML("afterbegin", slide[slide.length - 1].outerHTML)
slider.insertAdjacentHTML("beforeend", slide[0].outerHTML)
slider.style.transform = `translate(-${width}px)`;


function slidemove(ind) {
    if (ind) {

        slider.style.transform = `translate(-${width * (ind + 1)}px)`;

    } else {
        slider.style.transform = `translate(-${width}px)`;
    };

};

function removeDot() {
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

}

function activeDot(i) {
    dots[i].classList.add("active");
}

function slideTransition(yes) {
    if (yes) {
        slider.style.transition = `1s ease`;

    } else {
        slider.style.transition = `none`;

    };
};
let menual=(value)=>{
    setTimeout(() => {

    slide.forEach((slid)=>{
        slid.classList.remove("active");
    });
    slide[value].classList.add("active");
},500);
}
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        removeDot();
        menual(i);
        index = i;
        dot.classList.add("active");
        slideTransition("yes");
        slidemove(index)
    });
    
});
 var slidenumber=0
next.addEventListener("click", () => {
    index++;
    slidemove(index);
    slideTransition("yes");
    removeDot();
    
    if (index > slide.length - 1) {
        setTimeout(() => {
            index = 0;
            slidemove(index);
            slideTransition();
            activeDot(index);

        }, 1000);

    } else {

        activeDot(index);

    };
    setTimeout(() => {

        slide.forEach((slid)=>{
            slid.classList.remove("active");
        })
        slidenumber++;
        if(slidenumber>slide.length-1){
            slidenumber=0;
        }
        slide[slidenumber].classList.add("active");
    },500);
});

previous.addEventListener("click", () => {
    index--;
    slideTransition("yes");
    slidemove(index);
    removeDot();
    if (index < 0) {
        setTimeout(() => {

            index = slide.length - 1;
            slidemove(index);
            slideTransition();
            activeDot(index);
        }, 1000)

    } else {
        activeDot(index);

    }
    setTimeout(() => {

        slide.forEach((slid)=>{
            slid.classList.remove("active");
        })
        slidenumber--;
        if(slidenumber<0){
            slidenumber=slide.length-1;
        }
        slide[slidenumber].classList.add("active");
    },500);
});

var playslider;
function repeter() {
    playslider = setInterval(() => {
        index++;
        slidemove(index);
        slideTransition("yes");
        removeDot();
        if (index > slide.length - 1) {
            setTimeout(() => {
                index = 0;
                slidemove(index);
                slideTransition();
                activeDot(index);

            }, 1000);

        } else {

            activeDot(index);

        };
        setTimeout(() => {

            slide.forEach((slid)=>{
                slid.classList.remove("active");
            })
            slidenumber++;
            if(slidenumber>slide.length-1){
                slidenumber=0;
            }
            slide[slidenumber].classList.add("active");
            
        },1000);

    }, 5000)
};
repeter();
const container = document.querySelector(".slider-container");

container.onmouseover = function () {
    clearInterval(playslider);
}
container.onmouseout = function () {

    repeter();
}