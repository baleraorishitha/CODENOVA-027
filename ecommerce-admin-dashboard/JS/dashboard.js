// =====================================
// DASHBOARD.JS
// =====================================

// Dashboard statistics
const dashboardData = {
    revenue: 124500,
    orders: 1248,
    customers: 3842,
    products: 128
};


// =====================================
// UPDATE DASHBOARD STATISTICS
// =====================================

function updateDashboardStats() {

    const revenueElement =
        document.getElementById("totalRevenue");

    const ordersElement =
        document.getElementById("totalOrders");

    const customersElement =
        document.getElementById("totalCustomers");

    const productsElement =
        document.getElementById("totalProducts");


    if (revenueElement) {

        revenueElement.textContent =
            "₹" +
            dashboardData.revenue.toLocaleString();

    }


    if (ordersElement) {

        ordersElement.textContent =
            dashboardData.orders.toLocaleString();

    }


    if (customersElement) {

        customersElement.textContent =
            dashboardData.customers.toLocaleString();

    }


    if (productsElement) {

        productsElement.textContent =
            dashboardData.products.toLocaleString();

    }

}


// =====================================
// RECENT ORDERS
// =====================================

const recentOrders = [

    {
        id: "#ORD-1001",
        customer: "Rahul Sharma",
        product: "Laptop Pro 15",
        amount: 65000,
        status: "Delivered"
    },

    {
        id: "#ORD-1002",
        customer: "Priya Singh",
        product: "Wireless Headphones",
        amount: 2500,
        status: "Processing"
    },

    {
        id: "#ORD-1003",
        customer: "Arjun Kumar",
        product: "Smart Watch",
        amount: 5000,
        status: "Shipped"
    },

    {
        id: "#ORD-1004",
        customer: "Sneha Reddy",
        product: "Office Chair",
        amount: 8500,
        status: "Pending"
    }

];


// =====================================
// DISPLAY RECENT ORDERS
// =====================================

function displayRecentOrders() {

    const container =
        document.getElementById(
            "recentOrdersBody"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    recentOrders.forEach(function(order) {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                ${order.id}
            </td>

            <td>
                ${order.customer}
            </td>

            <td>
                ${order.product}
            </td>

            <td>
                ₹${order.amount.toLocaleString()}
            </td>

            <td>
                <span class="status ${order.status.toLowerCase()}">
                    ${order.status}
                </span>
            </td>

        `;


        container.appendChild(row);

    });

}


// =====================================
// INITIALIZE DASHBOARD
// =====================================

updateDashboardStats();

displayRecentOrders();