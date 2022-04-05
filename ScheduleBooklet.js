//Dustin Wleczyk
//Maggie Stewart
//Olivia Cheung
//Joshua McCain
//Serene Sam
//Steven Seiden

class ClassConstruct {

    #number = null;
    #section = null;
    #type = null;
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
    #labDays = null;

    static ClassBuilder = class {
        #number = null;
        #section = null;
        #type = null;
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
        #labDays = null;

        setNumber(number){
            this.#number = number;
            return this;
        }

        setSection(section){
            this.#section = section;
            return this;
        }

        setType(type){
            this.#type = type;
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

        setLabDays(labDays){
            this.#labDays = labDays;
            return this;
        }

        build() {
            return new ClassConstruct(
                this.#number,
                this.#section,
                this.#type,
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
                this.#labEndTime,
                this.#labDays)
        }
    }

    constructor(number, section, type, title, hours, startTime, endTime, days, professor, available, size, building, room,
                flags, lab, labStart, labEnd, labDays){
        this.#number = number;
        this.#section = section;
        this.#type = type;
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
        this.#labDays = labDays;
    }

    getNumber() {
        return this.#number;
    }

    getSection() {
        return this.#section;
    }

    getType() {
        return this.#type;
    }

    getTitle() {
        return this.#title;
    }

    getHours() {
        return this.#hours;
    }

    getStartTime() {
        return this.#startTime;
    }

    getEndTime() {
        return this.#endTime;
    }

    getDays() {
        return this.#days;
    }

    getProfessor() {
        return this.#professor;
    }

    getAvailable() {
        return this.#available;
    }

    getSize() {
        return this.#size;
    }

    getBuilding() {
        return this.#building;
    }

    getRoom() {
        return this.#room;
    }

    getFlags() {
        return this.#flags
    }

    getLab() {
        return this.#lab;
    }

    getLabStartTime() {
        return this.#labStartTime;
    }

    getLabEndTime() {
        return this.#labEndTime;
    }

    getLabDays() {
        return this.#labDays;
    }
}

class ClassAggregation {
    /*
    * This constructor should take in the courses previously imported from the XML file and fill the both array
    * members with the data.
    */
    constructor() {
        this.courseSelection = [];
        this.filteredCourseSelection = [];
        this.profSelection = [];
        this.thousandsArrays = [[], [], [], [], [], [], [], [], []];
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
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("test").innerHTML = this.responseText;
                this.fillCourseSelection(xmlFileName);
            }
        };
        httpReq.open("GET", xmlFileName, true);
        httpReq.send();
    }

    /*
    * Pass in an array of CourseConstructs.
    * It separates them by 1000 level into thousandsArrays, having each contained array count for a 1000 level up to
    * 9000 level courses.
    */
    fillThousandsArray(courseArray) {
        for (let i = 1; i <= courseArray.length; i++) {
            this.thousandsArrays[i - 1] = courseArray.filter(function(course) {return i * 1000 <= parseInt(course.getNumber())
                                                                               && parseInt(course.getNumber) < i * 1000 + 1000});
        }
    }

