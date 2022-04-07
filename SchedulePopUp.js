// File for the Mock Schedule aka the Pop-up box for the user's proposed schedule

// take user input for class department, number, section number, and credit hours
// format and output the user input in a pop up box / window

// ask for user input for desired number of credit hours
// loop until user hits 'q' or exceeds desired number of credit hours for courses selected

let desiredHours = prompt("Enter the number of desired credit hours or q to quit", "");
let text;
int hours = 0;
int totalCreditHr = 0;

while ((desiredHours != null || desiredHours != "q" || desiredHours != "Q") && (hours <= desiredHours)) {
    text = "User cancelled the prompt";
    //class department drop down
    let classNum = prompt("Enter the course number or q to quit");
    let sectionNum = prompt("Enter the course section number or q to quit");
    let creditHour = prompt("Enter the number of credit hours for the course or q to quit");
    totalCreditHr = totalCreditHr + creditHour;

    //display information

}

window.writeValues = function(form) {
    var classNum = form.classNum.value;
    var sectionNum = form.sectionNum.value;
    var creditHour = form.creditHour.value;

    document.getElementById('classInfo').innerHTML = classNum + ' ' + sectionNum + ' ' + creditHour;
}