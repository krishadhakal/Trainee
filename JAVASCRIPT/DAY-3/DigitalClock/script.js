function showTime(){

    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dayName = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = new Date();

    document.getElementById('Date').innerHTML = (dayName[today.getDay()] + ' ' + today.getDate() + ' ' + monthName[today.getMonth()] + ' ' + today.getFullYear());

    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let meridiem = "AM";
    
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        meridiem = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // let time = hour + ":" + minutes + ":" + seconds + " " + meridiem;

    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // setTimeout(showTime,1000);
    
}

showTime();

setInterval(showTime, 1000);