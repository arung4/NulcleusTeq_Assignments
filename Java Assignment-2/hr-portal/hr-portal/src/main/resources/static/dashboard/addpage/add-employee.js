document.getElementById('addEmployeeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally
  
    const employeeData = {
      name: document.getElementById('name').value,
      department: document.getElementById('department').value,
      email: document.getElementById('email').value,
      salary: document.getElementById('salary').value,
    };
  
    fetch('http://localhost:8080/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add employee');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('message').innerText = 'Employee added successfully!';
      console.log('Employee added:', data);
      window.location.href= '../dashboard.html';
      // Clear form fields
      document.getElementById('addEmployeeForm').reset();
    })
    .catch(error => {
      document.getElementById('message').innerText = 'Error adding employee.';
      console.error('Error:', error);
    });
  });
  