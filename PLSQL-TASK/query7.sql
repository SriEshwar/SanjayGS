set serveroutput on;
CREATE TABLE orders (
    Order_id INT PRIMARY KEY,
    Customer_id INT,
    Status VARCHAR2(20),
    Salesman_id INT,
    Order_Date DATE
);
INSERT INTO orders (Order_id, Customer_id, Status, Salesman_id, Order_Date) VALUES (1, 101, 'Completed', 1, TO_DATE('2024-07-01', 'YYYY-MM-DD'));
INSERT INTO orders (Order_id, Customer_id, Status, Salesman_id, Order_Date) VALUES (2, 102, 'Completed', 2, TO_DATE('2024-07-05', 'YYYY-MM-DD'));
INSERT INTO orders (Order_id, Customer_id, Status, Salesman_id, Order_Date) VALUES (3, 103, 'Pending', 3, TO_DATE('2024-07-10', 'YYYY-MM-DD'));
INSERT INTO orders (Order_id, Customer_id, Status, Salesman_id, Order_Date) VALUES (4, 101, 'Completed', 2, TO_DATE('2024-07-15', 'YYYY-MM-DD'));


CREATE TABLE order_items (
    Order_id INT,
    Item_id INT,
    Product_id INT,
    Quantity INT,
    Unit_price DECIMAL(10, 2),
    PRIMARY KEY (Order_id, Item_id)
);

INSERT INTO order_items (Order_id, Item_id, Product_id, Quantity, Unit_price) VALUES (1, 1, 1001, 2, 50.00);
INSERT INTO order_items (Order_id, Item_id, Product_id, Quantity, Unit_price) VALUES (1, 2, 1002, 1, 150.00);
INSERT INTO order_items (Order_id, Item_id, Product_id, Quantity, Unit_price) VALUES (2, 1, 1001, 1, 50.00);
INSERT INTO order_items (Order_id, Item_id, Product_id, Quantity, Unit_price) VALUES (2, 2, 1003, 3, 200.00);
INSERT INTO order_items (Order_id, Item_id, Product_id, Quantity, Unit_price) VALUES (3, 1, 1004, 4, 25.00);
INSERT INTO order_items (Order_id, Item_id, Product_id, Quantity, Unit_price) VALUES (4, 1, 1002, 2, 150.00);



CREATE TABLE customers (
    Customer_id INT PRIMARY KEY,
    Credit_limit DECIMAL(10, 2)
);


INSERT INTO customers (Customer_id, Credit_limit) VALUES (101, 0.00);
INSERT INTO customers (Customer_id, Credit_limit) VALUES (102, 0.00);
INSERT INTO customers (Customer_id, Credit_limit) VALUES (103, 0.00);

-- Create the view for customer sales revenues
CREATE OR REPLACE VIEW customer_sales_revenues AS
SELECT
    o.Customer_id,
    SUM(oi.Quantity * oi.Unit_price) AS total_sales_revenues,
    SUM(oi.Quantity * oi.Unit_price) * 0.05 AS credit
FROM
    orders o
JOIN
    order_items oi ON o.Order_id = oi.Order_id
GROUP BY
    o.Customer_id;

-- PL/SQL block to reset and assign new credit limits
DECLARE
    CURSOR customer_cursor IS
        SELECT Customer_id, total_sales_revenues
        FROM customer_sales_revenues
        ORDER BY total_sales_revenues DESC;

    remaining_budget NUMBER := 1000000;
    customer_record customer_cursor%ROWTYPE;
    new_credit_limit NUMBER;

BEGIN
    -- Reset credit limits to zero
    UPDATE customers
    SET Credit_limit = 0;

    -- Open the cursor
    OPEN customer_cursor;

    -- Loop through each customer
    LOOP
        FETCH customer_cursor INTO customer_record;
        EXIT WHEN customer_cursor%NOTFOUND;

        -- Check if there is still remaining budget
        IF remaining_budget > 0 THEN
            -- Assign credit limit as 5% of total sales revenues or remaining budget, whichever is smaller
            IF (customer_record.total_sales_revenues * 0.05) < remaining_budget THEN
                new_credit_limit := customer_record.total_sales_revenues * 0.05;
                remaining_budget := remaining_budget - new_credit_limit;
            ELSE
                new_credit_limit := remaining_budget;
                remaining_budget := 0;
            END IF;

            UPDATE customers
            SET Credit_limit = new_credit_limit
            WHERE Customer_id = customer_record.Customer_id;

            DBMS_OUTPUT.PUT_LINE('Customer ID: ' || customer_record.Customer_id || ', New Credit Limit: ' || new_credit_limit);
        ELSE
            -- No more budget remaining, exit the loop
            EXIT;
        END IF;
    END LOOP;

    -- Close the cursor
    CLOSE customer_cursor;
END;
