// Function to handle card interactions
function handleCardInteraction(cardId) {
    const cardTitle = document.getElementById(`${cardId}-title`).innerText;
    const cardPrice = parseFloat(document.getElementById(`${cardId}-price`).innerText);

    const orderedListParent = document.getElementById('ordered-list-parent');
    const cardTitleLi = document.createElement('li');
    cardTitleLi.innerText = cardTitle;
    orderedListParent.appendChild(cardTitleLi);

    const totalPriceElement = document.getElementById('total-price-field');
    const totalPrice = parseFloat(totalPriceElement.innerText);
    const newTotalPrice = totalPrice + cardPrice;
    totalPriceElement.innerText = newTotalPrice;

    const totalFieldElement = document.getElementById('total-field');
    const totalField = parseFloat(totalFieldElement.innerText);
    const newTotalField = totalField + cardPrice;
    totalFieldElement.innerText = newTotalField;

    const makePurchaseButton = document.getElementById('make-purchase-button');
    const applyButton = document.getElementById('apply-button');
    
    if (newTotalPrice > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }

    if (newTotalPrice >= 200) {
        applyButton.removeAttribute('disabled');
    }
}

// Attach event listeners to card elements
for (let i = 1; i <= 6; i++) {
    document.getElementById(`card-${i}-full`).addEventListener('click', function() {
        handleCardInteraction(`card-${i}`);
    });
}

// Apply coupon code
document.getElementById('apply-button').addEventListener('click', function() {
    const discoutFieldElement = document.getElementById('discount-field');
    const discoutFieldString = discoutFieldElement.innerText;
    let discoutField = parseFloat(discoutFieldString);

    const couponCodeField = document.getElementById('coupon-code-field');
    const couponCode = couponCodeField.value;

    if (couponCode === 'SELL200') {
        const discountAmount = currentTotalPriceField * 0.2;
        discoutField += discountAmount;
        discoutFieldElement.innerText = discoutField;
    }
});
