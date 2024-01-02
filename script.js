document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        alert('You have selected a $' + value + ' card. Complete any offer on the next page to get access to it.');
        // The line below should redirect to your CPA Grip offer URL
        // window.location.href = 'https://singingfiles.com/1184777'; // Replace with your actual URL
    });
});
