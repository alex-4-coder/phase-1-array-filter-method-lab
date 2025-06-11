//function finding matching list of drivers
function findMatching(drivers,searchName){
    return drivers.filter(driver => driver.toLowerCase() === searchName.toLowerCase());
}

//function finding names with provided letters
function fuzzyMatch(drivers,searchName){
    return drivers.filter(driver => driver.toLowerCase().startsWith(searchName.toLowerCase()))

}

//function finding name that matches drivers hometown
function matchName(drivers,searchName){
    return drivers.filter(driver => driver.name === searchName);

}

const drivers = ['Sammy', 'Sarah', 'Sally', 'Annette'];
fuzzyMatch(drivers, 'Sa');

module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};
