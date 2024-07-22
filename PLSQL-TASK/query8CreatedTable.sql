set serveroutput on;

-- Create the employees table
CREATE TABLE employees (
  employee_id INTEGER PRIMARY KEY,
  first_name VARCHAR(25),
  last_name VARCHAR(25),
  email VARCHAR(25),
  phone_number VARCHAR(15),
  hire_date DATE,
  job_id VARCHAR(25),
  salary INTEGER,
  commission_pct DECIMAL(5,2),
  manager_id INTEGER,
  department_id INTEGER
);

-- Insert values into the employees table
INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id) 
VALUES (1, 'Sanjay', 'G S', 'sanjay@gmail.com', '9360876543', TO_DATE('2023-01-15', 'YYYY-MM-DD'), 'CSE_PROG', 60000, 0.05, 101, 10);

INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id) 
VALUES (2, 'Ram', 'Prasanth', 'ram@gmail.com', '9076894534', TO_DATE('2022-02-20', 'YYYY-MM-DD'), 'DATA_ANALYST', 50000, 0.10, 102, 20);

INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id) 
VALUES (3, 'Sanjeev', 'Chandran', 'sanjeev@gmail.com', '8097563567', TO_DATE('2021-03-25', 'YYYY-MM-DD'), 'FINANCE_MANAGER', 70000, 0.15, 103, 30);

INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id) 
VALUES (4, 'Vimal', 'Raj', 'vimal@gmail.com', '9081235678', TO_DATE('2020-04-30', 'YYYY-MM-DD'), 'SALES_REP', 55000, 0.05, 104, 40);

-- PL/SQL block to display employee details
DECLARE
  -- Variables to hold employee details
  v_employee_id employees.employee_id%TYPE;
  v_first_name employees.first_name%TYPE;
  v_last_name employees.last_name%TYPE;
  v_email employees.email%TYPE;
  v_phone_number employees.phone_number%TYPE;
  v_hire_date employees.hire_date%TYPE;
  v_job_id employees.job_id%TYPE;
  v_salary employees.salary%TYPE;
  v_commission_pct employees.commission_pct%TYPE;
  v_manager_id employees.manager_id%TYPE;
  v_department_id employees.department_id%TYPE;
BEGIN
  -- Implicit cursor for fetching employee details
  FOR emp IN (SELECT employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id 
              FROM employees)
  LOOP
    -- Assign fetched values to variables
    v_employee_id := emp.employee_id;
    v_first_name := emp.first_name;
    v_last_name := emp.last_name;
    v_email := emp.email;
    v_phone_number := emp.phone_number;
    v_hire_date := emp.hire_date;
    v_job_id := emp.job_id;
    v_salary := emp.salary;
    v_commission_pct := emp.commission_pct;
    v_manager_id := emp.manager_id;
    v_department_id := emp.department_id;
    
    -- Display employee details
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || v_employee_id);
    DBMS_OUTPUT.PUT_LINE('First Name: ' || v_first_name);
    DBMS_OUTPUT.PUT_LINE('Last Name: ' || v_last_name);
    DBMS_OUTPUT.PUT_LINE('Email: ' || v_email);
    DBMS_OUTPUT.PUT_LINE('Phone Number: ' || v_phone_number);
    DBMS_OUTPUT.PUT_LINE('Hire Date: ' || TO_CHAR(v_hire_date, 'DD-MON-YYYY'));
    DBMS_OUTPUT.PUT_LINE('Job ID: ' || v_job_id);
    DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
    DBMS_OUTPUT.PUT_LINE('Commission Pct: ' || v_commission_pct);
    DBMS_OUTPUT.PUT_LINE('Manager ID: ' || v_manager_id);
    DBMS_OUTPUT.PUT_LINE('Department ID: ' || v_department_id);
    DBMS_OUTPUT.PUT_LINE('-----------------------------------');
  END LOOP;
END;
/
