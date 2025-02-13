import { assets } from '$app/paths';

export const config = {
  mainPage: {
    heading: 'Хелоу, моя солоденька Любава!',
    invitation: 'Заточимо ввечері суші з винцем? 👉👈🥺',
    yesText: 'Так',
    noText: 'Нє',
    topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
    leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
    rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
  },
  noPage: {
    message: 'Відповідь "Нє" не приймається😁',
    image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
  },
  yesPage: {
    message: 'Скоро побачимось, рибка 😄',
    image: `${assets}/Assets/Yes_picture/Yes.gif`,
  },
};
