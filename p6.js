/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
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
