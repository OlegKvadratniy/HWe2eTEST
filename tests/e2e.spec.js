const { test, expect } = require('@playwright/test')

const LoginPage = require('../pages/LoginPage')
const InventoryPage = require('../pages/InventoryPage')
const CartPage = require('../pages/CartPage')
const CheckoutStepOnePage = require('../pages/CheckoutStepOnePage')
const CheckoutStepTwoPage = require('../pages/CheckoutStepTwoPage')
const CheckoutCompletePage = require('../pages/CheckoutCompletePage')

test('Полный сценарий покупки от логина до завершения', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutStepOne = new CheckoutStepOnePage(page)
    const checkoutStepTwo = new CheckoutStepTwoPage(page)
    const checkoutComplete = new CheckoutCompletePage(page)

    //Логин
    await loginPage.open()

    // Логинимся
    await loginPage.login('standard_user', 'secret_sauce')

    // Проверяем что после логина открылась страница с товарами
    expect(await inventoryPage.getPageTitle()).toBe('Products')

    // Сортируем товары от самого дорогого к дешевому и берем первый
    await inventoryPage.sortByPriceDesc()
    const mostExpensiveItem = await inventoryPage.getMostExpensiveItemName()
    await inventoryPage.addItemToCart(mostExpensiveItem)

    // Переходим в корзину
    await inventoryPage.openCart()

    // Проверяем что в корзине тот товар который добавляли
    expect(await cartPage.getItemName()).toBe(mostExpensiveItem)

    // Начинаем оформление заказа
    await cartPage.goToCheckout()

    // Заполняем информацию о покупателе
    await checkoutStepOne.fillUserInfo('Test', 'User', '12345')

    // Завершаем покупку
    await checkoutStepTwo.finishCheckout()

    // Проверяем что заказ успешно оформлен
    expect(await checkoutComplete.getCompletionMessage()).toBe('Thank you for your order!')
})
