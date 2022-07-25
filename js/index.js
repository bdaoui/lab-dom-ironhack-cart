// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let total = price*quantity;

  product.querySelector(".subtotal span").innerHTML = total;

  return total;
  

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // console.log(document.querySelector('.product'));
  // updateSubtotal(singleProduct);
  // end of test

  
 // ITERATION 2

 let products =  document.querySelectorAll(".product");
  let sum = [];

 for(i=0; i<products.length; i++){
   sum.push(updateSubtotal(products[i]));
  }



  // ITERATION 3
  //... your code goes here
  // let total = products[i].querySelectorAll(".price span").innerHTML;
  // console.log(total);

  let total = sum.reduce( (acc, next) => {return acc+next},0 )
  document.querySelector("#total-value span").innerHTML = total;



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

