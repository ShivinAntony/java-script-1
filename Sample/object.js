var Person ={name:"Shicin",age:23,place:"Thrissur", display: function(){
    console.log(this.name)
}}
console.log(Person.display())

Person.displayAgeAge=function(){
    console.log(this.age)
}

console.log(Person.displayAgeAge()) 