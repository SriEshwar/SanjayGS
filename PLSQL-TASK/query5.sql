set serveroutput on;
CREATE OR REPLACE FUNCTION calculate_bonus (
    p_emp_id IN EMPLOYEES.EMP_ID%TYPE
) RETURN NUMBER IS
    v_salary EMPLOYEES.SALARY%TYPE;
    v_bonus  NUMBER;
BEGIN
    -- Fetch the salary of the employee
    SELECT SALARY INTO v_salary
    FROM EMPLOYEES
    WHERE EMP_ID = p_emp_id;
    
    -- Calculate the bonus based on the salary
    IF v_salary < 5000 THEN
        v_bonus := v_salary * 0.10;
    ELSIF v_salary BETWEEN 5000 AND 10000 THEN
        v_bonus := v_salary * 0.075;
    ELSE
        v_bonus := v_salary * 0.05;
    END IF;
    
    -- Return the calculated bonus
    RETURN v_bonus;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Employee not found');
        RETURN NULL;
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error occurred: ' || SQLERRM);
        RETURN NULL;
END calculate_bonus;
/

SET SERVEROUTPUT ON;

-- Call the calculate_bonus function for an employee with EMP_ID = 1
DECLARE
    v_bonus NUMBER;
BEGIN
    v_bonus := calculate_bonus(1);
    DBMS_OUTPUT.PUT_LINE('Bonus for employee 1: ' || v_bonus);
END;
/
