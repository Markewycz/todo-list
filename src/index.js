import './assets/sass/main.scss';
import UI from './assets/js/Ui';
import Storage from './assets/js/Storage';

const storageInstance = new Storage();
const uiInstance = new UI(storageInstance);

document.addEventListener(
  'DOMContentLoaded',
  uiInstance.loadHomepage.bind(uiInstance)
);
