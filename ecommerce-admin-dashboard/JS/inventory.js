// =====================================
// INVENTORY ELEMENTS
// =====================================

const inventorySearch =
    document.getElementById("inventorySearch");

const inventoryCategory =
    document.getElementById("inventoryCategory");

const stockFilter =
    document.getElementById("stockFilter");

const inventoryTableBody =
    document.getElementById("inventoryTableBody");


// =====================================
// FILTER INVENTORY
// =====================================

function filterInventory() {

    const searchText =
        inventorySearch.value
            .toLowerCase()
            .trim();

    const selectedCategory =
        inventoryCategory.value;

    const selectedStock =
        stockFilter.value;


    const rows =
        inventoryTableBody.querySelectorAll("tr");


    rows.forEach(function(row) {

        const productText =
            row.textContent.toLowerCase();

        const category =
            row.dataset.category;

        const stock =
            Number(row.dataset.stock);

        const minimum =
            Number(row.dataset.min);


        // Search

        const matchesSearch =
            productText.includes(searchText);


        // Category

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        // Stock

        let matchesStock = true;


        if (selectedStock === "in") {

            matchesStock =
                stock > minimum;

        }

        else if (selectedStock === "low") {

            matchesStock =
                stock > 0 &&
                stock <= minimum;

        }

        else if (selectedStock === "out") {

            matchesStock =
                stock === 0;

        }


        // Final result

        if (
            matchesSearch &&
            matchesCategory &&
            matchesStock
        ) {

            row.style.display = "";

        }

        else {

            row.style.display = "none";

        }

    });

}


inventorySearch.addEventListener(
    "input",
    filterInventory
);


inventoryCategory.addEventListener(
    "change",
    filterInventory
);


stockFilter.addEventListener(
    "change",
    filterInventory
);



// =====================================
// UPDATE INVENTORY STATISTICS
// =====================================

function updateInventoryStats() {

    const rows =
        inventoryTableBody.querySelectorAll("tr");


    let totalStock = 0;

    let lowStock = 0;

    let outStock = 0;


    rows.forEach(function(row) {

        const stock =
            Number(row.dataset.stock);

        const minimum =
            Number(row.dataset.min);


        totalStock += stock;


        if (stock === 0) {

            outStock++;

        }

        else if (stock <= minimum) {

            lowStock++;

        }

    });


    document.getElementById(
        "totalStock"
    ).textContent =
        totalStock.toLocaleString();


    document.getElementById(
        "lowStockCount"
    ).textContent =
        lowStock;


    document.getElementById(
        "outStockCount"
    ).textContent =
        outStock;


    // Alert message

    const alertMessage =
        document.getElementById(
            "alertMessage"
        );


    if (outStock > 0) {

        alertMessage.textContent =
            outStock +
            " products are out of stock and " +
            lowStock +
            " products are running low.";

    }

    else if (lowStock > 0) {

        alertMessage.textContent =
            lowStock +
            " products are running low on stock.";

    }

    else {

        alertMessage.textContent =
            "All products have sufficient stock.";

    }

}


updateInventoryStats();



// =====================================
// RESTOCK PRODUCT
// =====================================

const restockButtons =
    document.querySelectorAll(
        ".restock-btn"
    );


restockButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const row =
                button.closest("tr");


            const productName =
                button.dataset.product;


            const currentStock =
                Number(row.dataset.stock);


            const minimum =
                Number(row.dataset.min);


            // Add 20 units

            const newStock =
                currentStock + 20;


            row.dataset.stock =
                newStock;


            // Update displayed stock

            const stockNumber =
                row.querySelector(
                    ".stock-number"
                );


            stockNumber.textContent =
                newStock;


            // Update status

            const status =
                row.querySelector(
                    ".inventory-status"
                );


            status.classList.remove(
                "in-stock",
                "low-stock",
                "out-stock"
            );


            if (newStock === 0) {

                status.textContent =
                    "Out of Stock";

                status.classList.add(
                    "out-stock"
                );

            }

            else if (newStock <= minimum) {

                status.textContent =
                    "Low Stock";

                status.classList.add(
                    "low-stock"
                );

            }

            else {

                status.textContent =
                    "In Stock";

                status.classList.add(
                    "in-stock"
                );

            }


            updateInventoryStats();

            filterInventory();


            alert(
                productName +
                " restocked successfully!\n\n" +
                "New Stock: " +
                newStock +
                " units"
            );

        }
    );

});