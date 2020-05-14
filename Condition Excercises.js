


// function houseDimension(floor, ceiling, num) {
//     if (num > floor && num < ceiling) {
//     return true} 
//     else if (num < floor && num > ceiling) {
//         return true} 

//     else { return false;
//     }
    
// }
// console.log(houseDimension(1, 2, 3))



// function person(name, age){
//     for(let i=0; i < name.length; i++)
//     if(age > 30 || name[i] == "x"){ return true}
//     else{return false}

// }
// console.log(person("exavier", 28))

let person = {
    name: "george",
    age:21
}

function people(person, num, string){
    if(person.age == num && person.name != string){
        return true}
        else {return false}
    }


console.log (people(person, 21, "jeff"))