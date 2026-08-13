// ============================
// ORDER ELEMENTS
// ============================

const orderSearch =
    document.getElementById("orderSearch");

const statusFilter =
    document.getElementById("statusFilter");

const dateFilter =
    document.getElementById("dateFilter");

const ordersTableBody =
    document.getElementById("ordersTableBody");


// ============================
// FILTER ORDERS
// ============================

function filterOrders() {

    const searchText =
        orderSearch.value.toLowerCase().trim();

    const selectedStatus =
        statusFilter.value;

    const selectedDate =
        dateFilter.value;


    const rows =
        ordersTableBody.querySelectorAll("tr");


    rows.forEach(function(row) {

        const orderText =
            row.textContent.toLowerCase();

        const orderStatus =
            row.dataset.status;

        const orderDate =
            new Date(row.dataset.date);


        // Search condition

        const matchesSearch =
            orderText.includes(searchText);


        // Status condition

        const matchesStatus =
            selectedStatus === "all" ||
            orderStatus === selectedStatus;


        // Date condition

        let matchesDate = true;


        if (selectedDate !== "all") {

            const today =
                new Date("2026-08-13");

            const difference =
                (today - orderDate) /
                (1000 * 60 * 60 * 24);


            if (selectedDate === "today") {

                matchesDate =
                    difference === 0;

            }


            else if (selectedDate === "week") {

                matchesDate =
                    difference >= 0 &&
                    difference <= 7;

            }


            else if (selectedDate === "month") {

                matchesDate =
                    difference >= 0 &&
                    difference <= 31;

            }

        }


        // Final result

        if (
            matchesSearch &&
            matchesStatus &&
            matchesDate
        ) {

            row.style.display = "";

        }

        else {

            row.style.display = "none";

        }

    });

}


// Search

orderSearch.addEventListener(
    "input",
    filterOrders
);


// Status filter

statusFilter.addEventListener(
    "change",
    filterOrders
);


// Date filter

dateFilter.addEventListener(
    "change",
    filterOrders
);



// ============================
// STATUS MODAL
// ============================

const statusModal =
    document.getElementById("statusModal");

const closeStatusModal =
    document.getElementById("closeStatusModal");

const cancelStatus =
    document.getElementById("cancelStatus");

const saveStatus =
    document.getElementById("saveStatus");

const selectedOrder =
    document.getElementById("selectedOrder");

const newStatus =
    document.getElementById("newStatus");


let currentOrderRow = null;


// Open status modal

document.querySelectorAll(".status-btn")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const orderId =
                    button.dataset.order;

                currentOrderRow =
                    button.closest("tr");

                selectedOrder.value =
                    "#" + orderId;

                newStatus.value =
                    currentOrderRow.dataset.status;

                statusModal.classList.add("show");

            }
        );

    });


// Close status modal

closeStatusModal.addEventListener(
    "click",
    function() {

        statusModal.classList.remove("show");

    }
);


cancelStatus.addEventListener(
    "click",
    function() {

        statusModal.classList.remove("show");

    }
);


// ============================
// SAVE NEW STATUS
// ============================

saveStatus.addEventListener(
    "click",
    function() {

        if (!currentOrderRow) {
            return;
        }


        const selectedStatus =
            newStatus.value;


        // Update data attribute

        currentOrderRow.dataset.status =
            selectedStatus;


        // Find status span

        const statusSpan =
            currentOrderRow.querySelector(".status");


        // Update text

        statusSpan.textContent =
            selectedStatus;


        // Remove old classes

        statusSpan.classList.remove(
            "delivered",
            "pending",
            "shipped",
            "processing",
            "cancelled"
        );


        // Add new class

        if (selectedStatus === "Delivered") {

            statusSpan.classList.add(
                "delivered"
            );

        }

        else if (selectedStatus === "Pending") {

            statusSpan.classList.add(
                "pending"
            );

        }

        else if (selectedStatus === "Shipped") {

            statusSpan.classList.add(
                "shipped"
            );

        }

        else if (selectedStatus === "Processing") {

            statusSpan.classList.add(
                "processing"
            );

        }

        else if (selectedStatus === "Cancelled") {

            statusSpan.classList.add(
                "cancelled"
            );

        }


        statusModal.classList.remove(
            "show"
        );


        alert(
            "Order status updated to " +
            selectedStatus
        );


        filterOrders();

    }
);



// ============================
// ORDER DETAILS
// ============================

const orderDetailsModal =
    document.getElementById(
        "orderDetailsModal"
    );

const closeDetailsModal =
    document.getElementById(
        "closeDetailsModal"
    );

const closeDetails =
    document.getElementById(
        "closeDetails"
    );

const orderDetails =
    document.getElementById(
        "orderDetails"
    );


// View order

document.querySelectorAll(".view-order-btn")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const row =
                    button.closest("tr");


                const cells =
                    row.children;


                const orderId =
                    cells[0].textContent.trim();

                const customer =
                    cells[1].textContent.trim();

                const date =
                    cells[2].textContent.trim();

                const items =
                    cells[3].textContent.trim();

                const amount =
                    cells[4].textContent.trim();

                const status =
                    cells[5].textContent.trim();


                orderDetails.innerHTML = `

                    <div class="order-detail-row">

                        <span>Order ID</span>

                        <strong>
                            ${orderId}
                        </strong>

                    </div>


                    <div class="order-detail-row">

                        <span>Customer</span>

                        <strong>
                            ${customer}
                        </strong>

                    </div>


                    <div class="order-detail-row">

                        <span>Date</span>

                        <strong>
                            ${date}
                        </strong>

                    </div>


                    <div class="order-detail-row">

                        <span>Items</span>

                        <strong>
                            ${items}
                        </strong>

                    </div>


                    <div class="order-detail-row">

                        <span>Amount</span>

                        <strong>
                            ${amount}
                        </strong>

                    </div>


                    <div class="order-detail-row">

                        <span>Status</span>

                        <strong>
                            ${status}
                        </strong>

                    </div>

                `;


                orderDetailsModal.classList.add(
                    "show"
                );

            }
        );

    });


// Close details

closeDetailsModal.addEventListener(
    "click",
    function() {

        orderDetailsModal.classList.remove(
            "show"
        );

    }
);


closeDetails.addEventListener(
    "click",
    function() {

        orderDetailsModal.classList.remove(
            "show"
        );

    }
);


// Close when clicking outside

orderDetailsModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            orderDetailsModal
        ) {

            orderDetailsModal.classList.remove(
                "show"
            );

        }

    }
);