//Dustin Wleczyk
//Maggie Stewart
//Olivia Cheung
//Joshua McCain
//Serene Sam
//Steven Seiden

function Course () {
    this.department = "CSC";
}


class ClassConstruct {
    constructor(){
        course.number = 3380;
        course.section = 1;
        course.title = "Object Oriented Design";
        course.hours = 3;
        course.startTime = "10:30";
        course.endTime = "11:50";
        course.days = "TR";
        course.professor = "Aymond";
        course.available = 5;
        course.size = 90;
        course.building = "Patrick Taylor";
        course.room = 1100;
        course.flags = "CI";
        course.lab = false;
        course.labStartTime = null;
        course.labEndTime = null;
    }

    //class constructor
    //will have a function that takes in parameters of data types of the classes (search bars)
    //will be pulling from XML file
}



class ClassAggregation {
    /*
    * This constructor should take in the courses previously imported from the XML file and fill the both array
    * members with the data.
    */
    constructor(){
        this.courseSelection = [];
        this.filteredCourseSelection = [];
    }

    Run () {
        return true;
    }

    /*
     * Loads the xml file that the function is called with so that any xml file from LSU booklet can be used.
     * In the if statement, calling the fill course selection lets us fill our array when the file is ready.
     */
    loadXMLFile(xmlFileName){
        let httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("test").innerHTML = this.responseText;
                this.fillCourseSelection(xmlFileName);
            }
        };
        httpReq.open("GET", xmlFileName, true);
        httpReq.send();
    }

    fillCourseSelection(xmlFileName){
        //Set up XML file to be read
        let xmlFile = xmlFileName.responseXML;
        //Get row tags so that each course can be filled individually
        let rowTags = xmlFile.getElementsByTagName("Row");

        for (let i = 0; i < rowTags.length; i++){
            //Get each Data tag for the row we are working on
            let dataTags = rowTags[i].getElementsByTagName("Data");
            for (let j = 0; j < dataTags.length; j++){
                
            }

        }

        this.courseSelection = [new ClassConstruct()];
        this.filteredCourseSelection = [new ClassConstruct()];
    }

    sortCourses(number, section, title, hours, startTime, endTime, days,
                professor, available, size, building, room, flags, lab, labStart, labEnd) {
        return true;
    }

    sendFilteredClasses(){
        return this.filteredCourseSelection;
    }
}


class PopupBox {
    //shows the popup box
    Run () {
        return true;
    }

    ShowBox () {
        return true;
    }
}

class SchedulePlanner extends PopupBox {
    //Take user input
}

class HelpfulLinks extends PopupBox {
    Run () {
        return ["link1","link2"];
    }
}

class Display {
    /*
    * displays the schedule booklet and such
    * Also entails the constant updating of the information being displayed on screen, such as updated classes
    */
    Run () {
        //These are examples of the types of search bars and pop-up windows we will instantiate
        let availabilitySearch = new SearchBar;
        let schedulePlannerBox = new SchedulePlanner();
        let helpfulLinks = new HelpfulLinks();
        return true;
    }
}


class SearchBar {
    Run () {
        return true;
    }

    Search(){
        objClassAgg.sortCourses(null,null,null,null,null,null,null,
            null,null,null,null,null,null,null,
            null,null);
    }
}


let course = new Course();

let objClassAgg = new ClassAggregation();

objClassAgg.loadXMLFile("csc.xml");

let websiteDisplay = new Display();

websiteDisplay.Run();
