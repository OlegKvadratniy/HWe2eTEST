class CartPage {
    constructor(page) {
        this.page = page
        this.cartItems = '.cart_item'
        this.itemName = '.inventory_item_name'
        this.checkoutButton = '#checkout'
        this.continueShoppingButton = '#continue-shopping'
    }

    async getItemName() {
        return await this.page.locator(this.itemName).first().textContent()
    }

    async goToCheckout() {
        await this.page.click(this.checkoutButton)
    }

    async continueShopping() {
        await this.page.click(this.continueShoppingButton)
    }
}

module.exports = CartPage