    fillCourseSelection(xmlFileName) {
        //Set up XML file to be read
        let xmlFile = xmlFileName.responseXML;
        //Get row tags so that each course can be filled individually
        let rowTags = xmlFile.getElementsByTagName("Row");


        for (let i = 0; i < rowTags.length; i++) {

            let cellTags = rowTags[i].getElementsByTagName("Cell");

            let tempCourse = new ClassConstruct.ClassBuilder();

            if (cellTags[0].getElementsByTagName("Data")[0].getAttribute("ss.Type") === "Number"
                || cellTags[0].getElementsByTagName("Data")[0].innerText === "(F)"
                || cellTags[0].getElementsByTagName("Data")[0].innerText === "(H)") {

                tempCourse = tempCourse.setAvailable(cellTags[0].getElementsByTagName("Data")[0].innerText)
                    .setSize(cellTags[1].getElementsByTagName("Data")[0].innerText)
                    .setNumber(cellTags[3].getElementsByTagName("Data")[0].innerText);

                if (cellTags[4].querySelector("Data") != null)
                    tempCourse = tempCourse.setType(cellTags[4].getElementsByTagName("Data")[0].innerText);

                tempCourse = tempCourse.setSection(cellTags[5].getElementsByTagName("Data")[0].innerText)
                    .setTitle(cellTags[6].getElementsByTagName("Data")[0].innerText)
                    .setHours(cellTags[7].getElementsByTagName("Data")[0].innerText);

                if (cellTags[8].getElementsByTagName("Data")[0].innerText !== "TBA") {

                    //Set times
                    const timeArray = cellTags[8].getElementsByTagName("Data")[0].innerText.split("-");
                    /*
                    const startTimer=tempCourse.setStartTimeHours(timeArray[0].slice(0,timeArray[0].length-2))
                        .setStartTimeMinutes(timeArray[0].slice(timeArray[0].length-2,timeArray[0].length));
                    const endTimer=tempCourse.setEndTimeHours(timeArray[1].slice(0,timeArray[1].length-2))
                        .setEndTimeMinutes(timeArray[1].slice(timeArray[1].length-2,timeArray[1].length));
                     */
                    tempCourse = tempCourse.setStartTime(timeArray[0]).setEndTime(timeArray[1])
                        .setDays(cellTags[9].getElementsByTagName("Data")[0].innerText);

                    //If it has a room, get the room and building
                    if (cellTags[10].querySelector("Data") != null)
                        tempCourse = tempCourse.setRoom(cellTags[10].getElementsByTagName("Data")[0].innerText)
                            .setBuilding(cellTags[11].getElementsByTagName("Data")[0].innerText);

                } else
                    tempCourse = tempCourse.setStartTime("TBA").setEndTime("TBA");

                //Get special tags when applicable
                if (cellTags[12].querySelector("Data") != null)
                    tempCourse = tempCourse.setFlags(cellTags[12].getElementsByTagName("Data")[0].innerText);

                //Get professor when applicable
                if (cellTags[13].querySelector("Data") != null) {
                    tempCourse = tempCourse.setProfessor(cellTags[13].getElementsByTagName("Data")[0].innerText);
                    //Add unique professors to a list for frontend to display
                    if (!this.profSelection.includes(cellTags[13].getElementsByTagName("Data")[0].innerText))
                        this.profSelection.push(cellTags[13].getElementsByTagName("Data")[0].innerText);
                }

                //Check to see if the class has a lab and fill out its info if so
                if (i + 1 < rowTags.length && rowTags[i + 1].getElementsByTagName("Data")[0].innerText === "LAB") {
                    tempCourse = tempCourse.setLab(true);

                    //Set times by splitting the "-" if not TBA
                    if (rowTags[i + 1].getElementsByTagName("Data")[1].innerText !== "TBA") {
                        const labTimeArray = rowTags[i + 1].getElementsByTagName("Data")[1].innerText.split("-");
                        tempCourse = tempCourse.setLabStartTime(labTimeArray[0]).setLabEndTime(labTimeArray[1])
                            .setLabDays(rowTags[i + 1].getElementsByTagName("Data")[2].innerText);
                    }
                    else
                        tempCourse = tempCourse.setLabStartTime("TBA").setLabEndTime("TBA");

                    //We run this line because we want to skip over the lab line we just imported and pick up with the next row
                    i++;
                }

                this.courseSelection.push(tempCourse.build());
            }
        }

        this.filteredCourseSelection = this.filteredCourseSelection.concat(this.courseSelection);
        this.fillThousandsArray(this.filteredCourseSelection);
            /*
            //Get each Data tag for the row we are working on
            let dataTags = rowTags[i].getElementsByTagName("Data");

            //For each row, if the first data tag is a number or "(F)", we know it is a class we want to extract from
            //If it doesn't follow this rule, for this project, we should just ignore it.
            if (dataTags[0].getAttribute("ss.Type") === "Number" || dataTags[0].innerText === "(F)") {

                let tempCourse = new ClassConstruct.ClassBuilder();

                //All courses have the same 4 starting data tag formats, selecting correct data tag positions
                tempCourse.setAvailable(dataTags[0].innerText)
                          .setSize(dataTags[1].innerText)
                          .setNumber(dataTags[3].innerText);

                //This if statement will split the classes into groups based on the class type, which seems to
                //be a deciding factor in how a class in structured in the booklet.
                if (dataTags[4].getAttribute("ss.Type") === "Number"){
                   tempCourse.setSection(dataTags[4].innerText)
                             .setTitle(dataTags[5].innerText)
                             .setHours(dataTags[6].innerText);
                }
                else if (dataTags[4].innerText === "RES" || dataTags[4].innerText === "IND") {

                }

                //Checks to see if the next row exists, and if it does, is it a lab row? (aka first value is "LAB")
                if (i + 1 < rowTags.length && rowTags[i + 1].getElementsByTagName("Data")[0].innerText === "LAB") {

                    //We run this line because we want to skip over the lab line we just imported and pick up with the next row
                    i++;
                }

            }*/
    }

    /*
    * Filters classes of type CourseConstruct based on start time to get morning classes (start of day to 12:00)
    */
    filterStartTimeByMorning(course) {
        return !course.getEndTime().includes('N') && parseInt(course.getStartTime()) >= 730
               && parseInt(course.getStartTime()) <= 1200;
    }

    /*
    * Filters classes of type CourseConstruct based on start time to get afternoon classes (12:00 to before 4:30 start)
    */
    filterStartTimeByAfternoon(course) {
        return parseInt(course.getStartTime()) < 430 && parseInt(course.getStartTime()) > 1200;
    }

    /*
    * Filters classes of type CourseConstruct based on night flag N to get night classes (start of day to 12:00)
    */
    filterStartTimeByNight(course) {
        return course.getEndTime().includes('N');
    }

