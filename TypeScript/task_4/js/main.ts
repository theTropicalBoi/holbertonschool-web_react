const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const teacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
  experienceTeachingJava: 0,
  experienceTeachingReact: 3,
};

cpp.setTeacher(teacher);
java.setTeacher(teacher);
react.setTeacher(teacher);

console.log(cpp.getRequirements());           // Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher());       // Available Teacher: John

console.log(java.getRequirements());          // Here is the list of requirements for Java
console.log(java.getAvailableTeacher());      // No available teacher

console.log(react.getRequirements());         // Here is the list of requirements for React
console.log(react.getAvailableTeacher());     // Available Teacher: