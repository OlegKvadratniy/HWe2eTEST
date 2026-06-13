class CheckoutStepTwoPage {
    constructor(page) {
        this.page = page
        this.itemName = '.inventory_item_name'
        this.totalPrice = '.summary_total_label'
        this.finishButton = '#finish'
    }

    async getItemName() {
        return await this.page.locator(this.itemName).first().textContent()
    }

    async getTotalPrice() {
        return await this.page.textContent(this.totalPrice)
    }

    async finishCheckout() {
        await this.page.click(this.finishButton)
    }
}

module.exports = CheckoutStepTwoPage
