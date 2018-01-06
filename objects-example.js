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

