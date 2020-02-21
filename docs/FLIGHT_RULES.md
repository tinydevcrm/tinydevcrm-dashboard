# Flight rules

## What are flight rules?

A guide for core developers and core maintainers of `tinydevcrm-dashboard` about
what to do when things go wrong.

>   *Flight rules* are the hard-earned body of knowledge recorded in manuals
>   that list, step-by-step, what to do if X occurs, and why. Essentially, they
>   are extremely detailed, scenario-specific standard operating procedures.
>
>   NASA has been capturing our missteps, disasters, and solutions since the
>   early 1960s, when Mercury-era ground teams first started gathering "lessons
>   learned" into a compendium that now lists thousands of problematic
>   situations, from engine failure to busted hatch handles to computer
>   glitches, and their solutions.

-- Chris Hadfield, *An Astronaut's Guide to Life*.

## 1. CSS styling is global to the entire document

### Problem

Manually de-duplicating CSS class names and ensuring that attributes aren't
merged, duplicated, or overwritten between components will easily become
impossible without some form of automation.

### Solution

A few years ago (c. 2017), a co-worker mentioned using
[**`css-modules`**](https://github.com/css-modules/css-modules), a way in order
to locally scope all CSS attributes, and let `webpack` dynamically generate
unique classes for React components for production builds. This automates the
process of flattening function and block scope for global documents.

I believe SASS modules builds on top of this workflow using
[`sass`](https://sass-lang.com/), a CSS superset.

## 2. Bundle sizes are too big, and performance has slowed down to a crawl

### Problem

When JavaScript bundle sizes are too big, bundle delivery may become too large,
affecting page load times. Page load times are directly interlinked with
possible revenue, SEO rankings, and user experience / customer satisfaction.

### Solution

A number of solutions could be considered in order to reduce bundle sizes:

-   Using performance and bundle-size optimized dependencies (that ideally are
    hot-swappable), such as [**`preact`**](https://preactjs.com/).

-   Minifying bundles, using tools like
    [**`UglifyJS`**](https://github.com/mishoo/UglifyJS), which could result in
    a size savings of around 5x.

-   Pruning unused code using [tree
    shaking](https://en.wikipedia.org/wiki/Tree_shaking), which should have a
    number of JavaScript build tool plugins / integrations.

-   Route-based [code splitting](https://reactjs.org/docs/code-splitting.html),
    so that you only load the JavaScript needed for a particular route instead
    of the entire bundle during every API call.

A number of tools exist in order to test performance. These may include:

-   Browser-based devtools network monitors, such as Google Chrome DevTools or
    Mozilla Firefox DevTools. These allow you to see latency dependencies (or
    which pieces of code call which other pieces), and allow to throttle network
    artifically to see page load times under external pressures.

-   A rankings-based performance tool, such as [Google
    Lighthouse](https://github.com/GoogleChrome/lighthouse). This tool (and ones
    like it) should give up-to-date tips on how to improve performance.

## 3. CSS / SCSS styling not showing up after `webpack` compilation

### Problem

When attempting to load SCSS modules for one file, I found that not only was the
styling not applied correctly, but no errors were raised. I thought the solution
might have been an incorrect SCSS import, or a misnaming issue, or something
else entirely.

### Solution

See whether the file comprises alphabetical characters only. This was
encountered during creation of the "HTTP 401 (Unauthorized) page", where SCSS
file `401.module.scss` wasn't loaded properly but threw no errors, yet
`fourZeroOne.module.scss` loaded styling properly.

Misnaming issue went away because I inspected the source on the browser and
classes were applied correctly. SCSS imports issue concerns went away after I
could successfully import other SCSS files (using absolute paths) and refer to
variables from those imported files.

## 4. `ant-design` styling doesn't appear correctly

### Problem

When `antd` styling is imported into the SCSS file for a given custom-made
React.js UI component, some portions of the underlying design components for
`antd` do not appear in the end-result computed CSS styling. For example, a
`Col` component that has a certain `span` and a certain `offset` attribute drops
both attributes, and the column spans the entire width of the row and does not
have any offset.

### Solution

Instead of importing the `antd` CSS file within the `.scss` file:

```scss
@import '~antd/dist/antd.css';
```

import the CSS file directly within the `.jsx` file:

```jsx
import 'antd/dist/antd.css';

import styles from './reactComponent.module.scss';
```

This is especially important for `antd` layout components like `Row` and `Col`.

Ordering should not matter between importing the CSS and SCSS files. This may be
an issue with the SCSS processing pipeline eliding certain styling.
