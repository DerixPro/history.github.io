
const showbtn1 = document.getElementById("n1");
const showbtn2 = document.getElementById("n2");
const showbtn3 = document.getElementById("n3");
const showbtn4 = document.getElementById("n4");
const showbtn5 = document.getElementById("n5");
const showbtn6 = document.getElementById("n6");



const closebtn1 = document.getElementById("closebtn1");
const closebtn2 = document.getElementById("closebtn2");
const closebtn3 = document.getElementById("closebtn3");
const closebtn4 = document.getElementById("closebtn4");
const closebtn5 = document.getElementById("closebtn5");
const closebtn6 = document.getElementById("closebtn6");


const popup1 = document.getElementById("window1");
const popup2 = document.getElementById("window2");
const popup3 = document.getElementById("window3");
const popup4 = document.getElementById("window4");
const popup5 = document.getElementById("window5");
const popup6 = document.getElementById("window6");




showbtn1.addEventListener("click", function(){
   popup1.classList.add("activ");
})
showbtn2.addEventListener("click", function(){
   popup2.classList.add("activ");
})
showbtn3.addEventListener("click", function(){
   popup3.classList.add("activ");
})
showbtn4.addEventListener("click", function(){
   popup4.classList.add("activ");
})
showbtn5.addEventListener("click", function(){
   popup5.classList.add("activ");
})
showbtn6.addEventListener("click", function(){
   popup6.classList.add("activ");
})




closebtn1.addEventListener("click", () => {
    popup1.classList.remove("activ");

})
closebtn2.addEventListener("click", () => {
    popup2.classList.remove("activ");

})
closebtn3.addEventListener("click", () => {
    popup3.classList.remove("activ");

})
closebtn4.addEventListener("click", () => {
    popup4.classList.remove("activ");

})
closebtn5.addEventListener("click", () => {
    popup5.classList.remove("activ");

})
closebtn6.addEventListener("click", () => {
    popup6.classList.remove("activ");

})
