
set serveroutput on;
-- Create the trigger

CREATE OR REPLACE TRIGGER check_duplicate_email
BEFORE INSERT OR UPDATE ON employees
FOR EACH ROW
DECLARE
  v_count INTEGER;
BEGIN
  -- Check for duplicate email in the table
  SELECT COUNT(*)
  INTO v_count
  FROM employees
  WHERE email = :NEW.email
  AND employee_id != :NEW.employee_id;  -- Exclude the current row being updated
  
  -- If a duplicate is found, raise an exception
  IF v_count > 0 THEN
    RAISE_APPLICATION_ERROR(-20001, 'Duplicate email detected: ' || :NEW.email);
  END IF;
END;
/
