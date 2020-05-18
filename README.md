# redux-toolkit-workshop-playground
## Exploration 3: putting the container closer to the component.
Also, `index.js` exports the `container` by default.

Since containers and components have a lot to do, what if they where closer together?

Some thoughts and opinions
- Feels slightly cleaner
- We're exchanging the distance between the container and the selector in favour of a distance between the container and the store: potato/patata.
- If we're using the same component with a different set of containers then this patter would probably become tricky.
