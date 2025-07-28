let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};

let jsonString = JSON.stringify(student, null, 2); // pretty formatting with 2 spaces
console.log(jsonString);
