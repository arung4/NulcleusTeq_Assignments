// Extract employee ID from URL
const params = new URLSearchParams(window.location.search);
const employeeId = params.get('id');

document.addEventListener('DOMContentLoaded', fetchEmployeeData);

async function fetchEmployeeData() {
  if (!employeeId) {
    alert('Employee ID not found!');
    return;
  }

  try {
    const response = await fetch(`http://localhost:8080/api/employees/${employeeId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch employee data');
    }

    const employee = await response.json();
    document.getElementById('name').value = employee.name;
    document.getElementById('department').value = employee.department;
    document.getElementById('email').value = employee.email;
    document.getElementById('salary').value = employee.salary;
  } catch (error) {
    console.error('Error fetching employee data:', error);
    alert('Error fetching employee details.');
  }
}

// Form Submit for Update
document.getElementById('editEmployeeForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const updatedEmployee = {
    name: document.getElementById('name').value,
    department: document.getElementById('department').value,
    email: document.getElementById('email').value,
    salary: parseFloat(document.getElementById('salary').value),
  };

  try {
    const response = await fetch(`http://localhost:8080/api/employees/${employeeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployee),
    });

    if (response.ok) {
      alert('Employee updated successfully!');
      window.location.href = '../dashboard.html';
    } else {
      const errorText = await response.text();
      alert(`Error: ${errorText}`);
    }
  } catch (error) {
    console.error('Error updating employee:', error);
    alert('Failed to update employee.');
  }
});
