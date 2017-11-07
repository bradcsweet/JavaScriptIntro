////for (var i = 0; i < 10; i++)
////{
////    console.log(i);
////}

//console.log("Hello");
//var name = "Jarryd";

//console.log("Hello " + name);

//for (var i = 0; i <= 10; i++)
//{
//    console.log(i);
//}

function helloWorld(){
    var greeting = "Hello World";
    alert(greeting);
}

//helloWorld();

function add(a, b) {
    return a + b;
}

console.log(add(13, 45));

var otherFunction = function (a, b) {
    return a + b;
}
console.log(otherFunction(2,.4));

//write a function that takes in a name and prints "Hello [name]"

function greeting(name) {
    return "Hello " + name;
}

console.log(greeting("Josh"));

function updateDiv() {
    var outputString = "Hello and welcome to my page.";
    document.getElementById("sectionOne").innerHTML = "<p>" + outputString + "</p>";
}

function swap() {
    var imageSrc = document.getElementById("swapImage").src;

    if (imageSrc.includes("Shirt")) {
        document.getElementById("swapImage").src = "images/Hat.jpg";
    }
    else {
        document.getElementById("swapImage").src = "images/Shirt.jpg";
    }
    console.log(document.getElementById("swapImage").src);
}

function printArray() {
    var favFoods = ["Pizza", "Shrimp", "Cereal", "Ice Cream"];
    var outputText = "<ul>";

    for (i = 0; i < favFoods.length; i++) {
        outputText += "<li>" + favFoods[i] + "</li>";
    }
    outputText += "</ul>";
    document.getElementById("sectionTwo").innerHTML += outputText;
}