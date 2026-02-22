"use strict"

const tags = ["js", "week3"];
const scores = [10, 25, 18, 30];
console.log(scores.length);
console.log(tags.length)
let totalScore = 0;

for (let i = 0; i <scores.length; i++) {
    totalScore += scores[i];
   console.log(totalScore);
    
}
console.log(totalScore);

  tags.forEach(function (tag) {
    console.log(tag);
  });