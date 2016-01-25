//Geekwise JS 1 - Day 4 Notes

var condition = "taco";

switch (condition) {
  case "foo":
      alert("foo");
      break;
  case "bar":
      alert("bar");
      break;
  default:
      alert("wasn't foo or bar");
}

//var cs = '2';
switch (expression) {
  case expression:

    break;
  default:

}

//ternary operator
var invert = true;
var num = 10;

var result = invert ? -num : num;
console.log(result);


 //Intrinsic objects
var strA = "0123456789";

// this code sets strB to "456"
var strB = strA.substring(4,7);

var str1 = "airplane";
// set str2 to "AIRPLANE"
var str2 = str1.toUpperCase();
console.log(str2);

console.log(str2.length)


//Function basics
function helloWorld() {
    console.log("hello world");
}
helloWorld();
