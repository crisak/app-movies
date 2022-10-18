<p align="center">
  <a href="http://localhost:5173/">
    <img alt="NativApps" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFgpu8qjjCakQ/company-logo_200_200/0/1519922047330?e=1674086400&v=beta&t=Hg2ZK_ybAX2tIQY3MeNCb-baO7c-lPMqNsvye4iVYYE" width="92px" height="92px"/>
  </a>
</p>
<h1 align="center">
  Webside NativApps - Movies
</h1>

**Demo**

<a href="https://www.google.com" target="_blank">https://app-movies-production.up.railway.app/</a>



## 🐳 Install dependencies

```bash
$ yarn install
```

## 🧪 Scripts available

### Run project in production

```bash
$ yarn start
```

### Run tests

```bash
$ yarn test
```

### Run coverage test

Creates a `coverage` directory in root of project.

```bash
$ yarn coverage
```

### Build app

Creates a `dist` directory with a production build of your app.

```bash
$ yarn build
```

### Run linter

```bash
$ yarn lint
```

## 📄 Feature

- Performance(Virtual scroll)
- SOLID principles
- Applying clean architecture
- Avoid updating unmounted components
- Control of errors
- CEO
- Development oriented to Atomic Design
- Unit testing

## 📄 File naming conventions

This helps us visually identify what task each file is going to do and allows us to perform more efficient searches when developing, this help us the development experience

> Use PascalCase for all components

- `Movies.tsx` for create components

  - `Movies.test.tsx` for create components with test

  - `Movies.modules.css` or `*.modules.scss` for use css modules, click <a href="https://github.com/css-modules/css-modules">here</a> for more info
  - `Movies.styles.tsx` for create css in js with `styled-components`

- `useFetch.ts` for create custom hooks
- `withSearch.ts` for create HOC

- `measures.util.ts` for create utilities files

  - `map-values.util.ts`

- `movies.service.ts` for create utilities files

## 🎯 Architecture of directories

```bash
├── README.md
├── index.html
├── package.json
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── __mocks__
│   │   ├── movies.mock.ts
│   │   └── services
│   │       ├── index.ts
│   │       └── movies.service.ts
│   ├── assets
│   │   ├── favicon.ico
│   │   ├── natiapps-logo.png
│   │   └── react.svg
│   ├── components
│   │   ├── alert
│   │   │   ├── Alert.styles.ts
│   │   │   ├── Alert.test.tsx
│   │   │   ├── Alert.tsx
│   │   │   └── index.ts
│   │   ├── error-provider
│   │   │   ├── ErrorProvider.styles.ts
│   │   │   ├── ErrorProvider.tsx
│   │   │   ├── index.ts
│   │   │   └── useError.ts
│   │   ├── movies
│   │   │   ├── Movies.tsx
│   │   │   └── index.ts
│   ├── dtos
│   │   ├── index.ts
│   │   └── movie.dto.ts
│   ├── hooks
│   │   ├── index.ts
│   │   └── useFetch.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── index.ts
│   ├── services
│   │   ├── index.ts
│   │   └── movies.service.ts
│   ├── styles
│   │   ├── Background.ts
│   │   ├── Container.ts
│   │   ├── Header.ts
│   │   ├── Main.ts
│   │   ├── global.css
│   │   ├── index.ts
│   │   ├── mix.ts
│   │   └── variables.ts
```
