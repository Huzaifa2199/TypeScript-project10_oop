#!/usr/bin/env node
import inquirer from 'inquirer';
class Person {
    _personality;
    constructor() {
        this._personality = "Mystery";
    }
    AskQuestion(answer) {
        if (answer === "I love outing") {
            this._personality = "Extrovert";
        }
        else if (answer === "I like to stay at home") {
            this._personality = "Introvert";
        }
        else {
            this._personality = "Mystery";
        }
    }
    GetPersonality() {
        return this._personality;
    }
}
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = '';
    }
    get Name() {
        return this._name;
    }
    set Name(name) {
        this._name = name;
    }
}
const { test } = await inquirer.prompt([{
        type: "list",
        name: 'test',
        choices: ["I love outing", "I like to stay at home"],
        message: "Select anyone option to know about your personality"
    }]);
const MyStudent = new Student();
MyStudent.AskQuestion(test);
console.log(`You are: ${MyStudent.GetPersonality()}`);
const { name } = await inquirer.prompt([{
        name: 'name',
        message: 'Enter Your Name:'
    }]);
MyStudent.Name = name;
console.log(`Your name is ${MyStudent.Name} and your personality type is ${MyStudent.GetPersonality()} `);
