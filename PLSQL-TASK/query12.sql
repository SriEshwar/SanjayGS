-- Sample table creation and data insertion (assuming EMPLOYEE table structure)
CREATE TABLE employees (
  employee_id INTEGER PRIMARY KEY,
  first_name VARCHAR(25),
  last_name VARCHAR(25),
  email VARCHAR(25),
  phone_number VARCHAR(15),
  join_date DATE,
  job_id VARCHAR(25),
  salary NUMBER(8,2)
);

INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, join_date, job_id, salary)
VALUES (100, 'ABC', 'DEF', 'abef', '9876543210', TO_DATE('2020-06-06', 'YYYY-MM-DD'), 'AD_PR', 24000.00);

INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, join_date, job_id, salary)
VALUES (101, 'GHI', 'JKL', 'ghkl', '9876543211', TO_DATE('2021-02-08', 'YYYY-MM-DD'), 'AD_VP', 17000.00);

INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, join_date, job_id, salary)
VALUES (102, 'MNO', 'PQR', 'mnqr', '9876543212', TO_DATE('2016-05-14', 'YYYY-MM-DD'), 'AD_VP', 17000.00);

INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, join_date, job_id, salary)
VALUES (103, 'STU', 'VWX', 'stwx', '9876543213', TO_DATE('2019-06-24', 'YYYY-MM-DD'), 'IT_PROG', 9000.00);

-- PL/SQL block to increment salary of employee_id = 102 by 1000
DECLARE
  v_employee_id employees.employee_id%TYPE := 102;
  v_increment NUMBER := 1000;
BEGIN
  UPDATE employees
  SET salary = salary + v_increment
  WHERE employee_id = v_employee_id;
  
  COMMIT; -- Commit the transaction
  DBMS_OUTPUT.PUT_LINE('Salary updated successfully for Employee ID ' || v_employee_id);
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Employee ID ' || v_employee_id || ' not found.');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error updating salary for Employee ID ' || v_employee_id || ': ' || SQLERRM);
END;
/
