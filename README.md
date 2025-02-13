# The Ultimate Valentine's Day Proposal Website ❤️

Ever dreamed of a website that  asks your special lady out on a date? Welcome—this site's built for that one special chick on February 14th.

[<img src="assets/enshowcase.gif" alt="showcase"  />](https://mentoster.github.io/magicmoment/)
---
# Choose Your Language

Click to select your language:


[<img src="assets/eaglesss.png" alt="English" width="50" />](README.md)
**[English](README.md)**

## ! Disclaimer !

- **Not a Love Potion:**
  This site might give you a bit of digital charm, but the real magic? That’s all you, bro!

---




## Customization

Want to change the text? Everything—the text, images, and even the jokes—can be customized in the file [`src/config.ts`](src/config.ts). Check out what's there:

```ts
import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "При, Anna",
		invitation: "Will you go on a date with me this week? 👉👈🥺",
		yesText: "Yes",
		noText: "No",
		topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
	},
	noPage: {
		message: '"No" – is not an option at all😁',
		image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
	},
	yesPage: {
		message: "See you this week 😄",
		image: `${assets}/Assets/Yes_picture/Yes.gif`,
	},
};
```

## Technological Magic

This site is powered by the force of technology:
- **[SvelteKit](https://kit.svelte.dev):** Builds interfaces faster than a GPT query for React.
- **[Vite](https://vitejs.dev):** Because who doesn’t love a server that starts up faster than a new lame joke from Reddit climbs the r/memes.

---

## Auto Deployment on GitHub Pages

Fork this repository, and your copy will automatically deploy to GitHub Pages thanks to GitHub Actions. Every push to the master branch (or a manual trigger) will update your site.

---

## How to Launch (For the Brave and Curious)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mentoster/magicmoment.git
   cd magicmoment
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Mode**
   ```bash
   npm run dev
   ```
   Any changes are picked up instantly (hot-reload, babe)!

4. **Build the Project**
   ```bash
   npm run build
   ```
   Builds the production version of the site (files will be in the `build` folder).

5. **Preview the Build (Optional)**
   ```bash
   npm run preview
   ```

---

## Contributing (If You've Got Some Memes)

If you have an idea to make the site even cooler, don't hesitate: fork it, give it a star, or drop a pull request.
