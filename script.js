// Volunteer Form Validation

function validateForm() {

    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (firstName === "") {
        alert("Please enter your first name");
        return false;
    }

    if (lastName === "") {
        alert("Please enter your last name");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number");
        return false;
    }

    if (message === "") {
        alert("Please enter a message");
        return false;
    }

    alert("Thank you for volunteering with Sea Friendly!");
    return true;
}function showMessage() {
    alert("Together we can keep our beaches clean and protect marine life!");
}
function countCharacters() {

    let text = document.getElementById("message").value;

    document.getElementById("counter").innerHTML = text.length;
    emailjs.send("","template_rowecxc");
}
emailjs.send("","template_rowecxc");