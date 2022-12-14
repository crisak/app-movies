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



## ๐ณ Install dependencies

```bash
$ yarn install
```

## ๐งช Scripts available

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

## ๐ Feature

- Performance(Virtual scroll)
- SOLID principles
- Applying clean architecture
- Avoid updating unmounted components
- Control of errors
- CEO
- Development oriented to Atomic Design
- Unit testing

## ๐ File naming conventions

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

## ๐ฏ Architecture of directories

```bash
โโโ README.md
โโโ index.html
โโโ package.json
โโโ src
โ   โโโ App.test.tsx
โ   โโโ App.tsx
โ   โโโ __mocks__
โ   โ   โโโ movies.mock.ts
โ   โ   โโโ services
โ   โ       โโโ index.ts
โ   โ       โโโ movies.service.ts
โ   โโโ assets
โ   โ   โโโ favicon.ico
โ   โ   โโโ natiapps-logo.png
โ   โ   โโโ react.svg
โ   โโโ components
โ   โ   โโโ alert
โ   โ   โ   โโโ Alert.styles.ts
โ   โ   โ   โโโ Alert.test.tsx
โ   โ   โ   โโโ Alert.tsx
โ   โ   โ   โโโ index.ts
โ   โ   โโโ error-provider
โ   โ   โ   โโโ ErrorProvider.styles.ts
โ   โ   โ   โโโ ErrorProvider.tsx
โ   โ   โ   โโโ index.ts
โ   โ   โ   โโโ useError.ts
โ   โ   โโโ movies
โ   โ   โ   โโโ Movies.tsx
โ   โ   โ   โโโ index.ts
โ   โโโ dtos
โ   โ   โโโ index.ts
โ   โ   โโโ movie.dto.ts
โ   โโโ hooks
โ   โ   โโโ index.ts
โ   โ   โโโ useFetch.ts
โ   โโโ main.tsx
โ   โโโ pages
โ   โ   โโโ Home.tsx
โ   โ   โโโ index.ts
โ   โโโ services
โ   โ   โโโ index.ts
โ   โ   โโโ movies.service.ts
โ   โโโ styles
โ   โ   โโโ Background.ts
โ   โ   โโโ Container.ts
โ   โ   โโโ Header.ts
โ   โ   โโโ Main.ts
โ   โ   โโโ global.css
โ   โ   โโโ index.ts
โ   โ   โโโ mix.ts
โ   โ   โโโ variables.ts
```
