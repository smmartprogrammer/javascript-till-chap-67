// Assingmnet - Chap No. 38 - 44

// Function / Switch / While.. do-while

//  1. ) Write a custom function power ( a, b ), to calculate the value of a raised to b.

// function ab() {
//     var a = prompt("enter the base no.")
//     var b = prompt("enter the power no.")
//     var result=Math.pow(a,b)
//     console.log("the value of a raised to b is "+" "+result)
// }

// ab();


// 2. ) Any year is entered through the keyboard.
//      Write a function to determine whether the year is a leap year or not.Leap years ...,2012,2016,2020,...

// function leapYear(){
//     var year = prompt("please enter year");
//     if (year % 4 === 0){
//         alert("the year is leap");
//         }

//     else if (year % 100 === 0){
//         alert("the year is leap");
//     }
//     else if (year % 400 === 0){
//         alert("the year is leap");
//     }else {alert("the year is not leap");
// }


// }

// leapYear();


// 3.If the lengths of the sides of a triangle are denoted by a, b, and c,
//   then area of triangle is given by 
//   area = S(S − a)(S − b)(S − c)
//   where, S = ( a + b + c ) / 2

// var a = prompt('Enter value of a; ');
// var b = prompt('Enter value of b; ');
// var c = prompt('Enter value of c; ');

// // calculate the semi-perimeter
// var s = (a + b + c) / 2;

// //calculate the area
// var area = (
//   s * (s - a) * (s - b) * (s - c)
// );

// console.log(
//   `The area of a triangle with side length ${a}, ${b}  and ${c} is ${area}`
// );

// 4.Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of thesemarks.
//  there should be 3 functions one is the mainFunction and other are for average and percentage.
//  Call those functions from mainFunction and display result in mainFunction.

// var sub1 = prompt("please enter marks ?")
// var sub2 = prompt("please enter marks ?")
// var sub3 = prompt("please enter marks ?")
// theSum = Number(sub1)+Number(sub2)+Number(sub3)
   

// function mainFunction() {
//     return theSum;

// }

// mainFunction();
// console.log(theSum)

// function theAverage(){
//     average = (theSum/3);
//     return average
//     }

// theAverage();
// console.log("the average is" + " " +average)

// function thePercentage(){
//     Percentage = (theSum/300)*100;
//     return Percentage
//     }

// thePercentage();
// console.log("the percentage is" + " " +Percentage+"%")


// 5.You have learned the function indexOf.
// Code your own custom function that will perform the same functionality.
// You can code for single characteras of now.


// var text = 'the raghunathji';

// console.log(text.indexOf('i'))



// var text = "thie is partab raj";

// console.log(text.indexof('j'))

// function indexof() {
    
// }

// indexof();
// alert(text)

// var theSum = 1000;
// addNumbers();

// function addNumbers() {
//     theSum = 2 + 2;
//  }
// alert(theSum)


// var theSum = addNumbers();
// function addNumbers() {
//     var theSum = 2 + 2;
//     return theSum;
// }

// addNumbers();
// // console.log(obtainMarks);
// Console.log(addNumbers());

// var 

// =======
// var theSum = addNumbers();
// function addNumbers() {
//     var theSum = 2 + 2;
//     return theSum;
// }


// 6.Write a function to delete all vowels from a sentence.
//  Assume that the sentenceis not more than 25characters long.

// function vowelsremoval() {
    
// var remove=prompt("please enter character");
// console.log(remove)

// var arr1=remove.split("");
// console.log(arr1)

// var reg=/[aeious]/ig;

// var arr2=remove.match(reg)
// console.log(arr2)

// var noVowels=[]

// for (var    i=0; i<arr1.length; i++) 
// {
//     if(arr2.indexOf(arr1[i])===-1) {
//         noVowels.push(arr1[i])
//     }
    
// }
// console.log(noVowels)
// console.log(noVowels.join(""))

// }
// vowelsremoval();

// 7.Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.
// For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.



// 8.The distance between two cities (in km.) is input through the keyboard.
//  Write four functions to convert and print this distance in meters, feet, inches and centimeters.


// 9.Write a program to calculate overtime pay of employees.
//  Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. 
//  Assume that employees do not work for fractional part of an hour.

