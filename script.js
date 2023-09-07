const day_of_week = document.querySelector(".day_of_week");
const current_utc_time = document.querySelector(".current_utc_time");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
const index = date.getDay();
const current_day = days[index];

const utc = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000);
const utc_time = utc.toISOString().split('.')[0] + 'Z';

day_of_week.textContent = current_day;
current_utc_time.textContent = utc_time;
