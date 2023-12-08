// "use strict";
// class Student{
//     #studentID;
//     #answers = {studentID: "", questionID: "", answer: ""};

//     addAnswer(question){

//     }
// }

// class Question extends Quiz{
//     #questionID;
//     #answer = {questionID: "", answer: ""};
//     checkAnswer(answer){
//         let ob = new Quiz();
//         if (this.#answer.answer == answer) return true;
//     }
// }

// class Quiz{
//     #questions = new Map();
//     #students = [];
//     get students(){
//         return this.#students;
//     }
//     get questions(){
//         return this.#questions;
//     }
//     scoreStudentBySid(sid){

//     }
//     getAverageScore(){

//     }
// }
function greeting() { 
    console.log(this);
    }
let user = { firstName:
    "John", sayHi() {
    console.log(this);
    }
    };  
    console.log(this); // this is window object
    greeting(); // greeting() is called by global window object, this is window
    user.sayHi(); 
    