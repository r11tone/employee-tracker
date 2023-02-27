INSERT INTO department (name)
VALUES ("Finance"),
       ("Sales"),
       ("Software Engineering"),
       ("HR"),
       ("Quality Control");

INSERT INTO role (department_id, title, salary)
VALUES (1, "CFO", 500000),
       (1, "Accounting Manager", 200000),
       (2, "Sales Manager", 200000),
       (2, "Sales Lead", 120000),
       (3, "Engineering Manager", 200000),
       (3, "Software Lead", 120000),
       (4, "VP HR", 200000),
        (5, "QC Manager", 140000);

INSERT INTO employee (role_id, manager_id, first_name, last_name)
VALUES (1, NULL, "John", "Snow"),
       (2, 1, "Greg", "Smith"),
       (3, 1, "Jim", "Gold"),
       (4, 3, "Tony", "Soprano"),
       (5, 1, "Bob", "Ross"),
       (6, 5, "William", "Smith"),
       (7, 1, "Chucky", "Cheese"),
        (8, 1, "Tommy", "Legs");
