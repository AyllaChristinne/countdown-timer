var daysRemaining = document.getElementById('days');
var hoursRemaining = document.getElementById('hours');
var minutesRemaining = document.getElementById('minutes');
var secondsRemaining = document.getElementById('seconds');

var countDownDate = new Date("Jan 6, 2022").getTime();

var x = setInterval(function() {
  // today's date and time
  var now = new Date().getTime();

  // distance between now and the count down date
  var distance = countDownDate - now;
    
  // calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  daysRemaining.innerHTML = days;
  hoursRemaining.innerHTML = hours;
  minutesRemaining.innerHTML = minutes;
  secondsRemaining.innerHTML = seconds;

  // If the count down is over 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-remaining").innerHTML = "WE LAUNCHED! ";
  }
}, 1000);