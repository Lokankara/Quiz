## Quiz

[API](https://quiz-6o4v.onrender.com)

[React](https://quiz-aws.onrender.com/)

[![Java CI/CD](https://github.com/Lokankara/Quiz/actions/workflows/ci.yml/badge.svg)](https://github.com/Lokankara/Quiz/actions/workflows/ci.yml)

```bash
npx create-react-app ui --template typescript
npm install @types/node@^20.19.0 --save-dev
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
npm install tailwindcss-animate eslint @eslint/eslintrc
npm install -D tailwindcss
npm install react-router-dom @mui/material @emotion/react @emotion/styled
npm install react-plotly.js plotly.js-basic-dist-min
npm install --save-dev @types/plotly.js
npm install --save-dev @types/react-router-dom
npm install react-router-dom@latest
npm install axios
npm install --save-dev @types/axios
npm install -D tailwindcss postcss autoprefixer
npm install -D tailwindcss@3
npx tailwindcss init -p
```

`npm start dev`

Build and run the application with Gradle:

`./gradlew bootRun`

`./gradlew clean build --refresh-dependencies`

To run backend tests:

`./gradlew test`

To run backend tests and save results to file:

`./gradlew test --info > /docs/test-results.md`

To run UI tests:

`npm run test`

To run UI tests and save results to file:

`npm test -- --coverage --watchAll=false > ui-test-results.txt`

To run both backend and UI tests:

`./gradlew test && npm test -- --coverage --watchAll=false`

To run all tests and save combined results to file:

`./gradlew test --info > backend-test-results.md && npm test -- --coverage --watchAll=false > ui-test-results.md`

To run all tests and save results in MD format for local analysis:

`npm test -- --coverage --watchAll=false --reporters=jest-html-reporter > ui-test-results.md`

`npm run build`

## TODO

schema.sql

The routing is handled by Spring Boot controllers (e.g., RouterController.java) and React Router for client-side navigation. There is no Express.js in this application stack. The RouterController forwards non-API requests to the React application to enable client-side routing in production.