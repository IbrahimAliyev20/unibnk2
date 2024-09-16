
document.addEventListener('DOMContentLoaded', () => {
    const secimler = document.querySelectorAll('.secim');


    secimler.forEach((secilen) => {
        secilen.addEventListener('click', (event) => {
            event.preventDefault();


            secimler.forEach(el => el.classList.remove('active'));
            secilen.classList.add('active');

            const hsb = secilen.getAttribute('data-hsb');

            yenile(hsb);
        });
    });
});

function yenile(hsb) {
    const deyerler = {
        nagd: {
            usd: ['1.6975', '1.7025'],
            eur: ['1.8621', '1.911'],
            rub: ['0.0159', '0.202'],
            gbp: ['2.2028', '2.2799']
        },
        nagdsiz: {
            usd: ['1.6900', '1.7025'],
            eur: ['1.8583', '1.9168'],
            rub: ['0.0164', '0.0204'],
            gbp: ['2.2028', '2.2698']
        },
        kart: {
            usd: ['1.6950', '1.7150'],
            eur: ['1.8600', '1.9100'],
            rub: ['0.0185', '0.0193'],
            gbp: ['2.2100', '2.2542']
        }
    };

    const yenileri = deyerler[hsb];

    document.querySelector('.usd .al').textContent = yenileri.usd[0];
    document.querySelector('.usd .sat').textContent = yenileri.usd[1];

    document.querySelector('.eur .al').textContent = yenileri.eur[0];
    document.querySelector('.eur .sat').textContent = yenileri.eur[1];

    document.querySelector('.rub .al').textContent = yenileri.rub[0];
    document.querySelector('.rub .sat').textContent = yenileri.rub[1];

    document.querySelector('.gbp .al').textContent = yenileri.gbp[0];
    document.querySelector('.gbp .sat').textContent = yenileri.gbp[1];
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownButton = dropdown.querySelector('.dropdown-button');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');


    dropdownButton.addEventListener('click', function () {
        const isVisible = dropdownContent.style.display === 'block';

        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });


    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {

            const selectedText = item.innerHTML;
            dropdownButton.innerHTML = selectedText;


            dropdownContent.style.display = 'none';
        });
    });
});


window.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const rates = {
        'USD': 1.6975,
        'EUR': 1.8621,
        'RUB': 0.0159,
        'GBP': 2.2028,
        'AZN': 1,
    };

    const input1 = document.getElementById('inp1');
    const input2 = document.getElementById('inp2');
    const dropdown1 = document.querySelectorAll('.inp1 .dropdown-item a');
    const dropdown2 = document.querySelectorAll('.inp2 .dropdown-item a');

    let currency1 = 'USD';
    let currency2 = 'AZN';


    function updateCurrency(dropdown, input, isFirst) {
        dropdown.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (isFirst) {
                    currency1 = item.getAttribute('data-currency');
                    document.querySelector('.inp1 .dropdown-button').textContent = currency1;
                } else {
                    currency2 = item.getAttribute('data-currency');
                    document.querySelector('.inp2 .dropdown-button').textContent = currency2;
                }
                calculate();
            });
        });
    }


    function calculate() {
        const amount = parseFloat(input1.value);
        const rate1 = rates[currency1];
        const rate2 = rates[currency2];
        if (!isNaN(amount) && rate1 && rate2) {
            const result = (amount * rate1) / rate2;
            input2.value = result.toFixed(2);
        }
    }


    input1.addEventListener('input', calculate);


    updateCurrency(dropdown1, input1, true);
    updateCurrency(dropdown2, input2, false);
});

