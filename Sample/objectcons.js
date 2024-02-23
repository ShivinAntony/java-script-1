function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place

    this.display=function(){
        console.log("Name:"+this.name+" Age: "+this.age+" Place :"+this.place)
    }
}

var shivi = new Person("Shivin",20,"Thrissur")
var mesi =new Person("Messi",23,"miami")

shivi.display()
mesi.display()