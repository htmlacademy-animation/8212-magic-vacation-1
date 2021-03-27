class AccentTypographyBuild {
  constructor(elementSelector, timer, classForActivate, property) {
    this._TIME_SPACE = 200;
    this._TIME_WORD_DELAY = 200;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this.prePareText();
  }

  createElement(letter, indexword, indexletter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    switch (indexletter) {
      case 2:
      case 6:
      case 9:
      case 11:
        this._timeOffset = 0;
        break;
      case 1:
      case 3:
      case 5:
        this._timeOffset = 100;
        break;
      case 4:
      case 8:
      case 10:
        this._timeOffset = 150;
        break;
      case 7:
        this._timeOffset = 250;
        break;
      default:
        this._timeOffset = 200;
    }
    span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset + indexword * this._TIME_WORD_DELAY}ms`;
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((letter) => letter !== '');

    const content = text.reduce((fragmentParent, word, indexword) => {
      const wordElement = Array.from(word).reduce((fragment, letter, indexletter) => {
        fragment.appendChild(this.createElement(letter, indexword, indexletter));
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
  400,
  `text-animated`,
  `transform`
);
setTimeout(() => {
  animationIntroTitle.runAnimation();
}, 200);
