const fs = require('fs');

const theme = JSON.parse(fs.readFileSync('themes/popping-and-locking.json', 'utf8'));

if (theme.vars.brightYellow !== '#fabd2f') {
  throw new Error(`Expected vars.brightYellow to equal #fabd2f, got ${theme.vars.brightYellow}`);
}

if (theme.colors.accent !== 'brightYellow') {
  throw new Error(`Expected colors.accent to equal brightYellow, got ${theme.colors.accent}`);
}

if (theme.colors.borderAccent !== 'brightYellow') {
  throw new Error(
    `Expected colors.borderAccent to equal brightYellow, got ${theme.colors.borderAccent}`
  );
}

console.log('theme validation ok');
