const students = [
  {
    firstName: 'Darren',
    lastName: 'Chen',
    age: 30,
  },
  {
    firstName: 'Gordon',
    lastName: 'Chen',
    age: 28,
  },
  {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 18,
  },
];

function getNumStudents(data) {

  if (Array.isArray(data)) {
      return data.length;
  } else {
      return 'received input is not an array of students';
  }
};
function getAverageAge(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].age;
  }
  if (Array.isArray(data)) {
  return sum / data.length;
  } else {
      return 'received input is not an array of students';
  }
};
function getoldeststudent(data) {
  if (Array.isArray(data)) {
      
      return data.sort().shift()
  } else {
      return 'received input is not an array of students'
  }
}
function getYoungestStudent(data) {
  if (Array.isArray(data)) {
      return data.sort().reverse().shift()
  } else {
      return 'received input is not an array of students'
  }
}
function getFullName(data) {
  if (Array.isArray(data)) {

      return data.map(data => `${data.firstName} ${data.lastName}`);
  } else {
      return 'received input is not an array of students'
  }
}
module.exports = {
  students,
  getNumStudents,
  getAverageAge,
  getoldeststudent,
  getYoungestStudent,
  getFullName,
}