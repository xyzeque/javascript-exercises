const findTheOldest = function(people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getAge(oldestPerson);
    const currentAge = getAge(currentPerson);

    if (currentAge > oldestAge) {
      return currentPerson;
    } else {
      return oldestPerson;
    }
  });
};

// calculates age
const getAge = person => {
  if (!person.yearOfDeath) {
    // If the person is still living, calculate their age based on the current year
    const currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
  } else {
    // If the person has a year of death, calculate their age based on the birth and death years
    return person.yearOfDeath - person.yearOfBirth;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
