/*
  Write a function that takes a string as an argument (input), capitalizes only the first letter, and returns the updated string.
*/

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var name = "nancy";
name = capitalizeFirstLetter(name);
console.log(name);
