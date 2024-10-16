function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('departmentError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        isValid = false;
    }
    if (phone.trim().length !== 10) {
        document.getElementById('phoneError').innerText = 'Phone number must be 10 digits.';
        isValid = false;
    }
    if (department === '') {
        document.getElementById('departmentError').innerText = 'Please select a department.';
        isValid = false;
    }
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        isValid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }
    if (isValid) {
        const resultTable = document.getElementById('resultTable');
        resultTable.innerHTML = `
            <div class="result-container">
                <h3>Registered Details</h3>
                <table>
                    <tr><th>Name</th><td>${name}</td></tr>
                    <tr><th>Email</th><td>${email}</td></tr>
                    <tr><th>Phone</th><td>${phone}</td></tr>
                    <tr><th>Department</th><td>${department}</td></tr>
                </table>
            </div>
        `;
    }
    return isValid;
}
