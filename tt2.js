function gradingStudents(grades) {
  let finalGrades = grades.map((grade) => {
    console.log(grade - (grade % 5) + 5);
    return grade >= 38 && grade % 5 >= 3 ? grade - (grade % 5) + 5 : grade;
  });
  return finalGrades;
}
console.log(gradingStudents([73,33]));
