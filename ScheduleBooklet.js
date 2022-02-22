function Course () {
    this.department = "CSC";

}

let course = new Course();




class ClassConstruct {
    constructor(file){
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
    }

    //class constructor
    //will have a function that takes in parameters of data types of the classes (search bars)
    //will be pulling from XML file
}



class ClassAggregation {

    courseSelection = [];
    filteredCourseSelection = [];

    Run () {
        return true;
    }

    sortCourses(number, section, title, hours, startTime, endTime, days, professor, available, size, building, room, flags) {
    }

    sendFilteredClasses(){
        return this.filteredCourseSelection;
    }
}

class Display {
    //displays the schedule booklet and such
    Run () {
        return true;
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
}

class HelpfulLinks extends PopupBox {
}

class SearchBar {
    Run () {
        return true;
    }
}
