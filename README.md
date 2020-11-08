# news-app

## Used skills

1. React
2. Typescript
3. React-redux
4. Redux-saga
5. axios
6. styled-components
7. font-awesome
8. lodash

## Key features

1. Responsive layout
2. Infinite scroll paging
3. Debounce search
4. Save (Like 👍) feature

## Directory Structure

```text
public
 ┣ favicon.ico
 ┣ index.html
 ┣ logo192.png
 ┣ logo512.png
 ┣ manifest.json
 ┗ robots.txt
src
 ┣ apis
 ┃ ┗ index.ts
 ┣ components
 ┃ ┣ card
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ style.ts
 ┃ ┣ header
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ style.ts
 ┃ ┣ list
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ style.ts
 ┃ ┣ nav
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ style.ts
 ┃ ┣ saved
 ┃ ┃ ┗ index.tsx
 ┃ ┗ index.ts
 ┣ hooks
 ┃ ┣ index.ts
 ┃ ┣ useNewsFetch.ts
 ┃ ┣ useNextPage.ts
 ┃ ┣ useSavedDispatch.ts
 ┃ ┣ useScrollLocation.ts
 ┃ ┗ useSetKeyword.ts
 ┣ store
 ┃ ┣ news
 ┃ ┃ ┣ actions.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ reducer.ts
 ┃ ┃ ┣ saga.ts
 ┃ ┃ ┗ types.ts
 ┃ ┣ saved
 ┃ ┃ ┣ actions.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ reducer.ts
 ┃ ┃ ┗ types.ts
 ┃ ┗ index.ts
 ┣ styles
 ┃ ┗ index.ts
 ┣ utils
 ┃ ┗ index.ts
 ┣ App.tsx
 ┣ index.tsx
 ┗ react-app-env.d.ts
```

## How to run this project

```bash
    #first,
    yarn # or npm install

    # then

    yarn start # or npm start
```
