var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCategoryInp = document.getElementById("productCategory");
var productImgInp = document.getElementById("productImg");
var productDescInp = document.getElementById("productDesc");
var addBtn = document.getElementById("add");
var updateBtn = document.getElementById("update");
var searchInp = document.getElementById("search");



if (localStorage.getItem("all") !== null) {
  allProduct = JSON.parse(localStorage.getItem("all"));
  display();
}
function addProduct() {
  var product = {
    name: productNameInp.value,
    price: +productPriceInp.value,
    category: productCategoryInp.value,
    img: `./img/${productImgInp.files[0]?.name}`,
    desc: productDescInp.value,
  };
  allProduct.push(product);
  localStorage.setItem("all", JSON.stringify(allProduct));
  display();
  clearInputs();
}

function clearInputs() {
  productNameInp.value = null;
  productPriceInp.value = null;
  productCategoryInp.value = null;
  productImgInp.value = null;
  productDescInp.value = null;
}

function display() {
  var cartoona = "";
  for (var i = 0; i < allProduct.length; i++) {
    cartoona += `       
       <tr>
            <td>${i + 1}</td>
            <td><img class="w-25" src="${allProduct[i].img}" alt="" /></td>
            <td>${allProduct[i].name}</td>
            <td>${allProduct[i].price}</td>
            <td>${allProduct[i].category}</td>
            <td>${allProduct[i].desc}</td>
            <td>
            <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
            </td>
            <td>
            <button class="btn btn-warning" onclick="setFormForUpdate(${i})">Update</button>
            </td>
        </tr>`;
  }
  document.getElementById("demo").innerHTML = cartoona;
}

function deleteProduct(index) {
  //allProduct
  //pop shift
  allProduct.splice(index, 1);
  display();
  localStorage.setItem("all", JSON.stringify(allProduct));
}

var indexSearch;
function search(searchTerm) {
  var cartoona = "";
  for (var i = 0; i < allProduct.length; i++) {
    if (
      allProduct[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      allProduct[i].category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      allProduct[i].desc.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      cartoona += `       
       <tr>
            <td>${i + 1}</td>
            <td><img class="w-25" src="${allProduct[i].img}" alt="" /></td>
            <td>${allProduct[i].name}</td>
            <td>${allProduct[i].price}</td>
            <td>${allProduct[i].category}</td>
            <td>${allProduct[i].desc}</td>
            <td>
            <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
            </td>
            <td>
            <button class="btn btn-warning" onclick="setFormForUpdate(${i})">Update</button>
            </td>
            
        </tr>`;
    }
  }
  document.getElementById("demo").innerHTML = cartoona;
}

function setFormForUpdate(index) {
  indexSearch = index;
  productNameInp.value = allProduct[index].name;
  productPriceInp.value = allProduct[index].price;
  productCategoryInp.value = allProduct[index].category;
 // productImgInp.value = allProduct[index].img;
  productDescInp.value = allProduct[index].desc;

  addBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
}

function updateProduct() {
  // show add button and hide update button
  addBtn.classList.remove("d-none");
  updateBtn.classList.add("d-none");

  // update product in array
  allProduct[indexSearch].name = productNameInp.value;
  allProduct[indexSearch].price = +productPriceInp.value;
  allProduct[indexSearch].category = productCategoryInp.value;
  allProduct[indexSearch].img = `./img/${productImgInp.files[0]?.name}`;
  allProduct[indexSearch].desc = productDescInp.value;

  // save updated array to local storage
  localStorage.setItem("all", JSON.stringify(allProduct));
  // show updated list
  display();
  // clear form
  clearInputs();
}
