document.getElementById('accidentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    // Display the entered details
    console.log("Image: ", formData.get('image').name);
    console.log("Name: ", formData.get('name'));
    console.log("Age: ", formData.get('age'));
    console.log("Gender: ", formData.get('gender'));
    console.log("Condition: ", formData.get('condition'));
    console.log("Criticalness: ", formData.get('criticalness'));
    console.log("Reason for Accident: ", formData.get('reason'));
    console.log("Medicines: ", formData.get('medicines'));
    console.log("Hospital: ", formData.get('hospital'));
    console.log("In-charge Name: ", formData.get('incharge'));

    alert("Form submitted successfully!");
});
