setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  let hr_dot = document.querySelector(".hr_dot");
  let mn_dot = document.querySelector(".mn_dot");
  let sc_dot = document.querySelector(".sc_dot");

  if (h > 12) {
    h -= 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h + "<br><span>hours</span></br>";
  minutes.innerHTML = m + "<br><span>minutes</span></br>";
  seconds.innerHTML = s + "<br><span>seconds</span></br>";
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  mn_dot.style.transform = `rotate(${m * 6}deg)`;
  sc_dot.style.transform = `rotate(${s * 6}deg)`;
});
