"use strict";
class Student{
    #studentID;
    #answers = {studentID: "", questionID: "", answer: ""};

    addAnswer(question){

    }
}

class Question{
    #questionID;
    #answer = {questionID: "", answer: ""};
    checkAnswer(answer){
        if (this.#answer == answer) return true;
    }
}

class Quiz{
    #questions = new Map();
    #students = [];
    scoreStudentBySid(sid){

    }
    getAverageScore(){
        
    }
}