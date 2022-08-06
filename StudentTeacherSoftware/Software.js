const Students = require('./Students');
const Teachers = require('./Teachers')

const s1 = new Students('jOHn', 20, 'USA', 'mobile');
/*
    idValue = 0
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s1.enrollment('jOHn', 20, 'USA', 'mobile');
/*
        idValue = 1
        student = {
        sName : 'john',
        sAge : 20,
        sCountry : 'USA',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : 'Mobile',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

s1.showMyDetails();

// s1.changeCource('swift')
// s1.showMyDetails();


const s2 = new Students('Gigi', 20, 'USA', 'QA');
/*
    idValue = 0;
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s2.enrollment('Gigi', 20, 'USA', 'QA');


s2.showMyDetails();


const s3 = new Students('kiAN', 21, 'uSa', 'moBiLE');

s3.showMyDetails();
s3.changeCourseName('qa')
s3.showMyDetails()
s3.changeCourseName('swift')
s3.showMyDetails()
s3.changeCourseName('mobile')
s3.showMyDetails()

s3.makePayment(1000);
s3.makePayment(0)
s3.makePayment(3000)
s3.makePayment(2000)
s3.makePayment(200)

const t1 = new Teachers('Vasya', 16, 'USA', 'QA', 190000)

t1.showMyDetails()

const t2 = new Teachers('George', 24, 'USA', 'mobile', 90000)

t2.showMyDetails()

t2.addGrade(1, "a")

s1.showMyDetails()

t2.addGrade(1, 'b')

s1.showMyDetails()

t2.removeGrade(1)

s1.showMyDetails()

t2.removeGrade(1)

s1.showMyDetails()

t2.changeTeachingCourse('qa')

t2.showMyDetails()