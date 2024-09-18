document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = this[0].value;
    const email = this[1].value;

    alert(`Thank you for subscribing, ${name}!`);

    // Clear the form
    this.reset();
});