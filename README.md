# `redux-toolkit-playground`

This is the seed project for you to play with!

If you want to cheat —or see the proposed solution—, you can checkout the `done` branch.

## Tasks

- Implement `useInput` hook for `login.js`
- UI Domain
  - UI Slice
    - Create it
    - Export `toggleDarkMode` action
    - Export a selector that reads the current state
    - Default-export the slice
    - Tests!
    - Add it to combineReducers
  - Connects
    - Migrate `mapStateToProps` to `createStructuredSelector` in `layout/grid.js`
    - Connect all the containers to ui—when required
- User Domain
  - Create `login` async thunk
  - User Slice
    - Create it
    - Work the reducer with all the possible `login` promise states
    - Create and export all the selectors defined in the file
    - Default-export the slice
    - Tests!
      > Note: if mocking the fulfilled case is too complex, leave it for after the Bonus Track
    - Add it to `combineReducers`
  - Connects
    - Connect all the containers to user—when required
  - Extra
    - Improve `logout`
      - Add a mock API-call for doing so
      - Create an async thunk for that
- Bonus track
  - API Mock
    - Make `login` _not_ static
    - Put a constructor that takes in the `apiBaseUrl`
    - Log it to the console when calling `login`
  - Initialize the API with a hardcoded API Base URL
  - Pass on the API instance to the store initializer
  - Define it `thunk`'s `extraArgument`
  - Use it in `login` async thunk
  - Mega-bonus: get `apiBaseUrl` from props/mount function in `App`
