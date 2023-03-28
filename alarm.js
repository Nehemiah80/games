document.getElementById("set-alarm-button").addEventListener("click", function() {
    let time = document.getElementById("time").value;
    let message = document.getElementById("message").value;
    setAlarm(time, message);
  });

  function setAlarm(time, message) {
    let now = new Date();
    let alarmTime = new Date();
    alarmTime.setHours(time.substring(0, 2));
    alarmTime.setMinutes(time.substring(3, 5));
    alarmTime.setSeconds(0);
    if (alarmTime < now) {
      alarmTime.setDate(alarmTime.getDate() + 1);
    }
    let timeUntilAlarm = alarmTime - now;
    setTimeout(function() {
      alert(message);
    }, timeUntilAlarm);
    document.getElementById("alarm-display").innerHTML = "Alarm set for " + alarmTime.toLocaleTimeString();
  }