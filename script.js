document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        alert('You have selected the $' + value + ' card. Complete any offer on the next page to get the gift card.');
        // Redirect to CPA Grip offer URL
        // window.location.href = 'https://singingfiles.com/1082027'; // Replace with your actual URL here
    });
});
