// arrays of months and weekdays to display the month and weekday as a string
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// select elements
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
// we can select a class and specifically its nested elements if we would like
const items = document.querySelectorAll(".deadline-format h4");

// temporary date so if the timer runs out we reset it for display purposes
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// setup a new date, then get the values, date is zero based
// year, month, day, hours, minutes, seconds
// let futureDate = new Date(2022, 2, 19, 10, 30, 0);

// extract the future date so we have the values we want
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
// months and days is a bit more complicated
let month = futureDate.getMonth();
// get the month value 0-11 from the months array
month = months[month];
// date is the date, just theb day of the month as a number
const date = futureDate.getDate();
// weekday is the weekday from the weekdays array, 0-6
const weekday = weekdays[futureDate.getDay()];

// populate our giveaway text
giveaway.textContent = `giveaway ends on ${weekday} ${month} ${date} ${year} @ ${hours}:${minutes}`;

// future time in ms, so we getTime();
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  // get the current time in ms
  const today = new Date().getTime();
  const t = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24 hours

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all the values
  let days = t / oneDay;
  days = Math.floor(days);

  // since the date is in the future the hours displays as a large number
  // we need the remainders for hours and minutes, and seconds to get our values
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  // function to format our countdown displayu
  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  // iterate through the items, and access our array values
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has ended</h4>`;
  }
};

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
