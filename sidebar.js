document.write ("<h2>Schedule</h2> <br>Here at the side bar, we will be posting the library orientation schedules for this semester. Kindly visit the page every now and then to check on your schedule. Thank you!<br><br>")

document.write("<h3>October 2017</h3> <br>October 11|9:00-10:30am - PY13 <br>October 11|11:00-12:30pm - ED12 <br>October 11|2:00-3:30pm - TS14 <br>October 11|4:00-5:30pm - AC13<br>")

document.write("<br>October 13|9:00-10:30am - AC12 <br>October 13|11:00-12:30pm - ED11 <br>October 13|2:00-3:30pm - SE09 <br>October 13|4:00-5:30pm - AB13")

function myConfirmation() {
    return 'Are you done learning the modules?';
}
window.onbeforeunload = myConfirmation;