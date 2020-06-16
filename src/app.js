import 'bootstrap';
import './scss/app.scss';
import { initialPageLoad } from './initialPageLoad';

import { tab1 } from './tab1';
import { tab2 } from './tab2';
import { tab3 } from './tab3';

initialPageLoad();

let content = document.querySelector('#content');

let setTabs = (function() {
    let tabs = document.createElement('div');

    tabs.innerHTML = `<div class="tabs">
    <input type="radio" name="tabs" id="tabone" checked="checked">
    <label for="tabone">About</label>
    <div class="tab">
    ${tab1()}
    </div>
    
    <input type="radio" name="tabs" id="tabtwo">
    <label for="tabtwo">Menu</label>
    <div class="tab">
    ${tab2()}
    </div>
    
    <input type="radio" name="tabs" id="tabthree">
    <label for="tabthree">Contact</label>
    <div class="tab">
    ${tab3()}
    </div>
  </div>`;

    content.appendChild(tabs);
})();