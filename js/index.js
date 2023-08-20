// card one interactin
document.getElementById('card-one-full').addEventListener('click', function(){
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
})