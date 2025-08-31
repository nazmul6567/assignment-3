/** Problem -03 ( Medicine Planner ) */
var lastDay = 2;
//write your code here

var cnt = 0;
for (var i = 1; i <= lastDay; i++) {
  cnt++;
  if (cnt % 3 == 0) console.log(i, '-', 'medicine');
  else console.log(i, '-', 'rest');
}
