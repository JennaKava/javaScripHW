class CourseDetails {

    static courseDetails = [
        {
            courseName : 'Automation',
            price : 1000,
            length : 6
        },
        {
            courseName : 'QA',
            price : 2000,
            length : 8
        },
        {
            courseName : 'Mobile',
            price : 3000,
            length : 12
        }
    ]

    /**
     * we want course-object which has name as checkForCourse
     */
    static isCourseNameValid(checkForCourse) {
        return CourseDetails.courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }
}
module.exports = CourseDetails;