const fs = require('fs');

const theme = JSON.parse(fs.readFileSync('themes/popping-and-locking.json', 'utf8'));

if (theme.vars.composerBlue !== '#8ecae6') {
  throw new Error(`Expected vars.composerBlue to equal #8ecae6, got ${theme.vars.composerBlue}`);
}

if (theme.colors.accent !== 'composerBlue') {
  throw new Error(`Expected colors.accent to equal composerBlue, got ${theme.colors.accent}`);
}

if (theme.colors.borderAccent !== 'composerBlue') {
  throw new Error(
    `Expected colors.borderAccent to equal composerBlue, got ${theme.colors.borderAccent}`
  );
}

console.log('theme validation ok');
