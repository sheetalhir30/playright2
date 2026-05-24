function getGrade(score)
{
  let grade;
    if(score>=90)
        grade=  'A';
    else if(score>=80 && score <90)
        grade= 'B';
    else if(score>=70 && score <80)
        grade= 'C';
    else if(score>=60 && score <70)
        grade= 'D';
    else
        grade= 'F';
    return grade;
}
let score =85;
let grade = getGrade(score);
console.log("The grade for score " + score + " is: " + grade);