# Установка

1) В корне проекта в консоли ввести команду `npm install`;

2) В папке ./server/config/database.json в "development" ввести настройки бд;

3) В консоли зайти в папку ./server/ и выполнить команду `npx sequelize db:migrate`, чтобы создать таблицы в бд;

4) Там же выполнить команду `npx sequelize db:seed:all`, чтобы внести начальные данные в бд.

# Запуск

1) В корне проекта выполнить команду `npm run dev`, чтобы запустить front и back.

2) Логин: root , пароль: 1234