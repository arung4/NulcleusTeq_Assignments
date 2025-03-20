document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Construct the URL with query parameters
    const url = `http://localhost:8080/auth/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
      });
  
      if (response.ok) {
        alert('Login Successful!');
        window.location.href = '../dashboard.html'; // Redirect to Dashboard
      } else {
        const errorMessage = await response.text();
        document.getElementById('error').textContent = errorMessage;
      }
    } catch (error) {
      document.getElementById('error').textContent = 'An error occurred. Please try again later.';
      console.error('Error:', error);
    }
  });
  