const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
let giveaway=document.querySelector(".giveaway");
let items=document.querySelectorAll(".deadline-format h4");
let deadline=document.querySelector(".deadline")
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
//let futureDate=new Date(2024,3,29,10,5,45);
//console.log(futureDate)
giveaway.textContent=`giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()}, ${futureDate.getHours()}:${futureDate.getMinutes()}am`;
const futuretime=futureDate.getTime(); //gives time in milliseconds
function getRemainingTime(){
    const today=new Date().getTime();
    const time=futuretime-today;
     // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr

    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days=time/oneDay; //days remaining
     days=Math.floor(days)
    let hours=Math.floor((time % oneDay)/oneHour);
    let minutes=Math.floor((time % oneHour)/oneMinute);
    let seconds=Math.floor((time % oneMinute)/1000);
    const values=[days,hours,minutes,seconds];
    function format(item){
        if(item<10){
            return `0${item}`;
        }
        return item;
    }
    items.forEach((item,index)=>{
        item.innerHTML=format(values[index]);
    })
    if(time<0){
        clearInterval(countdown);
        deadline.innerHTML=`<h4 class="expired">Sorry, this Offer has expired now!</h4>`;
    }  
}
let countdown=setInterval(getRemainingTime,1000)
getRemainingTime();
