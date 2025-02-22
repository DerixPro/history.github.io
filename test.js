
const showbtn1 = document.getElementById("showbtn1");
const showbtn2 = document.getElementById("showbtn2");
const showbtn3 = document.getElementById("showbtn3");
const showbtn4 = document.getElementById("showbtn4");
const showbtn5 = document.getElementById("showbtn5");
const showbtn6 = document.getElementById("showbtn6");
const showbtn7 = document.getElementById("menuMOC");



const closebtn1 = document.getElementById("closebtn1");
const closebtn2 = document.getElementById("closebtn2");
const closebtn3 = document.getElementById("closebtn3");
const closebtn4 = document.getElementById("closebtn4");
const closebtn5 = document.getElementById("closebtn5");
const closebtn6 = document.getElementById("closebtn6");
const closebtn7 = document.getElementById("closebtnM");


const popup1 = document.getElementById("t1");
const popup2 = document.getElementById("t2");
const popup3 = document.getElementById("t3");
const popup4 = document.getElementById("t4");
const popup5 = document.getElementById("t5");
const popup6 = document.getElementById("t6");
const popup7 = document.getElementById("menuMW");




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
showbtn7.addEventListener("click", function(){
   popup7.classList.add("activ");
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
closebtn7.addEventListener("click", () => {
    popup7.classList.remove("activ");

})
