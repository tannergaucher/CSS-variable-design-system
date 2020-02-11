# Semantic Design System

Write semantic HTML with matching class. Get responsive typography and spacing, adjustable vertical rhythm, automatic light / dark mode. Customize with CSS variables. No dependencies. Framework agnostic.

## Features

## CSS Variables

### Typography

<!-- Customizable  Typography-->

- `--sans`
- `--serif`
- `--mono`
- `--heading-line-height`
- `--paragraph-line-height`
  `--heading-letter-spacing`
- `--paragraph-letter-spacing`
  <!-- Text sizes should not be touched because they are calculated. -->
- `--text-xs`
- `--text-sm`
- `--text-md`
- `--text-lg`
- `--text-xl`
- `--text-xxl`
- `--text-xxxl`

### Vertical Rhythm

<!-- Customizable -->

- `--responsive-unit`
- `--text-base-size`
- `--text-scale-ratio`

### Spacing

<!-- Customizable -->

- `--baseline`
  <!-- Calculated -->
- `--space-sm`
- `--space-md`
- `--space-lg`
- `--space-xl`

### Colors

<!-- Customizable -->

- `--text-color`
- `--bg-1`
- `--bg-2`
- `--grey`
- `--href-color`
- `--href-hover-color`
- `--btn-bg`
- `--btn-color`
- `--btn-border`
- `--btn-hover-color`
- `--primary-btn-bg`
- `--primary-btn-color`
- `--primary-btn-hover-color`
- `--input-border`
- `--code-bg`
- `--shadow-color`

### Component Styles

<!-- Customizable -->

- `--radius`
- `--radius-lg`
- `--thickness`
- `--container`
- `--elevation-1`
- `--elevation-2`
- `--elevation-3`
- `--transition`
- `--opacity`

## Classes

- `.header`

- `.footer`

- `.main`

- `.fieldset`

* `.form`

- `.input`

* `.textarea`

- `.btn`
- `.btn-primary`

* `.blockquote`

- `.nav-link`

- `.nav`

- `.main`

- `.figure`

- `figcaption`

### TODO

- `time`

- `bold`

- `code`

## Functional Classes

- `.container`

- `.padding`

- `.center`

<!-- res padding -->

## Typography Classes

Write html semantically and add classes to adjust text sizes

- `.text--xs`
- `.text--sm`
- `.text--md`
- `.text--lg`
- `.text--xl`
- `.text--xxl`
- `.text--xxxl`

Example

```html
<article>
  <h1>Heading one</h1>
  <h2 className="text--md">
    Semantically I function has a heading two, but my text size is that of a
    heading four.
  </h2>
  <p>Some article here</p>
</article>
```
