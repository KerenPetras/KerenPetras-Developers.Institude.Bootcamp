// 🌟 Exercise 4 : Building Management
// Instructions:
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// Review About Objects
// Copy and paste the above object to your Javascript file.
// Console.log the number of floors in the building.
// Console.log how many apartments are on the floors 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

//PART 1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//PART 2
console.log(building.numberOfFloors);

//PART 3
console.log(`In first floor there are ${building.numberOfAptByFloor.firstFloor} apartments, and in third floor there are ${building.numberOfAptByFloor.thirdFloor} apartments`);

//PART 4
console.log(`${building.nameOfTenants[1]},${building.nameOfTenants[1]} has ${building.numberOfRoomsAndRent.dan[0]} rooms and pays ${building.numberOfRoomsAndRent.dan[1]}`);

//PART 5
const sumRentdavid = (parseInt(`${building.numberOfRoomsAndRent.david[1]}`)); 
const sumRentsarah = (parseInt(`${building.numberOfRoomsAndRent.sarah[1]}`));
const sumRentDavidSarah = (sumRentdavid+sumRentsarah); // output 1490
const danRent = (parseInt(`${building.numberOfRoomsAndRent.dan[1]}`));

if (sumRentDavidSarah > danRent) {
    console.log(`Dan's new rent is now ${danRent+200} `)
} else {console.log(`Dan's current rent is ${danRent}`)};