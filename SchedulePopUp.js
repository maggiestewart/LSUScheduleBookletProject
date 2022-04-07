// File for the Mock Schedule aka the Pop-up box for the user's proposed schedule

// take user input for class department, number, section number, and credit hours
// format and output the user input in a pop up box / window

// ask for user input for desired number of credit hours
// loop until user hits 'q' or exceeds desired number of credit hours for courses selected

let desiredHours = 0;
desiredHours = ("Enter the number of desired credit hours or q to quit");
let text;
let hours = 0;
let totalCreditHr = 0;


while ((desiredHours != "q" || desiredHours != "Q") && (hours <= desiredHours)) {
    text = "User cancelled the prompt";
    //class department drop down
    // let classNum = prompt("Enter the course number or q to quit");
    // let sectionNum = prompt("Enter the course section number or q to quit");
    // let creditHour = prompt("Enter the number of credit hours for the course or q to quit");
    totalCreditHr = totalCreditHr + creditHour;

    //display information

}

function myFunc() {
    let input = document.getElementById("chooseDepartment");
    let input = document.getElementById("courseNum");
    let input = document.getElementById("courseSection");
    let input = document.getElementById("creditHour");

}


// function courseName() {
//     let input = document.getElementById("chooseDepartment");
//     alert(input);
// }
//
// window.writeValues = function(form) {
//     let classNum = form.classNum.value;
//     let sectionNum = form.sectionNum.value;
//     let creditHour = form.creditHour.value;
//
//     document.getElementById('classInfo').innerHTML = classNum + ' ' + sectionNum + ' ' + creditHour;
// }
