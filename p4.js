/** Problem 04 - (Delete / Store) */
var fileName = 'xc#xp.mp4';
//write your code here
if (
  fileName.includes('.pdf') ||
  fileName.includes('.docx') ||
  fileName[0] == '#'
)
  console.log('Store');
else console.log('Delete');

// result.pdf
// Store
// data.docx
// Store
// pdfData.jpg
// Delete
// #exp.mp4
// Store
// docx.txt
// Delete
// docx.xpdf
// Delete
// slipdf.txt
// Delete
