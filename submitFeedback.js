function submitFeedback () {
    var feedback = document.getElementById("feedback").value;

    if (feedback.trim() === "") {
        alert("Please enter your feedback before submitting.");
        return;
    }

    console.log("Feedback received: ", feedback);
    
    document.getElementById("feedback").value = "";

    alert("Thank you for your feedback!");
}
