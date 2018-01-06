//reference link https://gitbookio.gitbooks.io/javascript/objects/

//object creation
//1. object literal
var obj = {};

//2. object oriented way!
var obj = new Object();

//3. Properties

var language = {
    name:'Js',
    createdIn:1995,
    browserSupport: true,
    author:{
        fName:"Brendan",
        lName: "Eich"
    },
    getAuthorFullName: function(){
        return this.author.fName + " " + this.author.lName;
    }    
}
console.log(language);

console.log(language.name); /*OR*/ console.log(language['name']);
//adding a new property to language
language.newProp = 'some value';
language["newProp"]="updated value" //newProp - remember case sensitive!!

console.log(language);

//immutable
var myVal = "javascript";
myVal = "ES6";
console.log(myVal)

// mutable
var myObject = {city:'bangalore'};
myObject.city = 'mysore'; //points to same object after updating the property
console.log(myObject);

//references!
var myBook = {name:'Tinkle'}
var yourBook = myBook;

myBook.name += " Subscription"
console.log(yourBook);


var a = {}, b= {}, c = {}; // all three objects are different here

a = b = c = {}; //reference objects. changes all three on every change.

a.something = "adding property that affects all three objects";
console.log(b,c);








