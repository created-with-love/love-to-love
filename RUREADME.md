# Сайт-предложение на 14 февраля ❤️

Мечтал, чтобы сайт сам залетел и спросил твою избранницу о свидании? Добро пожаловать, сайт созданный для той особенной девчули на 14 февраля.

[<img src="assets/rushowcase.gif" alt="showcase"  />](https://mentoster.github.io/magicmoment/)
---
# Выберите язык

Нажмите, чтобы выбрать язык:

[<img src="assets/eaglesss.png" alt="English" width="50" />](README.md)
**[English](README.md)**

[<img src="assets/nashslonyara.png" alt="Русский" width="50" />](RUREADME.md)
**[Русский](RUREADME.md)**

## ! Дисклеймер !

- **Не Любовное Зелье:**
  Этот сайт может добавить тебе чуточку цифрового обаяния, но настоящая магия — это, конечно, ты сам, чел!

---


## Кастомизация

Хочешь поменять текст? Всё: текст, картинки и даже приколы можно настроить в файле [`src/config.ts`](src/config.ts). Зацени, что там:

```ts
import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "Привет, Анна",
		invitation: "Пойдёшь со мной на свидание на этой неделе? 👉👈🥺",
		yesText: "Да",
		noText: "Нет",
		topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
	},
	noPage: {
		message: '"Нет" – это вообще не вариант😁',
		image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
	},
	yesPage: {
		message: "Увидимся на этой неделе 😄",
		image: `${assets}/Assets/Yes_picture/Yes.gif`,
	},
};
```
## Технологическая Магия

Этот сайт питается силой технологий:
- **[SvelteKit](https://kit.svelte.dev):** Создаёт интерфейсы быстрее, чем запрос к gpt для react.
- **[Vite](https://vitejs.dev):** Потому что кто не любит сервер, который запускается быстрее, чем репостят баяны с Пикабу

---

## Авто Деплой на GitHub Pages

Форкни этот репозиторий, и твоя копия автоматически задеплоится на GitHub Pages благодаря GitHub Actions. Каждый пуш в ветку `master` (или ручной запуск) обновит твой сайт быстрее, чем новый скучный прикол с Пикабу поднимется в горячее.

---

## Как Запустить (Для Отважных и Любознательных)


1. **Клонируй Репозиторий**
   ```bash
   git clone https://github.com/mentoster/magicmoment.git
   cd magicmoment
   ```

2. **Установи Зависимости**
   ```bash
   npm install
   ```

3. **Запусти Режим Разработки**
   ```bash
   npm run dev
   ```
   Любые изменения подхватываются мгновенно (hot-reload, детка)!

4. **Собери Проект**
   ```bash
   npm run build
   ```
   Собирает продакшн-версию сайта (файлы окажутся в папке `build`).

5. **Предварительный Просмотр (Опционально)**
   ```bash
   npm run preview
   ```
---

## Contributing (Если Есть Приколы)

Если у тебя есть идея, как сделать сайт ещё круче, не стесняйся: форкай, ставь звёздочку или пули пулл-реквест.
