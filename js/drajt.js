function updateTotalPrice(cardPrice) {
    const totalPriceElement = document.getElementById('total-price-field');
    const totalFieldElement = document.getElementById('total-field');
   
    const totalPrice = parseFloat(totalPriceElement.innerText);
    const totalField = parseFloat(totalFieldElement.innerText);
   
    const newTotalPrice = totalPrice + cardPrice;
    const newTotalField = totalField + cardPrice;
   
    totalPriceElement.innerText = newTotalPrice;
    totalFieldElement.innerText = newTotalField;
   
    if (newTotalPrice > 0) {
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
   
    if (newTotalPrice >= 200) {
        document.getElementById('apply-button').removeAttribute('disabled');
    }
}


function applyCouponCode() {
    const couponCode = document.getElementById('coupon-code-field').value;
   
    if (couponCode === 'SELL200') {
        // Implement your discount logic here
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
    applyCouponCode();
});