    //Filter by days section
    filterMon(course) {
        return course.getDays().includes("M");
    }
    //Dif because we have to make sure it's not reading thursday
    filterTues(course) {
        if (course.getDays().includes("T")) {
            //String only has 1 T, meaning it is exclusively tues or thurs
            if (course.getDays().indexOf("T") === course.getDays().lastIndexOf("T")) {
                //test if the one day is thursday. If it is not, return true because it must be tues at that point
                return !course.getDays().includes("Th");
            }
            //Course has both tues and thurs, return true because it definitely has tues
            else
                return true;
        }
        //Return false because no T means no tuesday
        else
            return false;
    }
    filterWed(course) {
        return course.getDays().includes("W");
    }
    filterThurs(course) {
        return course.getDays().includes("Th");
    }
    filterFri(course) {
        return course.getDays().includes("F");
    }
    filterSat(course) {
        return course.getDays().includes("S");
    }

    /* I am putting the original code here so we don't lose all the flags we could theoretically sort by.
     filterCIFlag(flags){
        if(flags == "100% WEB BASED") {
            return true;
        } else if (flags == "PERMIS OF DEPT"){
            return true;
        } else if (flags == "PERMIS OF INST"){
            return true;
        } else if (flags.substring(0, 3) == "C-I"){
            return true;
        } else if (flags.substring(0, 8) == "RES COLG") {
            return true;
        } else if (flags == "SVC LEARNING") {
            return true;
        } else if (flags == "MAJORS ONLY") {
            return true;
        } else if (flags == "NON-MAJORS ONLY") {
            return true;
        } else if (flags == "AUDITION REQ'D") {
            return true;
        } else if (flags == "AFFORDABLE EDUC") {
            return true;
        } else if (flags == "OPEN EDUCATIONA") {
            return true;
        } else if (flags == "100% WEB BASED"){
            return true;
        } else if (flags == "75-99% WEB BASE"){
            return true;
        } else if (flags == "50-74% WEB BASE"){
            return true;
        } else if (flags == "1-49% WEB BASED"){
            return true;
        }
    }*/

    filterCIFlag(course){
        return course.getFlags.includes("C-I");
    }

    filterWEBFlag(course){
        return course.getFlags.includes("100% WEB BASED") || course.getFlags.includes("75-99% WEB BASE")
            || course.getFlags.includes("50-74% WEB BASE") || course.getFlags.includes("1-49% WEB BASED");
        }

    //a method for filtering availability, it is called in the sortCourses method
    filterAvailable(available){
        //Hiding items that are full or on hold, aka only sending numbers back because those are available
        return !(available.getAvailable() === "(F)" || available.getAvailable() === "(H)");
    }

    /*
    * For this method, parameters will either be passed as:
    * 1) null: meaning we don't want to filter/sort by that parameter.
    * 2) some other meaningful value (TBD what that value is for each filter): will pass the if statement and
    * sort accordingly.
    *
    * *****HOW TO NAME EACH PARAMETER IF NOT NULL*****
    * 1) startTime: as a string, either 1) "morning" 2) "afternoon" 3) "night"
    *
    * 2) days: for each field for the days, true if included, null if not
    *
    * 3) professor: pass an ARRAY of STRINGS of the profs you want to include. Preferably you would pull the strings
    * off of the profSelection array based on what professors are chosen so we can do this operation for any xml file.
    *
    * 4) available: true if included, null if not
    *
    * 5) CIflag: true if included, null if not
    *
    * 6) WEBflag: true if included, null if not
    */
    sortCourses(startTime, mon, tues, wed, thurs, fri, sat, professorArray, available, CIflag, WEBflag) {
        this.filteredCourseSelection = [].concat(this.courseSelection);

        if (startTime != null){
            if (startTime === "morning")
                this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterStartTimeByMorning);
            else if (startTime === "afternoon")
                this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterStartTimeByAfternoon);
            else if (startTime === "night")
                this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterStartTimeByNight);
        }

        if (mon != null)
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterMon);
        if (tues != null)
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterTues);
        if (wed != null)
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterWed);
        if (thurs != null)
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterThurs);
        if (fri != null)
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterFri);
        if (sat != null)
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterSat);

        /*.filter() would not work for this because the professors change from each xml file, as well as there being too
        * many to keep track of. I did it this way because .filter does not take in a professor parameter, so it's just
        * easier to do the operation here in the filter.
        */
        if (Array.isArray(professorArray) && professorArray.length !== 0){
            let tempArray = [];
            for (let i = 0; i < professorArray.length; i++) {
                for (let j = 0; j < this.filteredCourseSelection.length; j++) {
                    if (professorArray[i] === this.filteredCourseSelection[j].getProfessor())
                        tempArray.push(this.filteredCourseSelection[j]);
                }
            }
            this.filteredCourseSelection = tempArray;
        }

        if (available != null) {
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterAvailable);
        }

        if (CIflag != null){
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterCIFlag);
        }

        if (WEBflag != null){
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterWEBFlag);
        }

        this.fillThousandsArray(this.filteredCourseSelection);
    }

    sendCourses(){
        return this.filteredCourseSelection;
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
        return true;
    }
}


class SearchBar {
    Run () {
        return true;
    }

    Search(){
        objClassAgg.sortCourses(null, null, null, null, null, null,null,null,
                                null,null,null);
    }
}

let objClassAgg = new ClassAggregation();

objClassAgg.loadXMLFile("csc.xml");

let websiteDisplay = new Display();

websiteDisplay.Run();
