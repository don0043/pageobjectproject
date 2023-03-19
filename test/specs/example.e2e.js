import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import MainPage from '../pageobjects/mainpage.js'

describe('My Login application', () => {
    it('add initial values to input', async () => {
        await MainPage.open()
        await MainPage.inputPasteText.setValue('Hello from WebDriver')
        await MainPage.scrollPage()
        await MainPage.pasteFormExpContainer.click()
        await MainPage.expContainer10minutes.click()
        await MainPage.pasteFormName.setValue('helloweb')
        await MainPage.creatingPasteButton.click()
    })
    it('it should add code to input', async () => {
        await MainPage.open()
        const myText = '' +
        'git config --global user.name "New Sheriff in Town"\n' +
        '\n' +
        'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n' +
        '\n' +
        'git push origin master --force'
        await MainPage.inputPasteText.setValue(myText)
        await MainPage.scrollPage()
        await MainPage.pasteFormExpContainer.click()
        await MainPage.expContainer10minutes.click()
        await MainPage.syntaxInput.click()
        await MainPage.searchFieldInInput.setValue('Bash')
        await MainPage.bashOption.click()
        await MainPage.pasteFormName.setValue('how to gain dominance among developers')
        await MainPage.creatingPasteButton.click()
        await MainPage.checkTitle()
        await expect(MainPage.pasteSyntax).toHaveTextContaining('Bash')
        await expect(MainPage.pasteText).toHaveTextContaining(myText)
    })
})
