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
    const totalFieldElement = document.getElementById('total-field');
    const totalFieldString = totalFieldElement.innerText;
    const totalField = parseFloat(totalFieldString);
    const currentTotalField = totalField + cardOnePrice;
    totalFieldElement.innerText = currentTotalField;
    console.log(typeof currentTotalField);
    if(currentTotalPriceField > 0){
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if(currentTotalPriceField >= 200){
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// card two interaction

document.getElementById('card-two-full').addEventListener('click', function(){
    const cardOneTitleCode = document.getElementById('card-two-title');
    const cardOneTitle = cardOneTitleCode.innerText;
    const cardOneTitleLi = document.createElement('li');
    cardOneTitleLi.innerText = cardOneTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardOneTitleLi);
    const cardOnePriceElement = document.getElementById('card-two-price');
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
    if(currentTotalPriceField > 0){
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if(currentTotalPriceField >= 200){
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// card three interaction

document.getElementById('card-three-full').addEventListener('click', function(){
    const cardOneTitleCode = document.getElementById('card-three-title');
    const cardOneTitle = cardOneTitleCode.innerText;
    const cardOneTitleLi = document.createElement('li');
    cardOneTitleLi.innerText = cardOneTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardOneTitleLi);
    const cardOnePriceElement = document.getElementById('card-three-price');
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
    if(currentTotalPriceField > 0){
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if(currentTotalPriceField >= 200){
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// card four interaction

document.getElementById('card-four-full').addEventListener('click', function(){
    const cardOneTitleCode = document.getElementById('card-four-title');
    const cardOneTitle = cardOneTitleCode.innerText;
    const cardOneTitleLi = document.createElement('li');
    cardOneTitleLi.innerText = cardOneTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardOneTitleLi);
    const cardOnePriceElement = document.getElementById('card-four-price');
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
    if(currentTotalPriceField > 0){
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if(currentTotalPriceField >= 200){
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// card five interaction

document.getElementById('card-five-full').addEventListener('click', function(){
    const cardOneTitleCode = document.getElementById('card-five-title');
    const cardOneTitle = cardOneTitleCode.innerText;
    const cardOneTitleLi = document.createElement('li');
    cardOneTitleLi.innerText = cardOneTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardOneTitleLi);
    const cardOnePriceElement = document.getElementById('card-five-price');
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
    if(currentTotalPriceField > 0){
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if(currentTotalPriceField >= 200){
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})
// card six interaction

document.getElementById('card-six-full').addEventListener('click', function(){
    const cardOneTitleCode = document.getElementById('card-six-title');
    const cardOneTitle = cardOneTitleCode.innerText;
    const cardOneTitleLi = document.createElement('li');
    cardOneTitleLi.innerText = cardOneTitle;
    const orderedListParent = document.getElementById('ordered-list-parent');
    orderedListParent.appendChild(cardOneTitleLi);
    const cardOnePriceElement = document.getElementById('card-six-price');
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
    if(currentTotalPriceField > 0){
        document.getElementById('make-purchase-button').removeAttribute('disabled');
    }
    if(currentTotalPriceField >= 200){
        document.getElementById('apply-button').removeAttribute('disabled');
    }
})





    

