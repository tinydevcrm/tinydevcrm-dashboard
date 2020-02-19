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
