const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");
const CourseDetails = require("./CourseDetails");

class Students extends Members {

    static #idValue = 0;
    static #allStudentsObjects = [];
    #student = {
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }

    /**
     * age >= 16
     *      if not, do not enroll and show message, student has to be of 16 or above
     *
     * if invalid studentCourse
     *      do not enroll and show message, student should provide correct course name
     * 
     * all students must be within usa (USA, United States of America)
     *      if not, do not enroll and show message, student has to inside the United States of America
     * 
     * if data is correct
     *      Congratulations for enrolling in <courseName>
     *      Student id : XX
     */
    constructor(studentName, studentAge, studentCountry, studentCourse) {
        super();
        if (studentAge >= 16 && CourseDetails.isCourseNameValid(studentCourse) && studentCountry.toLowerCase().localeCompare('usa') === 0 ) {
            const courseData = CourseDetails.isCourseNameValid(studentCourse);
            this.member.name = MyStringFunctions.toTitleCase(studentName);
            this.member.age = studentAge;
            this.member.location = studentCountry.toUpperCase();
            this.#student.sCourseDetails.courseName = courseData.courseName;
            this.#student.sCourseDetails.coursePrice = courseData.price;
            this.#student.sCourseDetails.courseLength = courseData.length;
            this.#student.sBalance = courseData.price;
            this.#student.sId = ++Students.#idValue;
            Students.#allStudentsObjects.push(this.#student) 
            console.log(`\nThank you for enrolling.\nYour id value is ${this.#student.sId}\n`);
        } else {
            console.log("\nDO NOT ENROLL");
        }
    }
    static getStudent(checkId) {
        return Students.#allStudentsObjects.find(student => student.sId === checkId)
    }

    showMyDetails() {
        console.log(`\nStudent details:\nId: ${this.#student.sId}`);
        console.log(`Student grade: ${this.#student.sGrade}`);
        super.showMyDetails();
        console.log(`Course name: ${this.#student.sCourseDetails.courseName}\nBalance: $${this.#student.sBalance}\n`);
    }
    
    /**
        changeCourse
        submitDocuments
        makePayment
        dropOut
        orderBooks
    */
   
    static messageFromClass2022(msg) {
        console.log(`\nMessage to institute from the Class of 2022:\n${msg}\n`);
    }
    /**
     * check if student is already enrolled in the course
     */
    
    #isStudentEnrolledIn(newCourseName) {
        return this.#student.sCourseDetails.courseName.toLocaleLowerCase() === newCourseName.toLowerCase()
    }
    /**
     * changeCourse
     * 
     * input: newCourseName
     * 
     * if newCourseName is valid AND student is not already enrolled in the course
     *      then change the course name
     *      update the course-length as per the new course-length
     *      update the course-price as per the new course-price
     *      update the student-balance as per the new course-price
     * 
     * if newCourseName is invalid
     *      then print msg -> Invalid course name
     * 
     * if student is already enrolled in the course
     *      then print -> You are already enrolled in the course
     * 
     */

    changeCourseName(newCourseName) {
        if (!this.#isStudentEnrolledIn(newCourseName) && CourseDetails.isCourseNameValid(newCourseName)) {
           const courseData = CourseDetails.isCourseNameValid(newCourseName)
           this.#student.sCourseDetails.courseName = courseData.courseName
            this.#student.sCourseDetails.length = courseData.length
            this.#student.sCourseDetails.coursePrice = courseData.price
            this.#student.sBalance = courseData.price
            console.log(`your course have been updated to ${courseData.courseName}`);
        } else if (this.#isStudentEnrolledIn(newCourseName)) {
            console.log('You are already enrolled in the course')
        } else if (!CourseDetails.isCourseNameValid(newCourseName)) {
            console.log('Invalid course name');
        } 

    } 
    
    /**
     * makePayment
     * 
     * input : amount
     * 
     * if amount is > 0 and less or equal to balance
     *      print -> Thank you for making payment of $amount
     *      and update the student balance.
     *      if balance is zero, print -> No more payment required.
     *      else -> Updated balance is $balance
     * 
     * if amount is invalid
     *      print -> Invalid amount. Your balance is $balance
     * 
     */

    makePayment(amount) {
        if (amount > 0 && amount <= this.#student.sBalance) {
            this.#student.sBalance = this.#student.sBalance - amount
            console.log(`Thank you for your payment of $${amount}`);
            if (this.#student.sBalance === 0 || amount === this.#student.sBalance) {
                console.log('No more payment required')
            } else {
                console.log(`Updated balance is $${this.#student.sBalance}`);
            } 
        } else if (amount <= 0 || amount > this.#student.sBalance) {
            console.log(`Invalid amount. Your balance is $${this.#student.sBalance}`);
        } 
    }

}
module.exports = Students;