"use strict";

// Exercise 1 //

var a = 1;
var b = a++;
var c = ++a;

console.log(a);

console.log(b);

console.log(c);

var d = "hello";
var e = false;

d++;
e++;

console.log(d);
console.log(e);

var perplexed = 1; // perplexed is undefined (no value is assigned)
perplexed + 2;

console.log(perplexed);

var price = 2.7;
price.toFixed(2);

console.log(price);

var priceTwo = "2.7";
price.toFixed(2);

console.log(priceTwo);

console.log(isNaN(0));

console.log(isNaN(1));

console.log(isNaN("string"));

console.log(isNaN ("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

console.log(isNaN == isNaN);

console.log(!true);

console.log(!false);

console.log(!!true);

console.log(!!false);

console.log(!!0);

console.log(!!-0);

console.log(!!1);

console.log(!!-1);

console.log(!!0.1);

console.log(!!"hello");

console.log(!!"");

console.log(!!'');

console.log(!!"false");

console.log(!!"0");

// Exercise 2 //

var sample = "Hello Codeup";

console.log(sample.length);

// sample = sample.toUpperCase()

console.log(sample);

console.log(sample += " Students");

console.log(sample.replace("Students", "Class"));

console.log(sample.indexOf("c"));

console.log(sample.indexOf("C"));

sample.substring(6, 12);

console.log(sample.substring(sample.indexOf("C"), sample.indexOf("p") + 1));

// Exercise 3 //

var perDay = 3;

var littleMermaid = 3;

var brotherBear = 5;

var herCules = 1;

console.log((littleMermaid + brotherBear + herCules) * perDay);

//--------------------------------

var faceBook = 350;

var amaZon = 380;

var gooGle = 400;

console.log((faceBook * 10) + (amaZon * 4) + (gooGle * 6));

//----------------------------------



var tenAmClass = false;

var fullClass = 150;

var classSize = 128;

var canGoToClass = ((classSize < fullClass) && !tenAmClass);

console.log(canGoToClass);


//---------------------------------

var offerExpired = false;

var currentCart = 6;

var premiumMember =true;

if (currentCart > 2 && offerExpired || premiumMember){
    console.log("You are eligible for the offer!");
}else{
    console.log("Unfortunately, you are not eligible.");
}


// Exercise 4 //

var username = 'codeup';
var password = 'notastrongpassword';

var lessThanFive = (password.length < 5);

console.log(lessThanFive);


var containsUserName = (password.includes("codeup"));

console.log(containsUserName);

var lessThanTwenty = (username.length < 20);

console.log(lessThanTwenty);

var noWhiteSpace = username === username.trim() && password === password.trim();

console.log(noWhiteSpace);


