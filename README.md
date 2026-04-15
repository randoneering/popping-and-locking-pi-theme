# popping-and-locking-pi-theme

A Pi package that adds the Popping and Locking theme for pi.

## Install

Install from npm: (working on this!!!, not ready!!)

```bash
pi install npm:popping-and-locking-pi-theme
```

Install from GitHub:

```bash
pi install git:github.com/randoneering/popping-and-locking-pi-theme
```

Install from a local checkout:

```bash
pi install .
```

## Use

After installation, open `/settings` in pi and choose `popping-and-locking`.

You can also set it in `~/.pi/agent/settings.json` or `.pi/settings.json`:

```json
{
  "theme": "popping-and-locking"
}
```

## Preview

![Popping and Locking theme preview 1](images/example1.png)
![Popping and Locking theme preview 2](images/example2.png)

## Publish

Run the validation script before publishing:

```bash
npm test
```

Publish to npm:

```bash
npm publish
```

Once published, pi can install the package from either npm or git.

## Package layout

- `themes/popping-and-locking.json` — theme definition
- `images/example1.png` — gallery and README preview image
- `images/example2.png` — alternate preview image
- `package.json` — Pi package manifest

