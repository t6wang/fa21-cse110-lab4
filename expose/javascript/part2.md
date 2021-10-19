1. "3" is printed since i is declared with var keyword and can be accessed anywhere inside the function it is declared in. Variable i increases to 3 since the for loop increments to length of prices which is 3 in this case.
2. "150" is printed since it is assigned to the variable discountedPrice declared with var keyword. discountedPrice is assigned the last value prices[2] = 300 multiplied by (1-0.5) which is 150. discountedPrice can be accessed anywhere in the function, so as well as after the for loop processes since it was declared with keyword var.
3. "150" is printed again since finalPrice is a variable declared with keyword var and could be reassigned with new value rounded up from discountedPrice. It can be accessed anywhere within the function it is declared in therefore could be printed in line 14.
4. It returns a list of 0.5 = 50% discounted prices from [100, 200, 300] , which in this case is [50, 100, 150]. discounted can be returned since it is declared with var keyword in this function therefore can be accessed within this function.
5. we get an error since variable i was declared with let keyword, meaning we cannot access it outside of its block scope (for loop before print) at line 12.
6. we get an error since variable discountedPrice was declared with let keyword, meaning we cannot access it outside of its block scope (for loop before print) at line 13.
7. "150" is printed since variable finalPrice was declared with let keyword and called within the same block scope as its declaration. discountedPrice is assigned the last value prices[2] = 300 multiplied by (1-0.5) which is 150. discountedPrice can be accessed anywhere within block scope of its declaration.
8. It returns a list of 0.5 = 50% discounted prices from [100, 200, 300] , which in this case is [50, 100, 150]. discounted can be returned since it is declared with let keyword and its return statement is within the same block scope (the function itself).
9. It gives a reference error since variable i was declared with let keyword, meaning we cannot access it outside of its block scope (for loop before print) at line 11. 
10. "3" gets printed as the length of the list prices since length is declared with const keyword and called within the same block scope of its declaraction.
11. It returns a list of 0.5 = 50% discounted prices from [100, 200, 300] , which in this case is [50, 100, 150]. discounted can be returned since it is declared with const keyword and its return statement is within the same block scope (the function itself).
12. 
    A. Accessing the value of the name property in the student object
        student.name
      
    B. Accessing the value of the Grad Year property in the student object
          student["Grad Year"]

    C. Calling the function for the greeting property in the student object
        student.greeting();

    D. Accessing the name property of the object in the Favorite Teacher property in student
        student["Favorite Teacher"].name

    E. Access the first index in the array of the courseLoad property of the student object
        student.courseLoad[0]
13. Arithmetic
    A. '32' because integers map to their exact string representation
    B. Syntax error since string-integer type operation does not work in subtraction
    C. 3 (integer) since null is 0 in arithmetic
    D. syntax error since null of string type maps to null object
    E. 4 since true maps to 1
    F. 0 since false maps to 0 and null maps to 0
    G. '3undefined' as a string since undefined is map to string 'undefined'
    H. NaN since string type - underfined is a nonsensical computation with no meaningful results and therefore not a legitimate number.
14. A. true since it compares the numbers 2>1
    B. false because strings types are compared
    C. true since comparing 2 to '2' converts '2' to number to compare
    D. false since types are different and comparing usnig === checks for type
    E. false since true = 1
    F. true since Boolean(2) maps to boolean value true.
15. == compares two variables and ignores their types while === compares the variables while also checking for their data types. It will always return false if we are comparing variables with different types.
17. It returns an array [2, 4, 6] since function doSomething is called in modifyArray and doSomething multiplies the number type argument taken in by 2.
19. output is:
    1
    4
    3
    2

