document.addEventListener('DOMContentLoaded', fetchEmployees);


async function fetchEmployees(){
    try{
        const response = await fetch('http://localhost:8080/api/employees');
        if(!response.ok){
            throw new Error(`Failed to fetch employees: ${response.status}`);
        }
     const employees = await response.json();

     const tableBody = document.getElementById('employeeTableBody');
     tableBody.innerHTML = '';

     employees.forEach(employee =>{
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${employee.id} </td>
        <td>${employee.name} </td>
        <td>${employee.email} </td>
        <td>${employee.department} </td>
        <td>${employee.salary} </td>
        <td>
        <button class = "action-btn edit-btn" onClick={editEmployee(${employee.id})}>Edit</button>
        <button class = "action-btn delete-btn" onClick={deleteEmployee(${employee.id})}>Delete</button>
        </td>
        `;
        tableBody.appendChild(row);
     })
    } catch(error){
        console.error('Error fetching employees:', error);
        alert('Error fetching employees');
    }
}

// Edit employee

function editEmployee(employeeId){
    window.location.href = `editpage/edit-employee.html?id=${employeeId}`;
}

// Delete employee

async function deleteEmployee(employeeId){
    const confirmDelete= confirm('Are you sure you want to delete this employee');
    
    if(confirmDelete){
        try{
            const response = await fetch(`http://localhost:8080/api/employees/${employeeId}`,{
                method: 'DELETE',
            }); 
            if (response.ok) {
                alert("Employee deleted successfully!");
                fetchEmployees(); // Refresh employee list
              } else {
                const errorText = await response.text();
                alert(`Error: ${errorText}`);
              }
        }catch(error){
            console.error('Error deleting employee:', error);
            alert('Error deleting employee');
        }
    }
  
}

// logout button document.getElementById('logoutButton').addEventListener('click', function () {
    document.getElementById('logoutButton').addEventListener('click', function () {
        const confirmLogout = confirm('Are you sure you want to logout?');
        if (confirmLogout) {
          window.location.href = '../login/login.html';
        }
      });
      
