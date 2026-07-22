const XANO_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:wtEDiEuV'; 

async function handleLogin() {
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value;

    if (!emailInput || !passwordInput) {
        alert('Please fill out all fields.');
        return;
    }

    try {
        const response = await fetch(`${XANO_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailInput,
                password: passwordInput
            })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Login failed.');
        }

        localStorage.setItem('authToken', result.authToken);
        window.location.href = 'dashboard.html';

    } catch (error) {
        console.error('Login Error:', error);
        alert(error.message);
    }
}
