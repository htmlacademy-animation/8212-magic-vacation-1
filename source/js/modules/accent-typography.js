class AccentTypographyBuild {
  constructor(elementSelector, timer, classForActivate, property) {
    this._TIME_WORD_DELAY = 200;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this.prePareText();
  }

  createElement(letter, indexword) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    this._timeOffset = Math.floor(Math.random() * 250);
    span.style.transition = `${this._property} ${this._timer}ms cubic-bezier(.215, .61, .355, 1) ${this._timeOffset + indexword * this._TIME_WORD_DELAY}ms`;
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((letter) => letter !== ``);

    const content = text.reduce((fragmentParent, word, indexword) => {
      const wordElement = Array.from(word).reduce((fragment, letter) => {
        fragment.appendChild(this.createElement(letter, indexword));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text-word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}

// Add text animation
const animationIntroTitle = new AccentTypographyBuild(
    `.intro__title`,
    500,
    `text-animated`,
    `transform`
);
setTimeout(() => {
  animationIntroTitle.runAnimation();
}, 200);

const animationIntroDate = new AccentTypographyBuild(
    `.intro__date`,
    500,
    `text-animated`,
    `transform`
);
setTimeout(() => {
  animationIntroDate.runAnimation();
}, 700);

const animationHistoryTitle = new AccentTypographyBuild(
    `.slider__item-title`,
    500,
    `text-animated`,
    `transform`
);
setTimeout(() => {
  animationHistoryTitle.runAnimation();
}, 200);

const animationPrizesTitle = new AccentTypographyBuild(
    `.prizes__title`,
    500,
    `text-animated`,
    `transform`
);
setTimeout(() => {
  animationPrizesTitle.runAnimation();
}, 200);

const animationRulesTitle = new AccentTypographyBuild(
    `.rules__title`,
    500,
    `text-animated`,
    `transform`
);
setTimeout(() => {
  animationRulesTitle.runAnimation();
}, 200);

const animationGameTitle = new AccentTypographyBuild(
    `.game__title`,
    500,
    `text-animated`,
    `transform`
);
setTimeout(() => {
  animationGameTitle.runAnimation();
}, 200);
