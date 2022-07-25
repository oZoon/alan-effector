# Зависимости
- node.js 16.16.0
- react.js 18.2.0
- typescript 4.7.4
- effector 22.3.0

# Установка
```
$ npx create-react-app alan-effector
$ cd alan-effector
$ npm i effector
$ npm i effector-react
$ npm i -D typescript
```

# запуск
```
$ npm run start
```

# О проекте
В качестве стейт-менеджера используется effector, особенности проекта:
1. всё синхронное, fetch-запросы отсутствуют,
2. для связей используется в основном sample, один к одному, многие к одному
3. структура каталогов использована из https://github.com/42-px/frontend-architecture
