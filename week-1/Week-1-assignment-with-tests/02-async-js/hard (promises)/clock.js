function showTimeWithSeconds(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`
}

function showTimeWithAMPM(date) {
    const hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = String(hours % 12 || 12).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${formattedHours}:${minutes}:${seconds} ${ampm}`
}

function logDate() {
    const currentDate = new Date();
    console.log(showTimeWithAMPM(currentDate));
}

setInterval(logDate, 1000);