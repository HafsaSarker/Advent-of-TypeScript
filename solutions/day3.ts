type GiftWrapper<a, b, c> = {
  present: a;
  from: b;
  to: c;
};

// Example variable
const christmasGift: GiftWrapper<string, string, string> = {
  present: "Toy Train",
  from: "Santa Claus",
  to: "Tommy",
};

console.log(christmasGift);
