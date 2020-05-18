# redux-toolkit-workshop-playground
## Exploration 1: using `useDispatch` and `useSelector` hooks.

> Notice: only `src/components/header.js` has been migrated. 

Some thoughts and opinions
- This introduces the need of shadowing names, or coming up with different (but similar ones)
- You cannot hook your HTML elements events into a useDispatch: the event param contains non-serializable properties and Redux Toolkit will drop errors in your console
  - This could be fixed by creating a `useDispatch()` abstraction but that feels extra work to do (and test)
- We would heavily depend on `jest`  mocking functions:
  - Module resolvers are not autocompleted, and if they change location our test will break. Also our IDEs cannot be smart with this (at least not by default).
- Need to reset jest mocks every time. We can forward trash states between tests.

