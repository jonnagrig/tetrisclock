console.log("works!")

setInterval(updateTime, 1000);

function updateTime() {
  var d = new Date();

  // Date object methods - storing values as variables
  // https://www.w3schools.com/js/js_date_methods.asp
  // var year = d.getFullYear(); // year as a four digit number (yyyy)
  // var month = d.getMonth() + 1; // month as a number (0-11), so + 1
  // var date = d.getDate(); // day as a number (1-31)
  var hour = d.getHours(); // hour (0-23)
  var min = d.getMinutes(); // minute (0-59)
  var sec = d.getSeconds(); // second (0-59)

  // concatenate all the values for checking and print
  // var now = year + "/" + month + "/" + date + ", " + hour + ":" + min + ":" + sec;
  // console.log(now);


  if (hour >= 10) {
    var hour_digits = ("" + hour).split("");
  } else {
    var hour_digits = [0, hour];
  }
  if (min >= 10) {
    var min_digits = ("" + min).split("");
  } else {
    var min_digits = [0, min];
  }
  if (sec >= 10) {
    var sec_digits = ("" + sec).split("");
  } else {
    var sec_digits = [0, sec];
  }



  //first seconds digit

  var digits0 = document.getElementsByClassName("digits wrapper-0")[4];
  if (sec_digits[0] == 0) {
    digits0.style.visibility = "visible";
  } else {
    digits0.style.visibility = "hidden";
  }
  var digits1 = document.getElementsByClassName("digits wrapper-1")[4];
  if (sec_digits[0] == 1) {
    digits1.style.visibility = "visible";
  } else {
    digits1.style.visibility = "hidden";
  }
  var digits2 = document.getElementsByClassName("digits wrapper-2")[4];
  if (sec_digits[0] == 2) {
    digits2.style.visibility = "visible";
  } else {
    digits2.style.visibility = "hidden";
  }
  var digits3 = document.getElementsByClassName("digits wrapper-3")[4];
  if (sec_digits[0] == 3) {
    digits3.style.visibility = "visible";
  } else {
    digits3.style.visibility = "hidden";
  }
  var digits4 = document.getElementsByClassName("digits wrapper-4")[4];
  if (sec_digits[0] == 4) {
    digits4.style.visibility = "visible";
  } else {
    digits4.style.visibility = "hidden";
  }
  var digits5 = document.getElementsByClassName("digits wrapper-5")[4];
  if (sec_digits[0] == 5) {
    digits5.style.visibility = "visible";
  } else {
    digits5.style.visibility = "hidden";
  }
  var digits6 = document.getElementsByClassName("digits wrapper-6")[4];
  if (sec_digits[0] == 6) {
    digits6.style.visibility = "visible";
  } else {
    digits6.style.visibility = "hidden";
  }
  var digits7 = document.getElementsByClassName("digits wrapper-7")[4];
  if (sec_digits[0] == 7) {
    digits7.style.visibility = "visible";
  } else {
    digits7.style.visibility = "hidden";
  }
  var digits8 = document.getElementsByClassName("digits wrapper-8")[4];
  if (sec_digits[0] == 8) {
    digits8.style.visibility = "visible";
  } else {
    digits8.style.visibility = "hidden";
  }
  var digits9 = document.getElementsByClassName("digits wrapper-9")[4];
  if (sec_digits[0] == 9) {
    digits9.style.visibility = "visible";
  } else {
    digits9.style.visibility = "hidden";
  }


  //second seconds digit

  var digits0 = document.getElementsByClassName("digits wrapper-0")[5];
  if (sec_digits[1] == 0) {
    digits0.style.visibility = "visible";
  } else {
    digits0.style.visibility = "hidden";
  }
  var digits1 = document.getElementsByClassName("digits wrapper-1")[5];
  if (sec_digits[1] == 1) {
    digits1.style.visibility = "visible";
  } else {
    digits1.style.visibility = "hidden";
  }
  var digits2 = document.getElementsByClassName("digits wrapper-2")[5];
  if (sec_digits[1] == 2) {
    digits2.style.visibility = "visible";
  } else {
    digits2.style.visibility = "hidden";
  }
  var digits3 = document.getElementsByClassName("digits wrapper-3")[5];
  if (sec_digits[1] == 3) {
    digits3.style.visibility = "visible";
  } else {
    digits3.style.visibility = "hidden";
  }
  var digits4 = document.getElementsByClassName("digits wrapper-4")[5];
  if (sec_digits[1] == 4) {
    digits4.style.visibility = "visible";
  } else {
    digits4.style.visibility = "hidden";
  }
  var digits5 = document.getElementsByClassName("digits wrapper-5")[5];
  if (sec_digits[1] == 5) {
    digits5.style.visibility = "visible";
  } else {
    digits5.style.visibility = "hidden";
  }
  var digits6 = document.getElementsByClassName("digits wrapper-6")[5];
  if (sec_digits[1] == 6) {
    digits6.style.visibility = "visible";
  } else {
    digits6.style.visibility = "hidden";
  }
  var digits7 = document.getElementsByClassName("digits wrapper-7")[5];
  if (sec_digits[1] == 7) {
    digits7.style.visibility = "visible";
  } else {
    digits7.style.visibility = "hidden";
  }
  var digits8 = document.getElementsByClassName("digits wrapper-8")[5];
  if (sec_digits[1] == 8) {
    digits8.style.visibility = "visible";
  } else {
    digits8.style.visibility = "hidden";
  }
  var digits9 = document.getElementsByClassName("digits wrapper-9")[5];
  if (sec_digits[1] == 9) {
    digits9.style.visibility = "visible";
  } else {
    digits9.style.visibility = "hidden";
  }



  // first minutes digit

  var digits0 = document.getElementsByClassName("digits wrapper-0")[2];
  if (min_digits[0] == 0) {
    digits0.style.visibility = "visible";
  } else {
    digits0.style.visibility = "hidden";
  }
  var digits1 = document.getElementsByClassName("digits wrapper-1")[2];
  if (min_digits[0] == 1) {
    digits1.style.visibility = "visible";
  } else {
    digits1.style.visibility = "hidden";
  }
  var digits2 = document.getElementsByClassName("digits wrapper-2")[2];
  if (min_digits[0] == 2) {
    digits2.style.visibility = "visible";
  } else {
    digits2.style.visibility = "hidden";
  }
  var digits3 = document.getElementsByClassName("digits wrapper-3")[2];
  if (min_digits[0] == 3) {
    digits3.style.visibility = "visible";
  } else {
    digits3.style.visibility = "hidden";
  }
  var digits4 = document.getElementsByClassName("digits wrapper-4")[2];
  if (min_digits[0] == 4) {
    digits4.style.visibility = "visible";
  } else {
    digits4.style.visibility = "hidden";
  }
  var digits5 = document.getElementsByClassName("digits wrapper-5")[2];
  if (min_digits[0] == 5) {
    digits5.style.visibility = "visible";
  } else {
    digits5.style.visibility = "hidden";
  }
  var digits6 = document.getElementsByClassName("digits wrapper-6")[2];
  if (min_digits[0] == 6) {
    digits6.style.visibility = "visible";
  } else {
    digits6.style.visibility = "hidden";
  }
  var digits7 = document.getElementsByClassName("digits wrapper-7")[2];
  if (min_digits[0] == 7) {
    digits7.style.visibility = "visible";
  } else {
    digits7.style.visibility = "hidden";
  }
  var digits8 = document.getElementsByClassName("digits wrapper-8")[2];
  if (min_digits[0] == 8) {
    digits8.style.visibility = "visible";
  } else {
    digits8.style.visibility = "hidden";
  }
  var digits9 = document.getElementsByClassName("digits wrapper-9")[2];
  if (min_digits[0] == 9) {
    digits9.style.visibility = "visible";
  } else {
    digits9.style.visibility = "hidden";
  }


  //second minutes digit

  var digits0 = document.getElementsByClassName("digits wrapper-0")[3];
  if (min_digits[1] == 0) {
    digits0.style.visibility = "visible";
  } else {
    digits0.style.visibility = "hidden";
  }
  var digits1 = document.getElementsByClassName("digits wrapper-1")[3];
  if (min_digits[1] == 1) {
    digits1.style.visibility = "visible";
  } else {
    digits1.style.visibility = "hidden";
  }
  var digits2 = document.getElementsByClassName("digits wrapper-2")[3];
  if (min_digits[1] == 2) {
    digits2.style.visibility = "visible";
  } else {
    digits2.style.visibility = "hidden";
  }
  var digits3 = document.getElementsByClassName("digits wrapper-3")[3];
  if (min_digits[1] == 3) {
    digits3.style.visibility = "visible";
  } else {
    digits3.style.visibility = "hidden";
  }
  var digits4 = document.getElementsByClassName("digits wrapper-4")[3];
  if (min_digits[1] == 4) {
    digits4.style.visibility = "visible";
  } else {
    digits4.style.visibility = "hidden";
  }
  var digits5 = document.getElementsByClassName("digits wrapper-5")[3];
  if (min_digits[1] == 5) {
    digits5.style.visibility = "visible";
  } else {
    digits5.style.visibility = "hidden";
  }
  var digits6 = document.getElementsByClassName("digits wrapper-6")[3];
  if (min_digits[1] == 6) {
    digits6.style.visibility = "visible";
  } else {
    digits6.style.visibility = "hidden";
  }
  var digits7 = document.getElementsByClassName("digits wrapper-7")[3];
  if (min_digits[1] == 7) {
    digits7.style.visibility = "visible";
  } else {
    digits7.style.visibility = "hidden";
  }
  var digits8 = document.getElementsByClassName("digits wrapper-8")[3];
  if (min_digits[1] == 8) {
    digits8.style.visibility = "visible";
  } else {
    digits8.style.visibility = "hidden";
  }
  var digits9 = document.getElementsByClassName("digits wrapper-9")[3];
  if (min_digits[1] == 9) {
    digits9.style.visibility = "visible";
  } else {
    digits9.style.visibility = "hidden";
  }



  // first hours digit

  var digits0 = document.getElementsByClassName("digits wrapper-0")[0];
  if (hour_digits[0] == 0) {
    digits0.style.visibility = "visible";
  } else {
    digits0.style.visibility = "hidden";
  }
  var digits1 = document.getElementsByClassName("digits wrapper-1")[0];
  if (hour_digits[0] == 1) {
    digits1.style.visibility = "visible";
  } else {
    digits1.style.visibility = "hidden";
  }
  var digits2 = document.getElementsByClassName("digits wrapper-2")[0];
  if (hour_digits[0] == 2) {
    digits2.style.visibility = "visible";
  } else {
    digits2.style.visibility = "hidden";
  }
  var digits3 = document.getElementsByClassName("digits wrapper-3")[0];
  if (hour_digits[0] == 3) {
    digits3.style.visibility = "visible";
  } else {
    digits3.style.visibility = "hidden";
  }
  var digits4 = document.getElementsByClassName("digits wrapper-4")[0];
  if (hour_digits[0] == 4) {
    digits4.style.visibility = "visible";
  } else {
    digits4.style.visibility = "hidden";
  }
  var digits5 = document.getElementsByClassName("digits wrapper-5")[0];
  if (hour_digits[0] == 5) {
    digits5.style.visibility = "visible";
  } else {
    digits5.style.visibility = "hidden";
  }
  var digits6 = document.getElementsByClassName("digits wrapper-6")[0];
  if (hour_digits[0] == 6) {
    digits6.style.visibility = "visible";
  } else {
    digits6.style.visibility = "hidden";
  }
  var digits7 = document.getElementsByClassName("digits wrapper-7")[0];
  if (hour_digits[0] == 7) {
    digits7.style.visibility = "visible";
  } else {
    digits7.style.visibility = "hidden";
  }
  var digits8 = document.getElementsByClassName("digits wrapper-8")[0];
  if (hour_digits[0] == 8) {
    digits8.style.visibility = "visible";
  } else {
    digits8.style.visibility = "hidden";
  }
  var digits9 = document.getElementsByClassName("digits wrapper-9")[0];
  if (hour_digits[0] == 9) {
    digits9.style.visibility = "visible";
  } else {
    digits9.style.visibility = "hidden";
  }


  //second hours digit

  var digits0 = document.getElementsByClassName("digits wrapper-0")[1];
  if (hour_digits[1] == 0) {
    digits0.style.visibility = "visible";
  } else {
    digits0.style.visibility = "hidden";
  }
  var digits1 = document.getElementsByClassName("digits wrapper-1")[1];
  if (hour_digits[1] == 1) {
    digits1.style.visibility = "visible";
  } else {
    digits1.style.visibility = "hidden";
  }
  var digits2 = document.getElementsByClassName("digits wrapper-2")[1];
  if (hour_digits[1] == 2) {
    digits2.style.visibility = "visible";
  } else {
    digits2.style.visibility = "hidden";
  }
  var digits3 = document.getElementsByClassName("digits wrapper-3")[1];
  if (hour_digits[1] == 3) {
    digits3.style.visibility = "visible";
  } else {
    digits3.style.visibility = "hidden";
  }
  var digits4 = document.getElementsByClassName("digits wrapper-4")[1];
  if (hour_digits[1] == 4) {
    digits4.style.visibility = "visible";
  } else {
    digits4.style.visibility = "hidden";
  }
  var digits5 = document.getElementsByClassName("digits wrapper-5")[1];
  if (hour_digits[1] == 5) {
    digits5.style.visibility = "visible";
  } else {
    digits5.style.visibility = "hidden";
  }
  var digits6 = document.getElementsByClassName("digits wrapper-6")[1];
  if (hour_digits[1] == 6) {
    digits6.style.visibility = "visible";
  } else {
    digits6.style.visibility = "hidden";
  }
  var digits7 = document.getElementsByClassName("digits wrapper-7")[1];
  if (hour_digits[1] == 7) {
    digits7.style.visibility = "visible";
  } else {
    digits7.style.visibility = "hidden";
  }
  var digits8 = document.getElementsByClassName("digits wrapper-8")[1];
  if (hour_digits[1] == 8) {
    digits8.style.visibility = "visible";
  } else {
    digits8.style.visibility = "hidden";
  }
  var digits9 = document.getElementsByClassName("digits wrapper-9")[1];
  if (hour_digits[1] == 9) {
    digits9.style.visibility = "visible";
  } else {
    digits9.style.visibility = "hidden";
  }


function doMove() {
  digits0[6].style.left = parseInt(digits0[6].style.left)+1+'px';
  setTimeout(doMove,20); // call doMove in 20msec
}

function init() {
  digits0[6] = document.getElementById('fooObject'); // get the "foo" object
  digits0[6].style.left = '0px'; // set its initial position to 0px
  doMove(); // start animating
}


window.onload = init;

}