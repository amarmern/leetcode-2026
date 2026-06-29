-- select last 10 rescords in original order

SELECT *
FROM (
    SELECT *
    FROM products
    ORDER BY product_id DESC
    LIMIT 10
) products
ORDER BY product_id ASC;

-- using mongodb
db.products.find()
  .sort({ _id: -1 })
  .limit(10)

SELECT *
FROM users
WHERE user_id BETWEEN 20 AND 30;

--in mongo db 
db.users.find({
  user_id: {
    $gte: 20,
    $lte: 30
  }
})