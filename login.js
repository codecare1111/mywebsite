document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const doctorId = document.getElementById("doctorId").value;
    const errorMessage = document.getElementById("errorMessage");

    if (doctorId === "12345") {
        window.location.href = "doctors_portal.html";
    } else {
        errorMessage.style.display = "block";
    }
});
