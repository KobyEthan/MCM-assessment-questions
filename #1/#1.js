// Using Javascript, write a script that outputs the numbers from -50 to 101 in sequence, but
// for multiples of three print “Cat” instead of the number and for multiples of five print “Dog”.
// For numbers which are multiples of both three and five print “CatDog".

for (let i = -50; i <= 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("CatDog");
  } else if (i % 3 === 0) {
    console.log("Cat");
  } else if (i % 5 === 0) {
    console.log("Dog");
  } else {
    console.log(i);
  }
}
