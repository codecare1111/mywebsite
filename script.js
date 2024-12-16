document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.getElementById("formContainer");
    const patientForm = document.getElementById("patientForm");
    const hospitalSelect = document.getElementById("hospital");
    const doctorGroup = document.getElementById("doctorGroup");
    const doctorSelect = document.getElementById("doctor");
    const conditionSelect = document.getElementById("condition");

    // Sample data for hospitals and doctors
    const hospitalData = {
        "City Hospital": ["Dr. Smith", "Dr. Taylor"],
        "Green Valley Medical": ["Dr. Wilson", "Dr. Brown"],
        "Central Clinic": ["Dr. Davis", "Dr. Clark"]
    };

    // Populate hospital dropdown
    Object.keys(hospitalData).forEach(hospital => {
        const option = document.createElement("option");
        option.value = hospital;
        option.textContent = hospital;
        hospitalSelect.appendChild(option);
    });

    // Show doctors when a hospital is selected
    hospitalSelect.addEventListener("change", () => {
        const selectedHospital = hospitalSelect.value;
        if (selectedHospital) {
            doctorGroup.style.display = "block";
            doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
            hospitalData[selectedHospital].forEach(doctor => {
                const option = document.createElement("option");
                option.value = doctor;
                option.textContent = doctor;
                doctorSelect.appendChild(option);
            });
        } else {
            doctorGroup.style.display = "none";
        }
    });

    // Change form background based on condition
    conditionSelect.addEventListener("change", () => {
        const condition = conditionSelect.value.toLowerCase();
        formContainer.className = `container ${condition}`;
    });

    // Handle form submission
    patientForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const patientImage = document.getElementById("patientImage").files[0];
        const patientName = document.getElementById("patientName").value;
        const patientAge = document.getElementById("patientAge").value;
        const gender = document.getElementById("gender").value;
        const condition = conditionSelect.value;
        const reason = document.getElementById("reason").value;
        const ambulanceIncharge = document.getElementById("ambulanceIncharge").value;
        const hospital = hospitalSelect.value;
        const doctor = doctorSelect.value;

        // Open a new page and display the details
        const newPage = window.open("", "_blank");
        newPage.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Patient Information</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <div class="new-page">
                    ${patientImage ? `<img src="${URL.createObjectURL(patientImage)}" class="patient-image" alt="Patient Image">` : ""}
                    <h1>Patient Information</h1>
                    <p><strong>Name:</strong> ${patientName}</p>
                    <p><strong>Age:</strong> ${patientAge}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Condition:</strong> ${condition}</p>
                    <p><strong>Reason:</strong> ${reason}</p>
                    <p><strong>Ambulance Incharge:</strong> ${ambulanceIncharge}</p>
                    <p><strong>Hospital:</strong> ${hospital}</p>
                    <p><strong>Doctor:</strong> ${doctor}</p>
                </div>
            </body>
            </html>
        `);
        newPage.document.close();
    });
});
