$(() => {
    $('#btnAdd').click(() => {
        let productName = $('#productName')
        let productManufacturer = $('#productManufacturer')
        let productPrice = $('#productPrice')
        addProduct(productName.val(), productManufacturer.val(), productPrice.val(), function done(addedProduct) {
            window.alert('Added ' + addedProduct.name + ' to Database')
        })
    })
})