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
        await browser.saveScreenshot('./screenshot.png')
    })
    it('it should add code to input', async () => {
        await MainPage.open()
        const myText = await MainPage.inputPasteText.setValue('' +
            'git config --global user.name "New Sheriff in Town"\n' +
            '\n' +
            'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n' +
            '\n' +
            'git push origin master --force')
        await MainPage.scrollPage()
        await MainPage.pasteFormExpContainer.click()
        await MainPage.expContainer10minutes.click()
        await MainPage.syntaxInput.click()
        await MainPage.searchFieldInInput.setValue('Bash')
        await $(`//li[contains(text(), "Bash")]`).click()
        await MainPage.pasteFormName.setValue('how to gain dominance among developers')
        await MainPage.creatingPasteButton.click()
        await browser.saveScreenshot('./screenshot2.png')
        await browser.deleteSession()
        const browserTitle = await browser.getTitle()
            if (browserTitle.includes(title)){
                console.log('Browser Title matches Paste Title')
            } else console.log('ERROR')
            const suspendedSyntax = await $(`//a[text()="Bash"]`).getText()
            if (suspendedSyntax === "Bash"){
                console.log('Syntax is suspended for bash')
            }else console.log('Syntax Error')
            const pasteText = await $('.de1').getText()
            if (myText.includes(pasteText)){
                console.log('Code matches the one entered in paragraph 2')
            }else console.log('Code error')
    })
})


