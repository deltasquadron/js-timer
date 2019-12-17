function beginCountdown() {
    var mins = document.getElementById("time").value;
    var secs = mins * 60;
    var currentSeconds = 0;
    var currentMinutes = 0;

    setTimeout(Decrement, 1000); 

    function Decrement() {
        currentMinutes = Math.floor(secs / 60);
        currentSeconds = secs % 60;
        if (currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
        secs--;
        document.getElementById("timer").innerHTML = currentMinutes + ":" + currentSeconds;
        if (secs !== -1) setTimeout(Decrement ,1000);
        var audio = new Audio('/Blop-Mark_DiAngelo-79054334.mp3');
        if (currentMinutes <= 0 && currentSeconds <= 0) audio.play();
    }
  }