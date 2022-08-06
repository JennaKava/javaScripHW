const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");
const CourseDetails = require("./CourseDetails");
const Students = require("./Students");

class Teachers extends Members {

    static #idValue = 0;

    #teacher = {
        tId : 0,
        tCourseName : '',
        tSalary : 0
    }

    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */
    constructor(teacherName, teacherAge, teacherCountry, teacherCourseName, teacherSalary) {
        super()
        
        if (teacherAge >= 21 && CourseDetails.isCourseNameValid(teacherCourseName) && teacherCountry.toLowerCase().localeCompare('usa') === 0){
            const courseData = CourseDetails.isCourseNameValid(teacherCourseName);
            this.#teacher.tCourseName = courseData.courseName
            this.#teacher.tSalary = teacherSalary
            this.#teacher.tId = ++Teachers.#idValue
            this.member.name = MyStringFunctions.toTitleCase(teacherName);
            this.member.age = teacherAge;
            this.member.location = teacherCountry.toUpperCase();
            console.log(`\nYou are hired ${teacherName}`);
        } else {
            console.log('\nSorry we went with another candidate');
        }
    }

    showMyDetails() {
        console.log(`\nTeachers delails:\nId: ${this.#teacher.tId}`);
        super.showMyDetails();
        console.log(`Teaching course: ${this.#teacher.tCourseName}\nAnnual Salary: $${this.#teacher.tSalary} `);
    }

    #isTeacherEnrolledIn(newCourseName) {
        return this.#teacher.tCourseName.toLocaleLowerCase() === newCourseName.toLowerCase()
    }

    changeTeachingCourse(newCourseName) {
        if (!this.#isTeacherEnrolledIn(newCourseName) && CourseDetails.isCourseNameValid(newCourseName)) {
            const courseData = CourseDetails.isCourseNameValid(newCourseName)
            this.#teacher.tCourseName = courseData.courseName
             console.log(`your course have been updated to ${courseData.courseName}`);
         } else if (this.#isTeacherEnrolledIn(newCourseName)) {
             console.log('You are already enrolled in the course')
         } else if (!CourseDetails.isCourseNameValid(newCourseName)) {
             console.log('Invalid course name');
         } 
    }

    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */
    addGrade(studentId, grade) {
        if (Students.getStudent(studentId)) {
            if (!Students.getStudent(studentId).sGdare){
                Students.getStudent(studentId).sGdare = grade.toUpperCase()
                console.log(`grade is successfully added to student id -> ${studentId}`);
            } else {
                console.log('remove grade from student');
            }
        } else {
            console.log("Invalid student id");
        }
    }

    /**
     * removeGrade
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */
    removeGrade(studentId) {
        if (Students.getStudent(studentId)) {
            if (Students.getStudent(studentId).sGdare !== ''){
                Students.getStudent(studentId).sGdare = ''
                console.log(`grade is successfully removed from student id -> ${studentId}`);
            } else {
                console.log('Student has no grade');
            }
        } else {
            console.log("Invalid student id");
        }   
    }


}
module.exports = Teachers