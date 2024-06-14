// special countdown
let daysItem = document.getElementById('days');
let hoursItem = document.getElementById('hours');
let minItem = document.getElementById('min');
let secItem = document.getElementById('sec');

let countdown=()=>{
    let futureDate= new Date('30 May 2024');
    let currentDate=new Date();
    let myDate= futureDate - currentDate

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60)%24;
    let min = Math.floor(myDate / 1000 / 60)%60;
    let sec = Math.floor(myDate / 1000)%60;

    daysItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minItem.innerHTML=min;
    secItem.innerHTML=sec;

}
countdown()
setInterval(countdown, 1000)


 
const list = document.querySelector('.list')
const gallery=document.querySelectorAll('.images-gallery')
  list.addEventListener('click',(event)=>{
    console.log(event.target.dataset.category)
    if(event.target.dataset.category!=undefined)
    {

        filterSearch(event.target.dataset.category)
    }
  });

  const filterSearch=(value)=>{
    gallery.forEach((curElem)=>{
        console.log(curElem.dataset.category)

        if(curElem.dataset.category === value || value === "All")
        {
        curElem.style.display="block";
        }
      
        else
        {
            curElem.style.display="none"
        }
    })
  }
 