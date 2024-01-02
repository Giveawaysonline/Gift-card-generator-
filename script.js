document.getElementById('getCardBtn').addEventListener('click', function() {
    document.getElementById('giftCardOptions').classList.remove('hidden');
});

var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    card.addEventListener('click', function() {
        // This is where you would integrate with CPA Grip's URL locker
        var value = this.getAttribute('data-value');
        alert('You selected the $' + value + ' card. Please complete the offer.');
        // Redirect to CPA Grip offer URL
        window.location.href = 'https://singingfiles.com/1184777';
    });
});
