
function askUserName() {
let userName = prompt('Please Enter Your Name:');

document.write('Welcome, ' + userName + '!');

};

function gettingNewsLetters() {
   let answer = prompt('Do you want to sign up for newsletters? Please enter YES or NO'); 

   if (answer == 'YES' || answer == 'yes'){
    prompt("We need your email :)")
     } else if (answer == 'NO' || answer == 'no'){
    alert('Thank you for your answer!')
      }else {
    alert('Please type YES or NO')
      }
};


function workingHours() {
let today = new Date();
let hourNow = today.getHours();
let workHours;

if (hourNow >= 9 || hourNow < 18) {
    workHours = 'We are open! Contact Us.'
} else {
    workHours = 'Sorry! We are closed now. Contact Us Tomorrow.'
}

document.write('<h3>' + workHours + '</h3>');
};