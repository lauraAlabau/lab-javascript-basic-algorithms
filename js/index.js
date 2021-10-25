// Iteration 1: Names and Input
const hacker1 = "Laura";
console.log(`"The driver's name is ${hacker1}"`);

const hacker2 = "Damien";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
for (const letra of hacker1.toUpperCase()) {
  console.log(letra);
}

let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1:
const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non quam pharetra, mattis ex ut, consectetur ex. Maecenas ullamcorper ipsum ut vulputate auctor. Nunc dignissim, ante vitae mattis convallis, orci sapien consequat mi, nec tristique est nunc vel tellus. Cras pulvinar ligula tempor dictum posuere. Curabitur cursus purus ac metus accumsan tempus. Nulla dapibus nec felis vitae molestie. Ut vitae convallis risus. In volutpat, dui ac imperdiet tristique, dolor lectus euismod urna, quis malesuada lectus orci quis tellus. Aliquam sed ligula quis lectus ullamcorper tincidunt. Mauris congue gravida dapibus. Vestibulum odio felis, ullamcorper quis felis ac, ultricies ullamcorper massa.\n\nPellentesque non scelerisque arcu. Mauris nec tempus tellus. Mauris vel augue eget nibh vestibulum eleifend. Sed dignissim feugiat tellus eget blandit. Cras purus urna, elementum id ultrices nec, ultrices a est. Maecenas sed lorem fermentum, vulputate dui ac, bibendum nisl. Aenean tincidunt nisl sed auctor tempus. Proin et blandit metus.\n\nPhasellus sit amet commodo lacus. Aenean in interdum sapien, maximus gravida eros. Donec rhoncus nunc ut mauris sodales, auctor posuere velit accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc blandit commodo sapien, mattis fringilla magna ultricies eu. Integer ullamcorper facilisis augue sit amet feugiat. Aliquam ut egestas nisl, nec posuere metus. Aenean gravida, ipsum pretium condimentum ultricies, urna diam interdum ante, eu faucibus ex mauris a turpis. Aenean ante ipsum, volutpat eget luctus sed, consequat in turpis. Vestibulum tristique congue dolor, at semper nulla facilisis eget. Aliquam at suscipit nulla. Aliquam erat volutpat.";

const countWords = loremIpsum.split(" ").length;
console.log(countWords);

const howManyTimesEtWordAppears = loremIpsum.split(" et ").length;
console.log(howManyTimesEtWordAppears);

//Bonus 2:
let phraseToCheck = "taco cat";
phraseToCheck = phraseToCheck.split(" ").join("");

let phraseToCheckReverse = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  phraseToCheckReverse += phraseToCheck[i];
}

if (phraseToCheck == phraseToCheckReverse) {
  console.log("It's a Palindrome");
} else {
  console.log("It's not a Palindrome");
}
