//Dustin Wleczyk
//Maggie Stewart
//Olivia Cheung
//Joshua McCain
//Serene Sam
//Steven Seiden

class ClassConstruct {

    #number = null;
    #section = null;
    #title = null;
    #hours = null;
    #startTime = null;
    #endTime = null;
    #days = null;
    #professor = null;
    #available = null;
    #size = null;
    #building = null;
    #room = null;
    #flags = null;
    #lab = null;
    #labStartTime = null;
    #labEndTime = null;

    static ClassBuilder = class {
        #number = null;
        #section = null;
        #title = null;
        #hours = null;
        #startTime = null;
        #endTime = null;
        #days = null;
        #professor = null;
        #available = null;
        #size = null;
        #building = null;
        #room = null;
        #flags = null;
        #lab = null;
        #labStartTime = null;
        #labEndTime = null;

        setNumber(number){
            this.#number = number;
            return this;
        }

        setSection(section){
            this.#section = section;
            return this;
        }

        setTitle(title){
            this.#title = title;
            return this;
        }

        setHours(hours){
            this.#hours = hours;
            return this;
        }

        setStartTime(startTime){
            this.#startTime = startTime;
            return this;
        }

        setEndTime(endTime){
            this.#endTime = endTime;
            return this;
        }

        setDays(days){
            this.#days = days;
            return this;
        }

        setProfessor(professor){
            this.#professor = professor;
            return this;
        }

        setAvailable(available){
            this.#available = available;
            return this;
        }

        setSize(size){
            this.#size = size;
            return this;
        }

        setBuilding(building){
            this.#building = building;
            return this;
        }

        setRoom(room){
            this.#room = room;
            return this;
        }

        setFlags(flags){
            this.#flags = flags;
            return this;
        }

        setLab(lab){
            this.#lab = lab;
            return this;
        }

        setLabStartTime(labStartTime){
            this.#labStartTime = labStartTime;
            return this;
        }

        setLabEndTime(labEndTime){
            this.#labEndTime = labEndTime;
            return this;
        }

        build() {
            const course = new ClassConstruct(
                this.#number,
                this.#section,
                this.#title,
                this.#hours,
                this.#startTime,
                this.#endTime,
                this.#days,
                this.#professor,
                this.#available,
                this.#size,
                this.#building,
                this.#room,
                this.#flags,
                this.#lab,
                this.#labStartTime,
                this.#labEndTime)
            return course
        }
    }

    constructor(number, section, title, hours, startTime, endTime, days, professor, available, size, building, room,
                flags, lab, labStart, labEnd){
        this.#number = number;
        this.#section = section;
        this.#title = title;
        this.#hours = hours;
        this.#startTime = startTime;
        this.#endTime = endTime;
        this.#days = days;
        this.#professor = professor;
        this.#available = available;
        this.#size = size;
        this.#building = building;
        this.#room = room;
        this.#flags = flags;
        this.#lab = lab;
        this.#labStartTime = labStart;
        this.#labEndTime = labEnd;
    }
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
                //Checks to see if the next row exists, and if it does it is a lab row (aka # of Data tags less than normal)
                if (i + 1 < rowTags.length && rowTags[i + 1].getElementsByTagName("Data").length < 12){

                    //We run this line because we want to skip over the lab line we just imported and pick up with the next row
                    i++;
                }
                else {

                }

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

let objClassAgg = new ClassAggregation();

objClassAgg.loadXMLFile("csc.xml");

let websiteDisplay = new Display();

websiteDisplay.Run();
