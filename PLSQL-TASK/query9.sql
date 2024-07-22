set serveroutput on;

DECLARE
  -- Define a cursor with a parameter for salary
  CURSOR emp_cursor (p_salary employees.salary%TYPE) IS
    SELECT first_name, last_name, salary
    FROM employees
    WHERE salary < p_salary;
    
  -- Variables to hold the employee details
  v_first_name employees.first_name%TYPE;
  v_last_name employees.last_name%TYPE;
  v_salary employees.salary%TYPE;
  
  -- Variable to hold the salary parameter value
  v_param_salary employees.salary%TYPE := 60000;  -- Example value, you can change it
BEGIN
  -- Open the cursor with the parameter value
  OPEN emp_cursor(v_param_salary);
  
  -- Fetch each employee record and display the details
  LOOP
    FETCH emp_cursor INTO v_first_name, v_last_name, v_salary;
    EXIT WHEN emp_cursor%NOTFOUND;
    
    DBMS_OUTPUT.PUT_LINE('First Name: ' || v_first_name);
    DBMS_OUTPUT.PUT_LINE('Last Name: ' || v_last_name);
    DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
    DBMS_OUTPUT.PUT_LINE('-----------------------------------');
  END LOOP;
  
  -- Close the cursor
  CLOSE emp_cursor;
END;
/
