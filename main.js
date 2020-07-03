
let Strings = {
    filter : function(string) {
        let array = string.split(" ");
        return array.filter((item) => {
            return item!=="not"
        }).reduce((accumulate,item)=>{
            return accumulate+" "+item;
        })
    }
}
console.log(Strings.filter("This house is not nice!"))

Array.prototype.Bubblesort = function() {
   
        for(let i=0; i<this.length; i++) {
            for(let j=0; j<this.length;j++) {
                
                    if(this[i] < this[j]) {
                        let temp = this[i];
                        this[i] =this[j];
                        this[j] = temp;
                        // console.log(this[j])
                    }
                    
            }
    
        
    }
    return JSON.stringify(this);
}

// console.log([64, 34, 25, 12, 22, 11, 90].Bubblesort())

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
   
 return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{

 console.log(this.name + " just learned " + subject);
}

var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.Subject = function(subject) {


        console.log(this.name +" is now teaching "+ subject);

    }
console.log(Teacher.prototype)
var me = new Student();
var teach = new Teacher()
me.initialize("John", 25);
teach.initialize("Michael", 25);
me.learn("Inheritance");
teach.Subject("Wap");