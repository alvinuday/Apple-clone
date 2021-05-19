const el = document.querySelector(".main_card");
const cont = document.querySelector(".container");
const image =  document.querySelector("#art1_img");
image.style.filter = `grayscale(100%)`;
const menuBtn = document.getElementsByClassName("menu-btn");
let menuOpen = false;
var overlay = document.querySelector(".overlay");


const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const img4 = document.querySelector("#img4")
const img5 = document.querySelector("#img5")
const img6 = document.querySelector("#img6")
const img7 = document.querySelector("#img7")
const img8 = document.querySelector("#img8")
const img9 = document.querySelector("#img9")
const img10 = document.querySelector("#img10")
const img11 = document.querySelector("#img11")
const img13 = document.querySelector("#img13")
const img14 = document.querySelector("#img14")
const img15= document.querySelector("#img15")
const img16 = document.querySelector("#img16")
const img17 = document.querySelector("#img17")
const img18 = document.querySelector("#img18")
const img19 = document.querySelector("#img19")
const img20 = document.querySelector("#img20")



// get scroll position in px
console.log(el.scrollLeft, el.scrollTop);

window.addEventListener("mousemove",handleMouseMove);

function handleMouseMove(event) {

    var x = event.clientX - document.documentElement.clientWidth/2;
    var y = event.clientY- document.documentElement.clientHeight/2;       
    el.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    
    
    img1.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img2.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img3.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img4.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img5.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img6.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img7.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img8.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img9.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img10.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img11.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img13.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img14.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img15.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img16.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img17.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img18.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img19.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;
    img20.style.transform = `translate(${-x * 5}px,${-y * 5}px)`;

    

}

window.onscroll = () => {
    if (
      document.documentElement.scrollTop >= 300 &&
      document.documentElement.scrollTop <=900
    )
    {   
        percentage =((document.documentElement.scrollTop-300)/200);
        image.style.filter = `grayscale(${2-percentage})`
        console.log('image visible')
        console.log("hello scroll", document.documentElement.scrollTop);
    }
}
function clicked() {
    if (!menuOpen) {
        menuBtn[0].classList.add('open');
        menuOpen=true;
       overlay.style.height = "100%";
        
    }
    else {
        menuBtn[0].classList.remove("open");
        menuOpen = false;
        overlay.style.height = "0%";
    }
    console.log("hello");
    
};


