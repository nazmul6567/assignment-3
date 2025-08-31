/** Problem -01 ( Divide the Asset ) */

var area = 800;

//write your code here

var theyGet = parseFloat(area / 2);

console.log(theyGet);

/** Problem -02 ( Cycle or Laptop ) */

var money = 10000;

//write your code here

if (money >= 25000) console.log('Laptop');
else if (money >= 10000) console.log('Cycle');
else console.log('Chocolate ');

/** Problem -03 ( Medicine Planner ) */

var lastDay = 11;

//write your code here

var cnt = 0;

for (var i = 1; i <= lastDay; i++) {
  cnt++;

  if (cnt % 3 == 0) console.log(i, '-', 'medicine');
  else console.log(i, '-', 'rest');
}

/** Problem 04 - (Delete / Store) */

var fileName = 'pdfData.jpg';

//write your code here

if (
  fileName.includes('.pdf') ||
  fileName.includes('.docx') ||
  fileName[0] == '#'
)
  console.log('Store');
else console.log('Delete');

/** Problem 05 - ( PH Email Generator ) */

var student = { name: 'jhankar', roll: 1014, department: 'cse' };

//write your code here

console.log(cd
  student['name'].concat(student['roll']) +
    '.'.concat(student['department']) +
    '@ph.ac.bd'
);

/** Problem 06 : (Current Salary ) */

var experience = 30;

var startingSalary = 45000;

//write your code here

var increase = startingSalary * (5 / 100);

var newSalary = 0;

for (var i = 1; i <= experience; i++) {
  if (i == 1) newSalary = startingSalary + increase;
  else {
    increase = newSalary * (5 / 100);

    newSalary += increase;
  }
}

console.log(newSalary.toFixed(2));
