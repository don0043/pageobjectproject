

import Page from './page.js';

class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputPasteText () {
        return $('#postform-text');
    }
    get pasteFormExpContainer () {
        return $('#select2-postform-expiration-container')
    }

    get expContainer10minutes () {
        return $(`//li[contains(text(), "10 Minutes")]`)
    }
    get pasteFormName () {
        return $('#postform-name')
    }
    get creatingPasteButton () {
        return $(`.-big`)
    }
    get syntaxInput () {
        return $('#select2-postform-format-container')
    }
    get searchFieldInInput () {
        return $('.select2-search__field')
    }
    get bashOption(){
        return $('//li[contains(text(), "Bash")]')
    }

    get pasteSyntax(){
        return $('//div[@class="left"]/a')
    }
    get pasteText(){
        return $('.de1')
    }

    checkTitle(title){
        return expect(browser).toHaveTitleContaining(title)
    }

    open () {
        return super.open('https://pastebin.com/');
    }

    scrollPage () {
        return        browser.scroll(0, 400)

    }
}

export default new MainPage();
