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

        setNumber(number) {
            this.#number = number;
            return this;
        }

        setSection(section) {
            this.#section = section;
            return this;
        }

        setType(type) {
            this.#type = type;
            return this;
        }

        setTitle(title) {
            this.#title = title;
            return this;
        }

        setHours(hours) {
            this.#hours = hours;
            return this;
        }

        setStartTime(startTime) {
            this.#startTime = startTime;
            return this;
        }

        setEndTime(endTime) {
            this.#endTime = endTime;
            return this;
        }

        setDays(days) {
            this.#days = days;
            return this;
        }

        setProfessor(professor) {
            this.#professor = professor;
            return this;
        }

        setAvailable(available) {
            this.#available = available;
            return this;
        }

        setSize(size) {
            this.#size = size;
            return this;
        }

        setBuilding(building) {
            this.#building = building;
            return this;
        }

        setRoom(room) {
            this.#room = room;
            return this;
        }

        setFlags(flags) {
            this.#flags = flags;
            return this;
        }

        setLab(lab) {
            this.#lab = lab;
            return this;
        }

        setLabStartTime(labStartTime) {
            this.#labStartTime = labStartTime;
            return this;
        }

        setLabEndTime(labEndTime) {
            this.#labEndTime = labEndTime;
            return this;
        }

        setLabDays(labDays) {
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
                flags, lab, labStart, labEnd, labDays) {
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
    constructor(XMLFileName) {
        this.courseSelection = [];
        this.filteredCourseSelection = [];
        this.profSelection = [];
        this.thousandsArrays = [[], [], [], [], [], [], [], [], []];
        this.tables = [];
        this.XMLFileName = XMLFileName;
        this.loadXMLFile()
    }

    /*
     * Loads the xml file that the function is called with so that any xml file from LSU booklet can be used.
     * In the if statement, calling the fill course selection lets us fill our array when the file is ready.
     * This is called on object creation so the arrays will be ready for use no matter what.
     */
    loadXMLFile() {
        /*let httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200 && this.XMLFileName !== null) {
                document.getElementById("test").innerHTML = this.responseText;
                this.fillCourseSelection(this.XMLFileName);
            }
        };
        httpReq.open("GET", this.XMLFileName, true);
        httpReq.send();*/
        let xmlContent = "";
        let labFlag = false;
        fetch(this.XMLFileName).then((response) => {
            response.text().then((xml) => {
                xmlContent = xml;
                let parser = new DOMParser();
                let xmlDOM = parser.parseFromString(xmlContent, "application/xml");
                let rows = xmlDOM.querySelectorAll("Row");

                rows.forEach(rowXMLNode => {
                    if (!labFlag) {
                        let tempCourse = new ClassConstruct.ClassBuilder();

                        //If first tag has a data tag child and
                        if (rowXMLNode.children[0].childNodes[0].nodeValue === "(F)"
                            || rowXMLNode.children[0].childNodes[0].nodeValue === "(H)"
                            || rowXMLNode.children[0].children[0].getAttribute("Type") === "Number") {

                            tempCourse = tempCourse.setAvailable(rowXMLNode.children[0].childNodes[0].nodeValue)
                                .setSize(rowXMLNode.children[1].childNodes[0].nodeValue)
                                .setNumber(rowXMLNode.children[3].childNodes[0].nodeValue)

                            if (rowXMLNode.children[4].querySelector("Data") !== null)
                                tempCourse = tempCourse.setType(rowXMLNode.children[4].childNodes[0].nodeValue);

                            tempCourse = tempCourse.setSection(rowXMLNode.children[5].childNodes[0].nodeValue)
                                .setTitle(rowXMLNode.children[6].childNodes[0].nodeValue)
                                .setHours(rowXMLNode.children[7].childNodes[0].nodeValue);

                            if (rowXMLNode.children[8].childNodes[0].nodeValue !== "TBA") {
                                //Set times
                                const timeArray = rowXMLNode.children[8].childNodes[0].nodeValue.split("-");
                                tempCourse = tempCourse.setStartTime(timeArray[0]).setEndTime(timeArray[1])
                                    .setDays(rowXMLNode.children[9].childNodes[0].nodeValue);

                                //If it has a room, get the room and building
                                if (rowXMLNode.children[10].querySelector("Data") !== null)
                                    tempCourse = tempCourse.setRoom(rowXMLNode.children[10].childNodes[0].nodeValue)
                                        .setBuilding(rowXMLNode.children[11].childNodes[0].nodeValue);
                            } else
                                tempCourse = tempCourse.setStartTime("TBA").setEndTime("TBA");

                            //Get special tags when applicable
                            if (rowXMLNode.children[12].querySelector("Data") !== null)
                                tempCourse = tempCourse.setFlags(rowXMLNode.children[12].childNodes[0].nodeValue);

                            //Get professor when applicable
                            if (rowXMLNode.children[13].querySelector("Data") !== null) {
                                tempCourse = tempCourse.setProfessor(rowXMLNode.children[13].childNodes[0].nodeValue);
                                //Add unique professors to a list for frontend to display
                                if (!this.profSelection.includes(rowXMLNode.children[13].childNodes[0].nodeValue))
                                    this.profSelection.push(rowXMLNode.children[13].childNodes[0].nodeValue);
                            }

                            //Check to see if the class has a lab and fill out its info if so
                            if (rowXMLNode.nextSibling !== null && rowXMLNode.nextSibling.childNodes[4].childNodes[0].nodeValue === "LAB") {
                                tempCourse = tempCourse.setLab("LAB");

                                //Set times by splitting the "-" if not TBA
                                if (rowXMLNode.nextSibling.childNodes[8].childNodes[0].nodeValue !== "TBA") {
                                    const labTimeArray = rowXMLNode.nextSibling.childNodes[8].childNodes[0].nodeValue.split("-");
                                    tempCourse = tempCourse.setLabStartTime(labTimeArray[0]).setLabEndTime(labTimeArray[1])
                                        .setLabDays(rowXMLNode.nextSibling.childNodes[9].childNodes[0].nodeValue);
                                } else
                                    tempCourse = tempCourse.setLabStartTime("TBA").setLabEndTime("TBA");

                                //We run this line because we want to skip over the lab line we just imported and pick up with the next row
                                labFlag = true;
                            }

                            this.courseSelection.push(tempCourse.build());
                        }
                    }
                    //Reset lab flag so we can start reading rows again
                    else
                        labFlag = false;
                });
                this.filteredCourseSelection = this.filteredCourseSelection.concat(this.courseSelection);
                this.fillThousandsArrayAndTabularize(this.filteredCourseSelection);
            });
        });
    }

    /*
    * Pass in an array of CourseConstructs.
    * It separates them by 1000 level into thousandsArrays, having each contained array count for a 1000 level up to
    * 9000 level courses.
    *
    * The method then fills this.tables with the tables in the form of strings that can then be sent to table tags in
    * the frontend.
    */
    fillThousandsArrayAndTabularize(courseArray) {
        for (let i = 1; i <= courseArray.length; i++) {
            this.thousandsArrays[i - 1] = courseArray.filter(function (course) {
                return i * 1000 <= parseInt(course.getNumber())
                    && parseInt(course.getNumber) < i * 1000 + 1000
            });
        }
        //After filling the array, tabularize all values and send tables to frontend
        let courses;
        for (courses in this.thousandsArrays) {
            this.tables.push(this.tabularize(courses));
        }
        //Sends each 1000 table to their respective table tag in frontend

    }

    /*
    * Takes any array of ClassConstructs and makes a table. Returns the table when constructed.
    */
    tabularize(array) {
        let table =
            `<tr>
                <th colspan="14">Course</th>
                <th colspan="3">Lab</th>
            </tr>
            <tr>
                <th>Avl</th>
                <th>Enrl</th>
                <th>Number</th>
                <th>Type</th>
                <th>Section</th>
                <th>Title</th>
                <th>Hours</th>
                <th>Start</th>
                <th>End</th>
                <th>Days</th>
                <th>Room</th>
                <th>Building</th>
                <th>Special Enrollment</th>
                <th>Professor</th>
                <th>Lab Start</th>
                <th>Lab End</th>
                <th>Lab Days</th>
            </tr>`;

        let course;
        for (course in array) {
            table += "<tr><td>" +
                course.getAvailable() + "</td>><td>" +
                course.getSize() + "</td>><td>" +
                course.getNumber() + "</td>><td>" +
                course.getType() + "</td>><td>" +
                course.getSection() + "</td>><td>" +
                course.getTitle() + "</td>><td>" +
                course.getHours() + "</td>><td>" +
                course.getStartTime() + "</td>><td>" +
                course.getEndTime() + "</td>><td>" +
                course.getDays() + "</td>><td>" +
                course.getRoom() + "</td>><td>" +
                course.getBuilding() + "</td>><td>" +
                course.getFlags() + "</td>><td>" +
                course.getProfessor() + "</td>><td>" +
                course.getLabStartTime() + "</td>><td>" +
                course.getLabEndTime() + "</td>><td>" +
                course.getLabDays() + "</td>><td>" +
                "</td>></tr>>";
        }

        return table;
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
                    } else
                        tempCourse = tempCourse.setLabStartTime("TBA").setLabEndTime("TBA");

                    //We run this line because we want to skip over the lab line we just imported and pick up with the next row
                    i++;
                }

                this.courseSelection.push(tempCourse.build());
            }
        }

        this.filteredCourseSelection = this.filteredCourseSelection.concat(this.courseSelection);
        this.fillThousandsArrayAndTabularize(this.filteredCourseSelection);
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

    filterCIFlag(course) {
        return course.getFlags.includes("C-I");
    }

    filterWEBFlag(course) {
        return course.getFlags.includes("100% WEB BASED") || course.getFlags.includes("75-99% WEB BASE")
            || course.getFlags.includes("50-74% WEB BASE") || course.getFlags.includes("1-49% WEB BASED");
    }

    //a method for filtering availability, it is called in the sortCourses method
    filterAvailable(available) {
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

        if (startTime != null) {
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
        if (Array.isArray(professorArray) && professorArray.length !== 0) {
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

        if (CIflag != null) {
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterCIFlag);
        }

        if (WEBflag != null) {
            this.filteredCourseSelection = this.filteredCourseSelection.filter(this.filterWEBFlag);
        }

        this.fillThousandsArrayAndTabularize(this.filteredCourseSelection);
    }

    getThousandsCourses() {
        return this.thousandsArrays;
    }

    getProfArray() {
        return this.profSelection;
    }
}

const classAggMap = new Map([
    ["fal22csc", new ClassAggregation("fal22csc.xml")],
    ["fal22engl", new ClassAggregation("fal22engl.xml")],
    ["fal22engr", new ClassAggregation("fal22engr.xml")],
    ["fal22hnrs", new ClassAggregation("fal22hnrs.xml")],
    ["fal22math", new ClassAggregation("fal22math.xml")],
    ["spr22csc", new ClassAggregation("spr22csc.xml")],
    ["fal21csc", new ClassAggregation("fal21csc.xml")],
    ["spr21csc", new ClassAggregation("spr21csc.xml")],
    [],
    [],
    [],
    []
]);

//classAggMap.get("fal22csc").loadXMLFile();
