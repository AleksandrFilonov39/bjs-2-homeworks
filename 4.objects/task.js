function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}
let alex = new Student ("Alex", "male", 20);
let oleg = new Student ("Oleg", "male", 22);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.hasOwnProperty('marks')){
      this.marks = [...this.marks, ...marks]
    }
}

Student.prototype.getAverage = function () {
  if(!this.hasOwnProperty('marks') || this.marks.length === 0) {
    return 0;
  }else {
    return (this.marks.reduce((acc, mark) => acc + mark, 0)) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;    
}
