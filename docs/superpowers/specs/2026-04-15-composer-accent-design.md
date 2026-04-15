# Composer accent design

## Summary

Update the `popping-and-locking` Pi theme so the bars around the input composer and closely related composer accents use a new bolder light blue.
Keep the rest of the theme on the existing palette for now.

## Goal

Make the composer area easier to spot during normal use.
Improve emphasis around the input area without making the rest of the interface louder.

## Chosen color

- `composerBlue`: `#8ecae6`

## Scope

In scope:

- Add a dedicated theme variable for the composer accent color
- Apply that color to the bars above and below the input composer
- Apply that color to closely related active accents in the composer area
- Keep unrelated UI colors unchanged unless Pi ties the composer area to a broader token

Out of scope:

- Reworking the full theme palette
- Changing warning, error, markdown, syntax, or tool output colors
- Replacing the existing `brightBlue` everywhere in the theme

## Approach options considered

### Option 1: Remap shared accent or border tokens

Change existing global accent or border tokens to the new blue.
This is fast but risks repainting too much of the interface.

### Option 2: Add a dedicated composer variable

Add a new variable and map only composer-related tokens to it.
This is the cleanest long-term intent but depends on Pi exposing enough separate tokens.

### Option 3: Hybrid approach

Add a dedicated composer variable and remap the smallest set of likely composer-facing tokens first.
Keep general borders and other accents on their current values unless testing shows the composer depends on them.

## Decision

Use option 3.
Add `composerBlue` and apply it conservatively.
Start with the tokens most likely to affect the composer bars and nearby composer accents.
Leave general theme accents alone unless validation shows the composer area cannot be isolated that way.

## Implementation shape

- Add `composerBlue: "#8ecae6"` to `themes/popping-and-locking.json`
- Map the most likely composer-facing accent token or tokens to `composerBlue`
- Keep general border tokens on their current values unless the composer bars depend on them
- Keep existing palette values for links, markdown, syntax, warnings, and errors

## Validation

After the theme change, verify:

1. The composer bars switch to the new bolder light blue
2. Nearby composer accents look cohesive
3. Unrelated UI does not broadly inherit the new color

## Fallback

If the first token remap does not affect the composer bars, expand the change to the next most likely accent token used by Pi for that area.
Do not change error or warning semantics as part of this work.

## Success criteria

- The composer area is visibly clearer
- The bars around the input area use the new bolder blue
- The rest of the theme still feels consistent with the current palette
- The new color reads as a deliberate composer accent, not a full theme rewrite
