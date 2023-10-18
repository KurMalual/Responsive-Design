document.getElementById("contact-form").onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var query = document.getElementById("query").value;

    // You need to replace 'your-server-script-url' with the actual URL of your server-side script
    var serverURL = 'your-server-script-url';

    // Prepare the data to send to the server
    var data = {
        name: name,
        email: email,
        query: query
    };

    // Send the data to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", serverURL, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));

    // Optionally, you can handle the response from the server here

    // Reset the form
    document.getElementById("contact-form").reset();
};
