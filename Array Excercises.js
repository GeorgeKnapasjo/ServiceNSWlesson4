let pets = [
    {
        name: "rex",
        age: 4, 
        ownerName:"luke"
    },{
        name: "spot",
        age: 7,
        ownerName: "jade"
    },{
        name: "scooby",
        age: 3,
        ownerName: "shaggy"
    },{
        name: "lucky",
        age: 1,
        ownerName: "luke" 
    },{
        name: "sadie",
        age: 3,
        ownerName: "daniel",
    },{
        name: "duke",
        age: 5,
        ownerName: "sabine"
    }]

    // function ownedByLuke(pets){
    //     if (pets.ownerName == "luke"){return true}
    //     else {return false}
    // }
    // ownedByLuke = pets.filter(ownedByLuke)
    // console.log(ownedByLuke)

//     function getOwners(pets){
//         return pets.ownerName
//     }
// let petOwnersNames = pets.map(getOwners)
// console.log(petOwnersNames)

// function findShaggy(pets){
//     if(pets.ownerName == "shaggy"){return true}
//     else{}
// }
// let findOwnerShaggy = pets.find(findShaggy)

// console.log(findOwnerShaggy)

function findPet(pets){
   if(pets.age < 5 && (pets.name[0] == "s" || pets.ownerName[0] == "s")){
       return true
   }else {false}
}

  

let specifyPets = pets.filter(findPet)
console.log(specifyPets)