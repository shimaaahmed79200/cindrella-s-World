// Start Latest Events
// Action through scrolling...............
// start Skills
// let section = document.querySelector(".our-skills");
// let spans = document.querySelectorAll(".the-progress span");
// // on scroll
// window.onscroll = function animate() {
//     if (window.scrollY >= section.offsetTop - 70){
//         spans.forEach((span)=>{
//             span.style.width = span.dataset.width;
//         });
//     }
// };
// End Skills

//The end of the year to countdown to
let countDownDate = new Date("Mar 24, 2029 23:59:59").getTime();

let counter= setInterval(() =>{
    // get Date now
    let dateNow = new Date().getTime();

    // Find the Date difference between now and the countDownDate
    let dateDiff = countDownDate - dateNow;

    // Get time units
    let days = Math.floor(dateDiff /(1000 * 60 *60 *24));

    let hours =Math.floor(( dateDiff %(1000 * 60 *60 *24))/(1000*60*60));

    let minutes = Math.floor(( dateDiff %(1000 * 60 * 60))/(1000*60));

    let seconds = Math.floor(( dateDiff %(1000 * 60 ))/1000);


    document.querySelector(".days").innerHTML=days <10 ? `0 ${days}` : days;
    document.querySelector(".hours").innerHTML=hours <10 ? `0 ${hours}` : hours;
    document.querySelector(".minutes").innerHTML=minutes <10 ? `0 ${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML=seconds<10 ? `0${seconds}` : seconds;

    if (dateDiff<0){
        clearInterval(counter);
    }
},1000)
//End Latest Events


// Action through scrolling...............


// start Statistics
// section variables........
let numbers = document.querySelectorAll(".Stats .number");
let sectionStat = document.querySelector(".Stats");
let started = false; //Function started ? No

// on scroll
window.onscroll = function(){
    if (window.scrollY >= sectionStat.offsetTop-70){
        // loop on scroll
        if(!started){
            numbers.forEach((number)=>startCount(number));
        }
        started = true;
    }
};
// function calculate
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if (el.textContent == goal){
            clearInterval(count);
        }
        
    },2000/goal);
}
startCount(document.querySelectorAll(".Stats .number")[0]);
// End Statistics

// start scroller
let ele = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeightHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    ele.style.width = `${(scrollTop / height) * 100}%`;
});
// end scroller