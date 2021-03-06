# Time Setting Refactoring Example

This example was adapted from [Berkeley cs169](https://github.com/saasbook/flipped-demos/tree/master/ch09-legacy/refactoring_timesetter) under a CC-BY-SA-NC license.

On December 31, 2008, all Microsoft Zune MP3 players that were booted up on that day mysteriously froze. If you rebooted on January 1, 2009, it would work again. This example includes the buggy code, as explained in this [blog post](http://www.zuneboards.com/forums/showthread.php?t=38143), transliterated to ES6. Try 10593 (Dec 31, 2008) or 1827 (Dec 31, 1984) to trigger the bug (an infinite loop). Note that this implies that we start counting from 1, that is January 1 is day 1.

## Files

* `v0.js`: Original transliterated
* `v1.js`: Refactored with more relevant variable names, but no other changes
* `v2.js`: Extract the `isLeapYear` function to improve readability and introduce a test suite
* `v3.js`: Extracts `addLeapYear` and `addCommonYear` functions to reduce function complexity. Adds additional test cases for extracted functions.
* `v4.js`: Major refactor to fix logic error, add additional tests ot verify correctness.

## Complexity Analysis

This package incorporates ESLint, which is configured to flag functions/methods with [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) greater than [NIST-recommended limit of 10](https://github.com/JetBrains/resharper-cyclomatic-complexity/blob/master/docs/ThresholdGuidance.md). None of the examples should trigger that limit. You can modify `.eslintrc.json` to implement stricter limits (e.g. 5).

This package also incorporates the Plato code analysis tool to generate complexity and other statistics for each file (and function/method). You can generate the Plato report (a static website in the `report` directory) with:

```
npm run plato
```

Unfortunately there is not a readily available tool for [ABC complexity](https://en.wikipedia.org/wiki/ABC_Software_Metric) analysis for ES6.
