class CheckoutCompletePage {
    constructor(page) {
        this.page = page
        this.completionMessage = '.complete-header'
        this.backHomeButton = '#back-to-products'
    }

    async getCompletionMessage() {
        return await this.page.textContent(this.completionMessage)
    }

    async clickBackHome() {
        await this.page.click(this.backHomeButton)
    }
}

module.exports = CheckoutCompletePage
