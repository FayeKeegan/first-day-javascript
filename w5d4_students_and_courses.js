function Student (options){
  this.f_name = options.f_name;
  this.l_name = options.l_name;
  this.courses = options.courses;
  this.enroll = function(course) {
    if (!this.has_conflict(course)) {
      this.courses.push(course);
      course.students.push(this);
    }
  };
  this.has_conflict = function(potential_course) {
    var conflict = false;
    this.courses.forEach(function(student_course) {
      if (student_course.conflicts_with(potential_course)) {
        conflict = true;
      }
    });
    return conflict;
  };
  this.course_load = function() {
    var depts = {};
    this.courses.forEach(function (course){
      if (depts[course.department] == null) {
        depts[course.department] = course.credits;
      }
      else {
        depts[course.department] += course.credits;
      }
    })
    return depts;
  };
}

function Course (options){
  this.name = options.name;
  this.students = options.students;
  this.department = options.department;
  this.credits = options.credits;
  this.add_student = function(student) {
    student.enroll(this);
  }
  this.days = options.days;
  this.time_block = options.time_block;
  this.conflicts_with = function (course){
    var day_conflict = false;
    this.days.forEach(function(day){
      if (course.days.indexOf(day)!= -1){
        day_conflict = true;
      }
    });
    if (course.time_block == this.time_block && day_conflict){
      return true;
    }
    else {
      return false;
    }
  }
}

var faye = new Student({
  f_name : "Faye",
  l_name : "Keegan",
  courses : []
});


var brucie = new Student({
  f_name : "Brucie",
  l_name : "Reif",
  courses : []
});

var astronomy = new Course({
  name: "Astro",
  department : "Science",
  credits : 6,
  students : [],
  days : ["mon"],
  time_block : 2
});


var defense = new Course({
  name: "Defense Against the Dark Arts",
  department :"Magic",
  credits : 6,
  students : [],
  days : ["tue"],
  time_block : 2
});

var potions = new Course({
  name: "Potions",
  department :"Magic",
  credits : 6,
  students : [],
  days : ["mon"],
  time_block : 2
});
