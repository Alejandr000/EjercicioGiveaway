

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
    'December'


];

const weekdays =[

        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Saturday'



];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');

const item = document.querySelectorAll('.deadline-format h4');

let tempD = new Date();

let tempY = tempD.getFullYear();

let tempM = tempD.getMonth();

let temDy = tempD.getDate(); 

const futureD = new Date(tempY, tempM, temDy + 10,11,30,0);

const year = futureD.getFullYear();
const hours = futureD.getHours();
const minutes = futureD.getMinutes();
let month = futureD.getMonth();
month = months[month];
const weekday = weekdays[futureD.getDay()];
const  date = futureD.getDate();


giveaway.textContent = `giveaway ends on  ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`
const futureT = futureD.getTime();


function getRemainTime(){




    const today = new Date().getTime();
    const t = futureT -today;
    const oneD = 24*60*60*1000;
    const oneH = 60*60*1000;
    const onM = 60*1000;

    let days = t /oneD;
    days = Math.floor(days);

    let hours = Math.floor((t % oneD)/oneH);
    let minutes = Math.floor((t % oneH) / onM);
    let seconds = Math.floor((t % onM ) / 1000);

    const values = [days, hours, minutes, seconds];
    function  format(item){



        if (item < 10){


            return (item = `0${item}`);


        }

        return item;
    }
    item.forEach(function(item, index){

        item.innerHTML =  format(values[index]);


        
    });

    if(t < 0 ){

        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired!</h4>`
    }
}
let countdown = setInterval(getRemainTime, 1000);
getRemainTime();
