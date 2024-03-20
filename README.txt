# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Project Directory for Redux-Thunk

└── src/
    ├── actions/
    ├── components/
    ├── reducers/
    ├── App.js
    ├── index.css
    ├── index.js
    └── store.js

Setting up the Redux Store using Redux-Thunk — store.js
configureStore() is being used to create and initialize the store with the provided reducer; we’ll add it later.
To ensure type safety, AppDispatch and RootState typings are defined for the dispatch() and getState() of our store instance.

Bring the store into our index.js and feed it to our react app through the Provider

Bringing in the Reducers
Reducers will help us access the application state within any component. We can have many reducers and combine them all in the rootReducer.