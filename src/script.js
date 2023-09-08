const logo = document.querySelector('.logo')
const HamburgerDesktop = document.querySelector('.Hamburger-Desktop')
const ham=document.querySelector('.ham')
const xmark=document.querySelector('.xmark')
const canvas=document.querySelector('.off-canvas')
const overlay=document.querySelector('.overlay')

HamburgerDesktop.addEventListener('click',function(){
    logo.classList.toggle('-left-10')
    logo.classList.toggle('left-2')
})
function onClick(i) {
        document.querySelector(`.sub-menu${i}`).classList.toggle('top-[120px]')
        var a=[1,2,3,4]
        a.splice(i-1,1)
        for(let x of a){
            document.querySelector(`.sub-menu${x}`).classList.remove('top-[120px]')
        }   
}

 ham.addEventListener('click',function(){
    canvas.classList.toggle('-right-60')
    overlay.classList.toggle('opacity-0')
    overlay.classList.toggle('invisible')
 })
 xmark.addEventListener('click',function(){
    canvas.classList.toggle('-right-60')
    overlay.classList.toggle('opacity-0')
    overlay.classList.toggle('invisible')
 })
 overlay.addEventListener('click',function(){
    canvas.classList.toggle('-right-60')
    overlay.classList.toggle('opacity-0')
    overlay.classList.toggle('invisible')
 })

//  accordion menu
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
    accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
    header.querySelector(".fas").classList.remove("fa-plus");
    header.querySelector(".fas").classList.add("fa-minus");
    header.parentElement.classList.add("bg-indigo-50");
    } else {
    accordionContent.style.maxHeight = `0px`;
    header.querySelector(".fas").classList.add("fa-plus");
    header.querySelector(".fas").classList.remove("fa-minus");
    header.parentElement.classList.remove("bg-indigo-50");
    }
});
});
