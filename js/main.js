var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCategoryInp = document.getElementById("productCategory");
var productImgInp = document.getElementById("productImg");
var productDescInp = document.getElementById("productDesc");

var allProduct = [];

if (localStorage.getItem("all") != null) {
  allProduct = JSON.parse(localStorage.getItem("all"));
  display()
}
function addProduct() {
  var product = {
    name: productNameInp.value,
    price: +productPriceInp.value,
    category: productCategoryInp.value,
    img: "./...",
    desc: productDescInp.value,
  };
  localStorage.setItem("all", JSON.stringify(allProduct));
  allProduct.push(product);
  console.log(allProduct);
  display();
  clearInputs();
}

function clearInputs() {
  productNameInp.value = "";
  productPriceInp.value = "";
  productCategoryInp.value = "";
  productImgInp.value = "";
  productDescInp.value = "";
}

function display() {
  var cartoona = "";
  for (var i = 0; i < allProduct.length; i++) {
    cartoona += `       
       <tr>
            <td>${i + 1}</td>
            <td><img class="w-25" src="./img/IMG-20250208-WA0021.jpg" alt="" /></td>
            <td>${allProduct[i].name}</td>
            <td>${allProduct[i].price}</td>
            <td>${allProduct[i].category}</td>
            <td>${allProduct[i].desc}</td>
          </tr>`;
  }
  document.getElementById("demo").innerHTML = cartoona;
}
