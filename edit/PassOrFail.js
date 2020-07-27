// https://edabit.com/challenge/eYqGBvdszDAnNmf4J

function gradePercentage(userScore, passScore) {
  let youScore = parseInt(userScore);
  let passScoreNum = parseInt(passScore);

  return youScore < passScoreNum
    ? "You FAILED the Exam"
    : "You PASSED the Exam";
}

console.log(gradePercentage("89%", "81%"));
console.log(gradePercentage("89%", "90%"));
