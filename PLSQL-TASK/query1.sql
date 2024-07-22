-- Enable server output
SET SERVEROUTPUT ON;

-- Drop the table if it already exists (be cautious with this step)
DROP TABLE EMPLOYEES;

-- Create the EMPLOYEES table with a primary key constraint
CREATE TABLE EMPLOYEES (
    EMP_ID      NUMBER PRIMARY KEY,
    EMP_NAME    VARCHAR2(100),
    DEPARTMENT  VARCHAR2(50),
    SALARY      NUMBER
);

-- Create the insert_employee procedure
CREATE OR REPLACE PROCEDURE insert_employee (
    p_emp_id      IN EMPLOYEES.EMP_ID%TYPE,
    p_emp_name    IN EMPLOYEES.EMP_NAME%TYPE,
    p_department  IN EMPLOYEES.DEPARTMENT%TYPE,
    p_salary      IN EMPLOYEES.SALARY%TYPE
) AS
BEGIN
    INSERT INTO EMPLOYEES (EMP_ID, EMP_NAME, DEPARTMENT, SALARY)
    VALUES (p_emp_id, p_emp_name, p_department, p_salary);
    COMMIT;
END insert_employee;
/

-- Call the insert_employee procedure to add new records
BEGIN
    insert_employee(1, 'Sanjay', 'HR', 4500);
    insert_employee(2, 'Dharsan', 'Finance', 6000);
    insert_employee(3, 'Deva', 'IT', 9000);
    insert_employee(4, 'Ram', 'Marketing', 7000);
    insert_employee(5, 'Arul', 'Marketing', 12000);
    insert_employee(6, 'Zara', 'IT', 17000);
END;
/

-- Verify the inserted values
SELECT * FROM EMPLOYEES;
