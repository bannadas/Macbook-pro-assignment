const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const bestPrice = document.getElementById('best-price');
const total = document.getElementById('total');
const promoInput = document.getElementById('promo-input');

// memory part
document.getElementById('8gb-memory').addEventListener('click', function(){
    memoryCost.innerText = '0';
    updateTotalPrice();
})
document.getElementById('16gb-memory').addEventListener('click', function(){
    memoryCost.innerText = '180';
    updateTotalPrice();
})
// storage part
document.getElementById('256gb-storage').addEventListener('click', function(){
    storageCost.innerText = '0';
    updateTotalPrice();
})
document.getElementById('512gb-storage').addEventListener('click', function(){
    storageCost.innerText = '100';
    updateTotalPrice();
})
document.getElementById('1tb-storage').addEventListener('click', function(){
    storageCost.innerText = '180';
    updateTotalPrice();
})

// delivery charge
document.getElementById('delivery-free').addEventListener('click', function(){
    deliveryCharge.innerText = '0';
    updateTotalPrice();
})
document.getElementById('delivery-twenty').addEventListener('click', function(){
    deliveryCharge.innerText = '20';
    updateTotalPrice();
})

// update total price  
function updateTotalPrice(){
    const best = parseInt(bestPrice.innerText);
    const memory = parseInt(memoryCost.innerText);
    const storage = parseInt(storageCost.innerText);
    const delivery = parseInt(deliveryCharge.innerText);
    const grandTotal = best + memory + storage + delivery;
    totalPrice.innerText = grandTotal;
    total.innerText = grandTotal;   
}

// promo code section
 document.getElementById('apply-btn').addEventListener('click',function(){
    const best = parseInt(bestPrice.innerText);
    const memory = parseInt(memoryCost.innerText);
    const storage = parseInt(storageCost.innerText);
    const delivery = parseInt(deliveryCharge.innerText);
    const grandTotal = best + memory + storage + delivery;
     if(promoInput.value == 'stevekaku' ){
        total.innerText = grandTotal - (grandTotal * 0.2);
        // clear input field
        promoInput.value = '';
     }
 })
