// ============================
// PRODUCT MODAL
// ============================

const addProductBtn = document.getElementById("addProductBtn");
const productModal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const cancelModal = document.getElementById("cancelModal");
const productForm = document.getElementById("productForm");


// Open modal
addProductBtn.addEventListener("click", function () {

    productModal.classList.add("show");

});


// Close modal
closeModal.addEventListener("click", function () {

    productModal.classList.remove("show");

});


// Cancel
cancelModal.addEventListener("click", function () {

    productModal.classList.remove("show");

});


// Close when clicking outside modal
productModal.addEventListener("click", function (event) {

    if (event.target === productModal) {

        productModal.classList.remove("show");

    }

});


// ============================
// ADD PRODUCT
// ============================

productForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("productName").value;

    const category =
        document.getElementById("productCategory").value;

    const price =
        document.getElementById("productPrice").value;

    const stock =
        document.getElementById("productStock").value;


    alert(
        "Product Added Successfully!\n\n" +
        "Product: " + name +
        "\nCategory: " + category +
        "\nPrice: ₹" + price +
        "\nStock: " + stock
    );


    productForm.reset();

    productModal.classList.remove("show");

});


// ============================
// SEARCH PRODUCTS
// ============================

const searchInput =
    document.getElementById("productSearch");

const productRows =
    document.querySelectorAll("#productTableBody tr");


searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase();


    productRows.forEach(function (row) {

        const productName =
            row.textContent.toLowerCase();


        if (productName.includes(searchText)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});


// ============================
// CATEGORY FILTER
// ============================

const categoryFilter =
    document.getElementById("categoryFilter");


categoryFilter.addEventListener("change", function () {

    const selectedCategory =
        categoryFilter.value;


    productRows.forEach(function (row) {

        const category =
            row.children[1].textContent;


        if (
            selectedCategory === "all" ||
            category === selectedCategory
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});