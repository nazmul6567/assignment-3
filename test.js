/** Problem 05 - ( PH Email Generator )  */
var student = { name: 'jhankar', roll: 1014, department: 'cse' };
//write your code here

console.log(
  (student['name'].concat(student['roll']) + '.').concat(
    student['department']
  ) + '@ph.ac.bd'
);
