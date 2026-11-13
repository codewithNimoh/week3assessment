// Calculates the average of three marks
function calculateAverage(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}

// Determines the grade from the average
function calculateGrade(average) {
  if (average >= 80) return "A";
  else if (average >= 70) return "B";
  else if (average >= 60) return "C";
  else if (average >= 50) return "D";
  else return "E";
}

// Checks a mark is a number between 0 and 100
function isValidMark(mark) {
  return !isNaN(mark) && mark >= 0 && mark <= 100;
}

// Collect inputs
const name = prompt("Enter student's full name:");
const course = prompt("Enter course name:");
const m1 = prompt("Enter marks for subject 1:");
const m2 = prompt("Enter marks for subject 2:");
const m3 = prompt("Enter marks for subject 3:");

// Reject empty inputs
if (
  !name || name.trim() === "" ||
  !course || course.trim() === "" ||
  !m1 || m1.trim() === "" ||
  !m2 || m2.trim() === "" ||
  !m3 || m3.trim() === ""
) {
  console.log("Error: name, course and marks cannot be empty.");
} else {
  const mark1 = Number(m1);
  const mark2 = Number(m2);
  const mark3 = Number(m3);

  // Reject invalid marks
  if (!isValidMark(mark1) || !isValidMark(mark2) || !isValidMark(mark3)) {
    console.log("Error: marks must be numbers between 0 and 100.");
  } else {
    const average = calculateAverage(mark1, mark2, mark3);
    const grade = calculateGrade(average);

    console.log(`Student: ${name}`);
    console.log(`Course: ${course}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
  }
}