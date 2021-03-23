// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import {AccentTypographyBuild} from './modules/accent-typography';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

// Add text animation
const animationIntroTitle = new AccentTypographyBuild(
  `.intro__title`,
  1000,
  `text-animated`,
  `transform`
);
setTimeout(() => {
  animationIntroTitle.runAnimation();
}, 500);
