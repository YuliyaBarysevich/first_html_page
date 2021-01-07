let today = new Date();
let hourNow = today.getHours();
let workHours;

if (hourNow >= 9 || hourNow < 18) {
    workHours = 'We are open! Contact Us.'
} else {
    workHours = 'Sorry! We are closed now. Contact Us Tomorrow.'
}

document.write('<h3>' + workHours + '</h3>');