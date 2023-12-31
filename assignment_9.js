class Student {
    studentID;
    answers = [];
    constructor(studentId) {
      this.studentId = studentId;
      this.answers = [];
    }
  
    addAnswer(question) {
      this.answers.push({ id: question.qid, answer: question.answer });
    }
  }
  
  class Question {
    qid;
    answer;
    constructor(qid, answer) {
      this.qid = qid;
      this.answer = answer;
    }
  
    checkAnswer(studentAnswer) {
      return this.answer === studentAnswer;
    }
  }
  
  class Quiz {
    questions;
    students;
    constructor(questions, students) {
      this.questions = new Map(questions.map(question => [question.qid, question.answer]));
      this.students = students;
    }
  
    scoreStudentBySid(sid) {
      const student = this.students.find(student => student.studentId === sid);
  
      if (!student) {
        console.error(`Student with ID ${sid} not found.`);
        return 0;
      }
  
      let score = 0;
  
      student.answers.forEach(studentAnswer => {
        const correctAnswer = this.questions.get(studentAnswer.id);
        if (correctAnswer && studentAnswer.answer && correctAnswer === studentAnswer.answer) {
          score++;
        }
      });
  
      return score;
    }
  
    getAverageScore() {
      const totalScore = this.students.reduce((sum, student) => sum + this.scoreStudentBySid(student.studentId), 0);
      const averageScore = totalScore / this.students.length || 0;
      return averageScore;
    }
  }
  
  // Example usage:
  const student1 = new Student(10);
  student1.addAnswer(new Question(2, 'a'));
  student1.addAnswer(new Question(3, 'b'));
  student1.addAnswer(new Question(1, 'b'));
  
  const student2 = new Student(11);
  student2.addAnswer(new Question(3, 'b'));
  student2.addAnswer(new Question(2, 'a'));
  student2.addAnswer(new Question(1, 'd'));
  
  const students = [student1, student2];
  
  const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
  
  const quiz = new Quiz(questions, students);
  
  let scoreforStudent10 = quiz.scoreStudentBySid(10);
  console.log(scoreforStudent10); // Expected Result: 3
  
  let scoreforStudent11 = quiz.scoreStudentBySid(11);
  console.log(scoreforStudent11); // Expected Result: 2
  
  let average = quiz.getAverageScore();
  console.log(average); // Expected Result: 2.5
  