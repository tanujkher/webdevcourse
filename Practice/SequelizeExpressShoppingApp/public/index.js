$(() => {
    let productlist = $('#product-list')
    fetchProducts((products) => {
        productlist.empty()
        for(product of products){
            productlist.append(createProductCard(product))
        }
    })
})