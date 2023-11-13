const extendHex = (shortHex) => {
  shortHex = shortHex.replace("#", "");

  // Ensure that the input is a valid short hex code
  if (shortHex.length !== 3 || !/^[0-9a-fA-F]{3}$/.test(shortHex)) {
    console.error("Invalid short hex code. Please provide a valid 3-character hex code.");
    return null;
  }

  // Expand each component to create the full hex code
  const fullHex = shortHex
    .split("")
    .map(component => component.repeat(2))
    .join("");

  // Add the "#" symbol and return the result
  return `#${fullHex}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
