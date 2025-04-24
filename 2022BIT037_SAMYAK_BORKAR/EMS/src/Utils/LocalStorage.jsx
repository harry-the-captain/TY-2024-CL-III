localStorage.clear()
   const admin=[{
      "id": 1,
      "email": "admin@example.com",
      "password": "Admin@123"
    }]
    const employees = [
      {
        "id": 101,
        "firstName": "Samyakkkkk",
        "email": "Samyak@gmail.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Fix login issue",
            "taskDescription": "Resolve bug causing login failures",
            "taskDate": "2025-02-28",
            "category": "Development"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Unit test for API",
            "taskDescription": "Write unit tests for authentication API",
            "taskDate": "2025-02-26",
            "category": "Testing"
          }
        ],
        "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 102,
        "firstName": "Prathamesh",
        "email": "pratham@gmail.com",
        "password": "1234",
        "tasks": [
          {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Redesign homepage",
            "taskDescription": "Improve UI design of the homepage",
            "taskDate": "2025-02-25",
            "category": "UI/UX"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "API optimization",
            "taskDescription": "Improve response time for database queries",
            "taskDate": "2025-02-27",
            "category": "Development"
          }
        ],
        "taskNumbers": {
          "active": 1,
          "newTask": 2,
          "completed": 3,
          "failed": 4
        }
      },
      {
        "id": 103,
        "firstName": "Rohan",
        "email": "employee3@example.com",
        "password": "Emp3@pass",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Resolve checkout bug",
            "taskDescription": "Fix issue causing incorrect pricing",
            "taskDate": "2025-02-28",
            "category": "Bug Fixing"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Regression testing",
            "taskDescription": "Ensure previous bugs are not reappearing",
            "taskDate": "2025-02-24",
            "category": "Testing"
          }
        ],
        "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 104,
        "firstName": "Neha",
        "email": "employee4@example.com",
        "password": "Emp4@pass",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Write API docs",
            "taskDescription": "Complete documentation for API endpoints",
            "taskDate": "2025-02-28",
            "category": "Documentation"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Create dashboard UI",
            "taskDescription": "Design an interactive user dashboard",
            "taskDate": "2025-02-27",
            "category": "UI Design"
          }
        ],
        "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 105,
        "firstName": "Karthik",
        "email": "employee5@example.com",
        "password": "Emp5@pass",
        "tasks": [
          {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Set up CI/CD pipeline",
            "taskDescription": "Implement continuous deployment",
            "taskDate": "2025-02-26",
            "category": "DevOps"
          },
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Penetration testing",
            "taskDescription": "Test application security vulnerabilities",
            "taskDate": "2025-02-28",
            "category": "Security"
          }
        ],
        "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 0,
          "failed": 1
        }
      }
    ];
    

export const setLocalStorage = ()=>{
    localStorage.setItem('Employees', JSON.stringify(employees));
    localStorage.setItem('Admin', JSON.stringify(admin));
  }

export const getLocalStorage = ()=>{
  const employeess= JSON.parse(localStorage.getItem('Employees'));
  const adminnn = JSON.parse(localStorage.getItem('Admin'));
    return {employeess, adminnn};
}