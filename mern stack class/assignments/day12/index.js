const employees = [
    {
        id:1,
        name: "Anish Lama",
        department: "IT",
        salary: 50000,
        email: "anishlama@example.com"
    },
    {
        id:2,
        name: "Rahul Lama",
        department: "Health",
        salary: 40000,
        email: "rahullama@example.com"
    },
    {
        id:1,
        name: "Samir Lama",
        department: "Pilot",
        salary: 500000,
        email: "samirlama@example.com"
    },
    {
        id:1,
        name: "Amrit Lama",
        department: "Engineering",
        salary: 30000,
        email: "amritlama@example.com"
    },
    {
        id:1,
        name: "Anoj Lama",
        department: "IT",
        salary: 15000,
        email: "anojlama@example.com"
    },
]

console.log(employees);

const employeeNamesUppercase = employees.map(emp => emp.name.toUpperCase());
console.log("Employee Names in Uppercase:", employeeNamesUppercase);

const highSalary = employees.filter(emp => emp.salary > 40000);
console.log("Employees with salary > 40000:", highSalary);

const depEngineering = employees.filter(emp => emp.department === "Engineering");
console.log("Employees with engineering department:", depEngineering);

function findEmployeeByEmail(email){
    return employees.find(emp => emp.email === email)
}

console.log("find by email anoj:", findEmployeeByEmail("anojlama@example.com"));

const usernames = employees.map(e => ((typeof e === 'string' ? e : e?.email) || '').split('@')[0])
  .filter(Boolean);

console.log(usernames);

const countS = usernames.filter(name => name[0].toLowerCase() === "s").length;
console.log("Number of employees whose names start with 'S':", countS);