// var timeWorked = prompt("please enter the hours worked after 40 hours;")
// var overtimeRatePerHour = 12
// var working_hours

// function    overtime(){

//     if(working_hours>40)
//         {
//             over_time = working_hours - 40;
//             over_time_pay = over_time * 12.00;
//             console.log("Employee No %d overtime pay is %.2f\n", over_time_pay);
//         }
//         else
//         console.log("You have to work for more than 40 hours to get over time pay\n");






// var overTime = timeworked*overtimeRatePerHour
    // return overTime
    // console.log("overtime of the employees is:" + overTime)

// }

// overtime();


// 10.A cashier has currency notes of denominations 10, 50 and 100.
// If the amount to be withdrawn is input through the keyboard in hundreds,
// find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

// var p = document.getElementsByTagName("p");
// var contents = p[4].innerHTML;


// var div = document.getElementById("ny");
// var p = div.getElementsByTagName("p");
// var contents = p[1].innerHTML;


// var p = document.childNodes[0].childNodes[1].childNodes[1].childNodes[1];
// var contents = p.innerHTML

// var d = document.getElementById("ny");
// var p = d.childNodes[1];
// var contents = p.innerHTML;

// var kidNode = document.getElementById("div2");
// var pNode = kidNode.parentNode;

// i.Get element of id “main-content” and assign them in a variable.

// var a = document.getElementById("main-content");

// ii.Display all child elements of “main-content” element.

// console.log(a.childNodes[]);
// console.log(a)

// iii. Get all elements of class “render” and show their innerHTML in browser.

// var b = document.getElementsByClassName("render")[0].innerHTML;
// var c = document.getElementsByClassName("render")[1].innerHTML;
// var d = document.getElementsByClassName("render")[2].innerHTML;
// var e = document.getElementsByClassName("render")[3].innerHTML;
// var f = document.getElementsByClassName("render")[4].innerHTML;

// var contents = b.innerHTML[];
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

// iv. Fill input value whose element id first-name using javascript.

// var classValue = document.getElementsByClassName("render")[0].innerHTML
// var firstName = document.getElementById("first-name").value = classValue;


// v.Repeat part iv for id ”last-name” and “email”.

// var classValue = document.getElementsByClassName("render")[1].innerHTML
// var firstName = document.getElementById("last-name").value = classValue;

// var classValue = document.getElementsByClassName("render")[2].innerHTML
// var firstName = document.getElementById("email").value = classValue;


// 2.  use HTML code of question 1 and  show the result on browser.
// i.What is node type of  element having id “form-content”.

// var a = document.getElementById("form-content")
// console.log(a.nodeType)

// ii.Show node type of element having id “lastName” and its child node.

// var a = document.getElementById("last-name")
// var b = a.nextSibling
// console.log(a.nodeType)
// console.log(b.nodeType)


// iii.Update child node of element having id “lastName”.


// var lastName = document.getElementById("last-name").value = "smmartprogrammer";

// console.log(lastName)

// iv.Get First and last child of id “main-content”.

// var a = document.getElementById("main-content")
// console.log(a.firstChild)
// console.log(a.lastChild)


// v.Get next and previous siblings of id “lastName”.

// var a = document.getElementById("lastName")
// console.log(a.nextSibling)
// console.log(a.previousSibling)

// vi.Get parent node and node type of element having id “email”

// var a = document.getElementById("email")
// console.log(a.parentNode)
// console.log(a.offsetParent.nodeType)
// <!-- chap # 49 - 52 -->

// <!-- 1.Create a signup form and display form data in your web page on submission. -->


// function signupfunc() {
//     var firstName = document.getElementById("first_name").value;
//     var lastName = document.getElementById("last_name").value;
//     var emailAddress = document.getElementById("email_Address").value;
//     var Password = document.getElementById("password").value;
//     document.write("<h1>SIGN UP FORM</h1>")
//     document.write("<b>First Name:</b> " + firstName);
//     document.write("<br><br><b>Last Name: </b>" + lastName);
//     document.write("<br><br><b>Email Address:</b> " + emailAddress);
//     document.write("<br><br><b>Password:</b> " + Password);
// }
