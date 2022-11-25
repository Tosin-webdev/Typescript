import axios from 'axios';
const url = 'https://dummyjson.com/products/1';

// 'https://dummyjson.com/products/1'
// 'https://jsonplaceholder.typicode.com/todos/1';

interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  rating: number;
}

axios.get(url).then((response) => {
  // console.log(response.data);
  const product = response.data as Product;
  const id = product.id;
  const title = product.title;
  const price = product.price;
  const brand = product.brand;
  const rating = product.rating;

  logTodo(id, title, price, brand, rating);
});

const logTodo = (id: number, title: string, price: number, brand: string, rating: number) => {
  console.log(
    `The product with ID: ${id} has a title of: ${title} is with price $${price} with a unique ${brand} and a rating of ${rating} `
  );
};
