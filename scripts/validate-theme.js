const fs = require('fs');

const theme = JSON.parse(fs.readFileSync('themes/popping-and-locking.json', 'utf8'));

if (theme.vars.brightYellow !== '#fabd2f') {
  throw new Error(`Expected vars.brightYellow to equal #fabd2f, got ${theme.vars.brightYellow}`);
}

if (theme.colors.accent !== 'composerBlue') {
  throw new Error(`Expected colors.accent to equal composerBlue, got ${theme.colors.accent}`);
}

if (theme.colors.borderAccent !== 'composerBlue') {
  throw new Error(
    `Expected colors.borderAccent to equal composerBlue, got ${theme.colors.borderAccent}`
  );
}

if (theme.colors.borderMuted !== 'brightRed') {
  throw new Error(
    `Expected colors.borderMuted to equal brightRed, got ${theme.colors.borderMuted}`
  );
}

if (theme.colors.bashMode !== 'brightYellow') {
  throw new Error(
    `Expected colors.bashMode to equal brightYellow, got ${theme.colors.bashMode}`
  );
}

console.log('theme validation ok');
