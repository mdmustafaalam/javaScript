// Object Destructure 

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh",
}

// course.courseInstructor;

// const {courseInstructor} = course;
const {courseInstructor : instructor} = course;
console.log(instructor);


// +++++++++ API ++++++++++
// Json Structure
{
    "name": "Mustafa",
    "course": "JavaScript",
    "price": "free"
}

[
    {},
    {},
    {}
]