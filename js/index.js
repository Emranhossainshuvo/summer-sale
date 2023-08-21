// card one interaction

document.getElementById('card-one-full').addEventListener('click', function () {
    const cardOneTitleCode = document.getElementById('card-one-title');
    const cardOneTitle = cardOneTitleCode.innerText;
    const cardOneTitleLi = document.createElement('li');
    cardOneTitleLi.innerText = cardOneTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardOneTitleLi);
    const cardOnePriceElement = document.getElementById('card-one-price');
    const cardOnePriceString = cardOnePriceElement.innerText;
    const cardOnePrice = parseFloat(cardOnePriceString);
    const totalPriceElement = document.getElementById('total-price-field');
    const totalPriceString = totalPriceElement.innerText;
    const totalPriceField = parseFloat(totalPriceString);
    const currentTotalPriceField = cardOnePrice + totalPriceField;
    totalPriceElement.innerText = currentTotalPriceField;
    const totalFieldElement = document.getElementById('total-field');
    const totalFieldString = totalFieldElement.innerText;
    const totalField = parseFloat(totalFieldString);
    const currentTotalField = totalField + cardOnePrice;
    totalFieldElement.innerText = currentTotalField;
    if (currentTotalPriceField > 0) {
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if (currentTotalPriceField >= 200) {
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// card two interaction

document.getElementById('card-two-full').addEventListener('click', function () {
    const cardTwoTitleCode = document.getElementById('card-two-title');
    const cardTwoTitle = cardTwoTitleCode.innerText;
    const cardTwoTitleLi = document.createElement('li');
    cardTwoTitleLi.innerText = cardTwoTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardTwoTitleLi);
    const cardTwoPriceElement = document.getElementById('card-two-price');
    const cardTwoPriceString = cardTwoPriceElement.innerText;
    const cardTwoPrice = parseFloat(cardTwoPriceString);
    const totalPriceElement = document.getElementById('total-price-field');
    const totalPriceString = totalPriceElement.innerText;
    const totalPriceField = parseFloat(totalPriceString);
    const currentTotalPriceField = cardTwoPrice + totalPriceField;
    totalPriceElement.innerText = currentTotalPriceField;
    const totalFieldElement = document.getElementById('total-field');
    const totalFieldString = totalFieldElement.innerText;
    const totalField = parseFloat(totalFieldString);
    const currentTotalField = totalField + cardTwoPrice;
    totalFieldElement.innerText = currentTotalField;
    if (currentTotalPriceField > 0) {
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if (currentTotalPriceField >= 200) {
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// card three interaction

document.getElementById('card-three-full').addEventListener('click', function () {
    const cardThreeTitleCode = document.getElementById('card-three-title');
    const cardThreeTitle = cardThreeTitleCode.innerText;
    const cardThreeTitleLi = document.createElement('li');
    cardThreeTitleLi.innerText = cardThreeTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardThreeTitleLi);
    const cardThreePriceElement = document.getElementById('card-three-price');
    const cardThreePriceString = cardThreePriceElement.innerText;
    const cardThreePrice = parseFloat(cardThreePriceString);
    const totalPriceElement = document.getElementById('total-price-field');
    const totalPriceString = totalPriceElement.innerText;
    const totalPriceField = parseFloat(totalPriceString);
    const currentTotalPriceField = cardThreePrice + totalPriceField;
    totalPriceElement.innerText = currentTotalPriceField;
    const totalFieldElement = document.getElementById('total-field');
    const totalFieldString = totalFieldElement.innerText;
    const totalField = parseFloat(totalFieldString);
    const currentTotalField = totalField + cardThreePrice;
    totalFieldElement.innerText = currentTotalField;
    if (currentTotalPriceField > 0) {
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if (currentTotalPriceField >= 200) {
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// card four interaction

document.getElementById('card-four-full').addEventListener('click', function () {
    const cardFourTitleCode = document.getElementById('card-four-title');
    const cardFourTitle = cardFourTitleCode.innerText;
    const cardFourTitleLi = document.createElement('li');
    cardFourTitleLi.innerText = cardFourTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardFourTitleLi);
    const cardFourPriceElement = document.getElementById('card-four-price');
    const cardFourPriceString = cardFourPriceElement.innerText;
    const cardFourPrice = parseFloat(cardFourPriceString);
    const totalPriceElement = document.getElementById('total-price-field');
    const totalPriceString = totalPriceElement.innerText;
    const totalPriceField = parseFloat(totalPriceString);
    const currentTotalPriceField = cardFourPrice + totalPriceField;
    totalPriceElement.innerText = currentTotalPriceField;
    const totalFieldElement = document.getElementById('total-field');
    const totalFieldString = totalFieldElement.innerText;
    const totalField = parseFloat(totalFieldString);
    const currentTotalField = totalField + cardFourPrice;
    totalFieldElement.innerText = currentTotalField;
    if (currentTotalPriceField > 0) {
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if (currentTotalPriceField >= 200) {
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// card five interaction

document.getElementById('card-five-full').addEventListener('click', function () {
    const cardFiveTitleCode = document.getElementById('card-five-title');
    const cardFiveTitle = cardFiveTitleCode.innerText;
    const cardFiveTitleLi = document.createElement('li');
    cardFiveTitleLi.innerText = cardFiveTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardFiveTitleLi);
    const cardFivePriceElement = document.getElementById('card-five-price');
    const cardFivePriceString = cardFivePriceElement.innerText;
    const cardFivePrice = parseFloat(cardFivePriceString);
    const totalPriceElement = document.getElementById('total-price-field');
    const totalPriceString = totalPriceElement.innerText;
    const totalPriceField = parseFloat(totalPriceString);
    const currentTotalPriceField = cardFivePrice + totalPriceField;
    totalPriceElement.innerText = currentTotalPriceField;
    const totalFieldElement = document.getElementById('total-field');
    const totalFieldString = totalFieldElement.innerText;
    const totalField = parseFloat(totalFieldString);
    const currentTotalField = totalField + cardFivePrice;
    totalFieldElement.innerText = currentTotalField;
    if (currentTotalPriceField > 0) {
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if (currentTotalPriceField >= 200) {
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// card six interaction

document.getElementById('card-six-full').addEventListener('click', function () {
    const cardSixTitleCode = document.getElementById('card-six-title');
    const cardSixTitle = cardSixTitleCode.innerText;
    const cardSixTitleLi = document.createElement('li');
    cardSixTitleLi.innerText = cardSixTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardSixTitleLi);
    const cardSixPriceElement = document.getElementById('card-six-price');
    const cardSixPriceString = cardSixPriceElement.innerText;
    const cardSixPrice = parseFloat(cardSixPriceString);
    const totalPriceElement = document.getElementById('total-price-field');
    const totalPriceString = totalPriceElement.innerText;
    const totalPriceField = parseFloat(totalPriceString);
    const currentTotalPriceField = cardSixPrice + totalPriceField;
    totalPriceElement.innerText = currentTotalPriceField;
    const totalFieldElement = document.getElementById('total-field');
    const totalFieldString = totalFieldElement.innerText;
    const totalField = parseFloat(totalFieldString);
    const currentTotalField = totalField + cardSixPrice;
    totalFieldElement.innerText = currentTotalField;
    if (currentTotalPriceField > 0) {
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if (currentTotalPriceField >= 200) {
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// discount related coding
const getTotalPrice = document.getElementById('total-price-field');
const getTotal = document.getElementById('total-field');
document.getElementById('apply-button').addEventListener('click', function () {
    const discountFieldElement = document.getElementById('discount-field');
    const discountFieldString = discountFieldElement.innerText;
    const discountField = parseFloat(discountFieldString);
    const totalPriceString = getTotalPrice.innerText;
    const getTotalPriceNumber = parseFloat(totalPriceString);
    const getTotalElement = getTotal.innerText;
    const getTotalNumber = parseFloat(getTotalElement);
    const couponCodeField = document.getElementById('coupon-code-field');
    const couponCode = couponCodeField.value;
    if (couponCode === 'SELL200') {
        const discountAmount = getTotalPriceNumber * 0.2;
        const updatedDiscount = discountField + discountAmount;
        const totalWithDiscount = getTotalNumber - updatedDiscount; 
        getTotal.innerText = totalWithDiscount.toFixed(2);
        discountFieldElement.innerText = updatedDiscount.toFixed(2); 
    } else {
        alert('Invalid coupon code');
    }
});



    