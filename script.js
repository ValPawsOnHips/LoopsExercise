for (i = 1; i <= 7; i++) {
  console.log(i);
}

console.log("========================================");

for (i = 5; i <= 25; i += 4) {
  console.log(i);
}

console.log("========================================");

const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"];
for (name of wizards) {
  console.log(name);
}

let harryPotterMovies = 0;
while (harryPotterMovies != 8) {
  harryPotterMovies++;
}
console.log(harryPotterMovies);
