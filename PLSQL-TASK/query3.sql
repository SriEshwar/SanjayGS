SET SERVEROUTPUT ON;

DECLARE
    -- Declare a cursor to select employee names
    CURSOR emp_cursor IS
        SELECT EMP_NAME FROM EMPLOYEES;

    -- Declare a variable to hold the fetched employee name
    v_emp_name EMPLOYEES.EMP_NAME%TYPE;
BEGIN
    -- Open the cursor
    OPEN emp_cursor;

    -- Loop through each row in the cursor
    LOOP
        -- Fetch the employee name into the variable
        FETCH emp_cursor INTO v_emp_name;
        
        -- Exit the loop if no more rows are found
        EXIT WHEN emp_cursor%NOTFOUND;

        -- Display the fetched employee name
        DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_emp_name);
    END LOOP;

    -- Close the cursor
    CLOSE emp_cursor;
END;
/
