var months = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
];
var weekDays = [
    "კვირა",
    "ორშაბათი",
    "სამშაბათი",
    "ოთხშაბათი",
    "ხუთშაბათი",
    "პარასკევი",
    "შაბათი",
]
function handleCalculateDateTime() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var time = `${hours}:${minutes}:${seconds}`;

    var year = now.getFullYear();
    var month = now.getMonth();
    var weekDay = now.getDay();
    var day = now.getDate();

    var fullDate =  `${year} წელი , ${months[month]}, ${weekDays[weekDay]}, ${day} რიცხვი`;

    var fullDateTime = `${fullDate} - ${time}`;

    document.getElementById("time").innerText = time;
}   

document.addEventListener("DOMContentLoaded", function () {
    setInterval(handleCalculateDateTime, 1000);
    handleCalculateDateTime();
});

