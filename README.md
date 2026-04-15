# popping-and-locking-pi-theme

A Pi package that adds the Popping and Locking theme for pi-agent. I could not help myself....

## Install

Install from GitHub:

```bash
pi install git:github.com/randoneering/popping-and-locking-pi-theme
```

Install from a local checkout:

```bash
pi install .
```

## Use

After installation, select the theme in pi with `/settings` and choose `popping-and-locking`.

You can also set it in `~/.pi/agent/settings.json` or `.pi/settings.json`:

```json
{
  "theme": "popping-and-locking"
}
```

## Preview

![Popping and Locking theme preview 1](images/example1.png)
![Popping and Locking theme preview 2](images/example2.png)



## Package layout

- `themes/popping-and-locking.json` — theme definition
- `package.json` — Pi package manifest

