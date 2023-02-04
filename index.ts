#!/usr/bin/env node
import inquirer from 'inquirer';

class Person {
    private _personality!: string
    constructor() {
        this._personality = "Mystery"
    }
    AskQuestion(answer: string) {
        if (answer === "I love outing") {
            this._personality = "Extrovert"
        }
        else if (answer === "I like to stay at home") {
            this._personality = "Introvert"
        }
        else {
            this._personality = "Mystery"
        }
    }
    GetPersonality() {
        return this._personality
    }
}

class Student extends Person {
    private _name: string
    constructor() {
        super()
        this._name = ''
    }
    get Name() {
        return this._name
    }
    set Name(name: string) {
        this._name = name
    }
}

const { test }: { test: string } = await inquirer.prompt([{
    type: "list",
    name: 'test',
    choices: ["I love outing", "I like to stay at home"],
    message: "Select anyone option to know about your personality"
}])

const MyStudent = new Student()
MyStudent.AskQuestion(test)
console.log(`You are: ${MyStudent.GetPersonality()}`)


const { name }: { name: string } = await inquirer.prompt([{
    name: 'name',
    message: 'Enter Your Name:'
}])

MyStudent.Name = name
console.log(`Your name is ${MyStudent.Name} and your personality type is ${MyStudent.GetPersonality()} `)
