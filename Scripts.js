document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for reaching out, " + document.getElementById('name').value + "!");
    document.getElementById('contact-form').reset();
});
