


function getDayName(dateString) {
    let dayName;
    // Write your code here
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  dayName = dayNames[new Date(dateString).getDay()];
    return dayName;
}