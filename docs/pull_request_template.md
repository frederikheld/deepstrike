# [ New function / changes in function ] \<name>

Thank you very much for your contribution!

To keep this library clean and tidy, and the review process short, please answer the following questions and fill out the checklist to make sure that your contribution is ready to be merged.

## Why do we need this PR?

_Please give a short description why your changes are valuable to the users of this library!_

_If this PR is related to an issue in the [issue tracker](https://github.com/frederikheld/deepstrike/issues), please link the issue here (type `#` to select an issue)._

## Quality Checklist

- [x] Are you using the [PR template](./docs/pull_request_template.md) for this PR?

- [ ] Does this PR include only one new function or changes in only one existing function? If not, why not?

- [ ] Is this feature not already covered by another function in the library?

- [ ] Is the function in it's separate module? (see folder structure in [`/lib`](../lib))

- [ ] Are the changes tested?
      
  If this PR improves an existing function: did you update the tests to test new behavior?

- [ ] Is there one test suite per function? (see folder structure in [`/tests`](../tests))

- [ ] Do the printed test results serve as detailed documentation of the function's behavior?

- [ ] Does the function have a short summary in JSDoc style?
      
  If this PR is an improvement of an existing function: did you update the docs?

- [ ] Is there a global module export for this function in [`./index.js`](./index.js)? Is this export tested in [`./tests/1_index.test.js`](./tests/1_index.test.js)?

- [ ] Does this function re-use existing functions of the library instead of re-implementing features in place?

- [ ] Is the PR correctly tagged?

If you have any questions or suggestions, don't hesitate to leave a comment ;-)
