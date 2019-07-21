$(document).ready(function() {

    var cartItems = [];

    $('.add-to-cart').click(function() {

        if (cartItems.length <= 0) {
            $('.empty-cart').remove();  
        }

        $('.cart-amount').text(Number($('.cart-amount').text())+1);  

        var size = $("input[name='sizes']:checked").val();

        for (let i = 0; i < cartItems.length; i++) {
            if(cartItems[i].size == size){
                cartItems[i].quantity++;
                let sizeClass = '.item-quantity-' + size; 
                $(sizeClass).text(cartItems[i].quantity);  
                return;
            }  
        } 

        var item = new Object();
        item.name = "Classic Tee";
        item.price = 75.00;
        item.size = size;
        item.quantity = 1;

        cartItems.push(item);

        var cartItem = $('<div class="row mx-2 my-4"><div class="col-4"><img class="img-fluid cart-img" src="/img/classic-tee.jpg" alt="Classic Tee"></div><div class="col-8"><p>' + item.name + '</p><p><span class="item-quantity-'+  item.size  + '">' + item.quantity + '</span><span>x</span><strong> $' + item.price + '.00</strong></p><p>Size: ' + item.size + '</p></div></div>');
        $('.dropdown-cart').prepend(cartItem);
        
    });
    
});