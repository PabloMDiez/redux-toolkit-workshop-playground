# redux-toolkit-workshop-playground
## Exploration 2: using hooks and injecting dependencies to the component as props.

> Notice: only `src/components/header.js` has been migrated. Also, test for it introduced. 

This approach allows dependency injection, moving away (a bit) from `jest`'s mocking needs.
I'm not a fan of this idea, and take in account: it's just an exploration.

Some thoughts and opinions
- Still has name shadowing
- We can't run away from getting the instance of the mocked dispach in each test.
- The boilerplate code needed to specific hook return values is not easy to read. Feels smart, but it's not convenient.

