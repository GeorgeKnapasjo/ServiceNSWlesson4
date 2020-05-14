let pets = [
    {
      name: "Rex",
      age: 4,
      ownerId: 42
    },{
      name: "Spot",
      age: 7,
      ownerId: 132
    },{
      name: "Scooby",
      age: 3,
      ownerId: 546
    },{
      name: "Lucky",
      age: 1,
      ownerId: 42
    }
  ];
  let persons = [
    {
      name: "Luke",
      id: 42
    },{
      name: "Shaggy",
      id: 546
    },{
      name: "Jade",
      id: 132
    }
  ];


function mapPet(pets){
    function findPersonById(owner){
        return owner.id == pets.ownerId
    }
    let owner = persons.find(findPersonById)
    return{
        name: pets.name,
        age: pets.age,
        owner: owner.name 
    };
    
}
let detailedPets = pets.map(mapPet);
console.log(detailedPets)