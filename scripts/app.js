const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const setTime = () => {
    const now = new Date();
    const launch = new Date('January 1, 2022 00:00:00'); // time to new year
    
    const estimatedTime = launch - now;
    
    const second = Math.floor((estimatedTime / 1000) % 60);
    const minute = Math.floor(((estimatedTime / 1000) / 60) % 60);
    const hour = Math.floor((((estimatedTime / 1000) / 60) / 60) % 24);
    const day = Math.floor((((estimatedTime / 1000) / 60) / 60) / 24);
    
    second < 10 ? seconds.textContent = '0' + second : seconds.textContent = second
    minute < 10 ? minutes.textContent = '0' + minute : minutes.textContent = minute
    hour < 10 ? hours.textContent = '0' + hour : hours.textContent = hour
    day < 10 ? days.textContent = '0' + day : days.textContent = day
}

setInterval(setTime, 1000)