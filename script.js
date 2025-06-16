function rollDice() {
  const sides = parseInt(document.getElementById('dice').value);
  const roll = Math.floor(Math.random() * sides) + 1;
  document.getElementById('result').innerText = `You rolled: ${roll}`;
}
