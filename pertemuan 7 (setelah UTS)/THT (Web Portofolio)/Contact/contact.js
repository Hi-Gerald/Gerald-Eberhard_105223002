document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah halaman reload

    // Ambil elemen input
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Ambil elemen error
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Pesan sukses
    const successMessage = document.getElementById("successMessage");

    // Reset error
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    messageInput.classList.remove("error-border");
    successMessage.style.display = "none";

    let isValid = true;

    // Validasi Nama
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Nama tidak boleh kosong!";
        nameInput.classList.add("error-border");
        isValid = false;
    }

    // Validasi Email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email tidak boleh kosong!";
        emailInput.classList.add("error-border");
        isValid = false;
    }

    // Validasi Pesan
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Pesan tidak boleh kosong!";
        messageInput.classList.add("error-border");
        isValid = false;
    }

    // Jika ada error, hentikan submit
    if (!isValid) return;

    // Jika valid → tampilkan pesan sukses
    successMessage.textContent = "Pesan berhasil dikirim!";
    successMessage.style.display = "block";

    // Reset form
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
});
