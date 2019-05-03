const keyboards = [
  { name: "One 2 Mini Keyboard", price: 99 },
  { name: "Ducky One Two Mini", price: 99 },
  { name: "Ducky Shine", price: 159 },
  { name: "Ducky One 711", price: 109 }
];

let highItems = keyboards.filter(keyboard => {
  if (keyboard.price > 100) {
    return keyboard;
  }
});

console.log(highItems);

let keyboardPrices = keyboards.map(keyboard => {
  return keyboard.price;
});

console.log(keyboardPrices);

let keyboardNames = keyboards.map(keyboard => {
  return keyboard.name;
});

console.log(keyboardNames);

let saleItems = keyboards.map(keyboard => {
  // any items that are less than 100 dollars are on sale.
  if (keyboard.price < 100) {
    return {
      ...keyboard,
      sale: true
    };
  } else {
    return {
      ...keyboard,
      sale: false
    };
  }
});

console.log(saleItems);

let withSaleItemCost = saleItems.map(keyboard => {
  console.log(keyboard);
  if (keyboard.sale) {
    return {
      ...keyboard,
      saleCost: keyboard.price - keyboard.price * 0.25
    };
  } else {
    return keyboard;
  }
});

console.log(withSaleItemCost);
