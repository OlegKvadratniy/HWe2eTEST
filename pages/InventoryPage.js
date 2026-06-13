class InventoryPage {
    constructor(page) {
        this.page = page
        this.pageTitle = '.title'
        this.sortDropdown = '.product_sort_container'
        this.cartIcon = '.shopping_cart_link'
        this.inventoryItems = '.inventory_item'
        this.inventoryItemName = '.inventory_item_name'
        this.inventoryItemPrice = '.inventory_item_price'
        this.addToCartButtons = '.btn_inventory'
    }

    async getPageTitle() {
        return await this.page.textContent(this.pageTitle)
    }

    async sortByPriceDesc() {
        await this.page.selectOption(this.sortDropdown, 'hilo')
    }

    async getMostExpensiveItemName() {
        return await this.page.locator(this.inventoryItemName).first().textContent()
    }

    async addItemToCart(itemName) {
        const item = this.page.locator(this.inventoryItems).filter({ hasText: itemName })
        await item.locator(this.addToCartButtons).click()
    }

    async openCart() {
        await this.page.click(this.cartIcon)
    }
}

module.exports = InventoryPage
