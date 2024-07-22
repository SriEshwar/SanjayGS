-- Enable server output
SET SERVEROUTPUT ON;

-- Create the procedure (make sure it's already created and compiled without errors)
CREATE OR REPLACE PROCEDURE update_salary (
    p_emp_id      IN EMPLOYEES.EMP_ID%TYPE
) AS
    v_current_salary EMPLOYEES.SALARY%TYPE;
BEGIN
    SELECT SALARY INTO v_current_salary
    FROM EMPLOYEES
    WHERE EMP_ID = p_emp_id;
    
    IF v_current_salary < 5000 THEN
        UPDATE EMPLOYEES
        SET SALARY = v_current_salary * 1.10
        WHERE EMP_ID = p_emp_id;
    ELSIF v_current_salary BETWEEN 5000 AND 10000 THEN
        UPDATE EMPLOYEES
        SET SALARY = v_current_salary * 1.075
        WHERE EMP_ID = p_emp_id;
    END IF;

    DBMS_OUTPUT.PUT_LINE('Salary updated for EMP_ID: ' || p_emp_id);
    
    COMMIT;
END;
/

-- Call the procedure for a specific employee
BEGIN
    update_salary(1); -- Replace 1 with the actual EMP_ID you want to update
END;
/

-- Verify the updated salary
SELECT EMP_ID, EMP_NAME, DEPARTMENT, SALARY
FROM EMPLOYEES
WHERE EMP_ID = 1; -- Replace 1 with the same EMP_ID used in the procedure call
