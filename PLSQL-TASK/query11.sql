set serveroutput on;

CREATE OR REPLACE PROCEDURE get_employees_by_salary (p_salary IN employees.salary%TYPE) AS
BEGIN
  FOR emp IN (SELECT employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id 
              FROM employees
              WHERE salary = p_salary) 
  LOOP
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || emp.employee_id);
    DBMS_OUTPUT.PUT_LINE('First Name: ' || emp.first_name);
    DBMS_OUTPUT.PUT_LINE('Last Name: ' || emp.last_name);
    DBMS_OUTPUT.PUT_LINE('Email: ' || emp.email);
    DBMS_OUTPUT.PUT_LINE('Phone Number: ' || emp.phone_number);
    DBMS_OUTPUT.PUT_LINE('Hire Date: ' || TO_CHAR(emp.hire_date, 'DD-MON-YYYY'));
    DBMS_OUTPUT.PUT_LINE('Job ID: ' || emp.job_id);
    DBMS_OUTPUT.PUT_LINE('Salary: ' || emp.salary);
    DBMS_OUTPUT.PUT_LINE('Commission Pct: ' || emp.commission_pct);
    DBMS_OUTPUT.PUT_LINE('Manager ID: ' || emp.manager_id);
    DBMS_OUTPUT.PUT_LINE('Department ID: ' || emp.department_id);
    DBMS_OUTPUT.PUT_LINE('-----------------------------------');
  END LOOP;
END;
/