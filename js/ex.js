function updateTotalPrice(cardPrice) {
    const totalPriceElement = document.getElementById('total-price-field');
    const totalFieldElement = document.getElementById('total-field');
    
    const totalPrice = parseFloat(totalPriceElement.innerText);
    const totalField = parseFloat(totalFieldElement.innerText);
    
    const newTotalPrice = totalPrice + cardPrice;
    const newTotalField = totalField + cardPrice;
    
    totalPriceElement.innerText = newTotalPrice.toFixed(2); // Ensure decimal precision
    totalFieldElement.innerText = newTotalField.toFixed(2); // Ensure decimal precision
    
    if (newTotalPrice > 0) {
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    
    if (newTotalPrice >= 200) {
        document.getElementById('apply-button').removeAttribute('disabled');
    }
    
    applyCouponCode(newTotalField, newTotalPrice);
}

function applyCouponCode(newTotalField, newTotalPrice) {
    const couponCode = document.getElementById('coupon-code-field').value;
    const discountUI = document.getElementById('discount-field');
    const discountUIValue = parseFloat(discountUI.innerText);
    
    if (couponCode === 'SELL200') {
        const discountPrice = newTotalPrice * 0.2;
        discountUI.innerText = (discountUIValue + discountPrice).toFixed(2);
    }
}

// Event listeners for card interactions
for (let i = 1; i <= 6; i++) {
    const cardElement = document.getElementById(`card-${i}-full`);
    
    if (cardElement) {
        cardElement.addEventListener('click', function() {
            const cardTitle = document.getElementById(`card-${i}-title`).innerText;
            const cardPrice = parseFloat(document.getElementById(`card-${i}-price`).innerText);
            
            const cardTitleLi = document.createElement('li');
            cardTitleLi.innerText = cardTitle;
            
            const orderedListParent = document.getElementById('ordered-list-parent');
            orderedListParent.appendChild(cardTitleLi);
            
            updateTotalPrice(cardPrice);
        });
    }
}

// Apply coupon code button listener
document.getElementById('apply-button').addEventListener('click', function() {
    const totalField = parseFloat(document.getElementById('total-field').innerText);
    const totalPrice = parseFloat(document.getElementById('total-price-field').innerText);
    applyCouponCode(totalField, totalPrice);
});
