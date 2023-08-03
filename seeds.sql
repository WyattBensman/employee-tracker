INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Human Resources"),

INSERT INTO role (title, salary, department_id)
VALUES
  ("Sales Associate", 45000, 1),
  ("Sales Manager", 65000, 1),
  ("Software Engineer", 75000, 2),
  ("Senior Software Engineer", 95000, 2),
  ("Financial Analyst", 60000, 3),
  ("Lawyer", 80000, 4),
  ("HR Coordinator", 50000, 5),
  ("HR Manager", 70000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("John", "Doe", 1, NULL),
  ("Jane", "Smith", 2, 1),
  ("Michael", "Johnson", 3, NULL),
  ("Emily", "Williams", 4, 3),
  ("Robert", "Brown", 5, NULL),
  ("Sarah", "Davis", 6, NULL),
  ("James", "Miller", 7, 6),
  ("Laura", "Wilson", 8, 6);