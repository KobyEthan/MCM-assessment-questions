// Loop to print numbers from -50 to 101
for (let i = -50; i <= 101; i++) {
  // If number is divisable by 3 and 5, print CatDog
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("CatDog");
    // If number is divisable by 3, print Cat
  } else if (i % 3 === 0) {
    console.log("Cat");
    // If number is divisable by 5, print Dog
  } else if (i % 5 === 0) {
    console.log("Dog");
    // Otherwise, simply print the number
  } else {
    console.log(i);
  }
}
