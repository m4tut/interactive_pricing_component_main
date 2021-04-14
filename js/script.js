const switchElem = document.querySelector('.switch');
const checkedElem = document.getElementById('checked');
const sliderElem = document.querySelector('.slider');
const pageviewsQuantityElem = document.querySelector('.pageviews_quantity');
const priceQuantityElem = document.querySelector('.price_quantity');

let discount = 1;
let price = 4;
let percent = 25;

const contentMain = (pageviews, price, percent) => {
    pageviewsQuantityElem.textContent = pageviews;
    priceQuantityElem.textContent = '$' + price + '.00';
    sliderElem.style.background = `linear-gradient(90deg, var(--softCyan) ${percent}%, var(--lightGrayishBlue) ${percent}%)`;
};

const dataReplacement = () => {
    let value = sliderElem.value;
    let localPrice = (Number(value) + Number(2)) * price * discount;
    let localPercent = value * percent;
    switch (value) {
        case '0':
            contentMain('10k', localPrice, localPercent);
            break;

        case '1':
            contentMain('50k', localPrice, localPercent);
            break;

        case '2':
            contentMain('100k', localPrice, localPercent);
            break;

        case '3':
            contentMain('500k', localPrice, localPercent);
            break;
        case '4':
            contentMain('1m', localPrice, localPercent);
            break;
    }
};

checkedElem.addEventListener('click', () => {
    if (checkedElem.checked) {
        discount = 0.75;
        switchElem.classList.add('switch_ative');
    } else {
        discount = 1;
        switchElem.classList.remove('switch_ative');
    }
    dataReplacement();
});

sliderElem.oninput = () => {
    dataReplacement();
};
