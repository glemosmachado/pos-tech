/**
 * Exercise 1 - Easy
 * Date: 31/03/2024
 * Exercise Details: 
 * 
 * 
 * Write a short Typescript program that declares two variables:
    One using implicit type inference (for example, assign a number or string without a type annotation).
    One using explicit type annotation (for example, explicitly declare the type as number or string).
    Then log both variables to the console.
 */

    //Implicit
    let firstName         = "Gabriel"
    let age               = 27
    //Explicit
    let isAlive: boolean  = true
    let height: number    = 1.84

    console.log("My name is:", firstName, ", I'm ", age, " years old!");
    console.log("Alive?", isAlive, "my height is:", height);