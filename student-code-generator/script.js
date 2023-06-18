function calculateGrade() {
    const Score = document.getElementById("Score").value;
    let grade;
  
    if (Score >= 80 && Score <= 100) {
      grade = "A";
    } else if (Score >= 60 && Score <= 79) {
      grade = "B";
    } else if (Score >= 50 && Score <= 59) {
      grade = "C";
    } else if (Score >= 40 && Score <= 49) {
      grade = "D";
    } else if (Score >= 0 && Score <= 39) {
      grade = "E";
    } else {
      grade = "Please input marks between 0 and 100";
    }
      document.getElementById("output").innerHTML = "Grade: " + grade;
  }