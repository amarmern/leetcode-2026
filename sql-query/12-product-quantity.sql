---Given a sales table with product_id, quantity, and price, 
--write a query to find the top 5 products by total revenue.

SELECT 
    product_id,
    SUM(quantity * price) AS total
FROM sales
GROUP BY product_id
ORDER BY total DESC
LIMIT 5;