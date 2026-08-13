// =====================================
// ANALYTICS DATA
// =====================================

const analyticsData = {

    "7": {

        revenue: [
            3200,
            4500,
            3800,
            5200,
            6100,
            5700,
            7200
        ],

        orders: [
            45,
            52,
            48,
            61,
            70,
            66,
            82
        ],

        labels: [
            "Aug 7",
            "Aug 8",
            "Aug 9",
            "Aug 10",
            "Aug 11",
            "Aug 12",
            "Aug 13"
        ]

    },


    "30": {

        revenue: [
            4200,
            5100,
            4800,
            6200,
            5800,
            7100,
            6900,
            7500,
            8200,
            7800,
            8600,
            9200
        ],

        orders: [
            48,
            55,
            52,
            64,
            61,
            72,
            69,
            76,
            84,
            80,
            91,
            96
        ],

        labels: [
            "Aug 2",
            "Aug 4",
            "Aug 6",
            "Aug 8",
            "Aug 10",
            "Aug 12",
            "Aug 14",
            "Aug 16",
            "Aug 18",
            "Aug 20",
            "Aug 22",
            "Aug 24"
        ]

    },


    "90": {

        revenue: [
            24500,
            28300,
            31200,
            29800,
            35600,
            38200,
            41500,
            45200,
            47800,
            52100,
            55800,
            61200
        ],

        orders: [
            320,
            350,
            380,
            365,
            420,
            445,
            470,
            510,
            535,
            570,
            610,
            650
        ],

        labels: [
            "Jun",
            "Jun 7",
            "Jun 14",
            "Jun 21",
            "Jun 28",
            "Jul 5",
            "Jul 12",
            "Jul 19",
            "Jul 26",
            "Aug 2",
            "Aug 9",
            "Aug 13"
        ]

    },


    "365": {

        revenue: [
            68000,
            72000,
            76500,
            81000,
            84500,
            89000,
            94000,
            101000,
            108000,
            115000,
            121000,
            124500
        ],

        orders: [
            620,
            680,
            720,
            760,
            810,
            850,
            900,
            950,
            1010,
            1080,
            1160,
            1248
        ],

        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]

    }

};


// =====================================
// CHART VARIABLES
// =====================================

let revenueChart;
let ordersChart;
let categoryChart;


// =====================================
// REVENUE CHART
// =====================================

function createRevenueChart(data) {

    const ctx =
        document
            .getElementById("revenueChart")
            .getContext("2d");


    if (revenueChart) {

        revenueChart.destroy();

    }


    revenueChart = new Chart(ctx, {

        type: "line",

        data: {

            labels: data.labels,

            datasets: [

                {

                    label: "Revenue",

                    data: data.revenue,

                    borderColor: "#2563eb",

                    backgroundColor:
                        "rgba(37, 99, 235, 0.1)",

                    borderWidth: 3,

                    fill: true,

                    tension: 0.4,

                    pointRadius: 4

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: true
                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {

                        callback: function(value) {

                            return "₹" +
                                value.toLocaleString();

                        }

                    }

                }

            }

        }

    });

}



// =====================================
// ORDERS CHART
// =====================================

function createOrdersChart(data) {

    const ctx =
        document
            .getElementById("ordersChart")
            .getContext("2d");


    if (ordersChart) {

        ordersChart.destroy();

    }


    ordersChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: data.labels,

            datasets: [

                {

                    label: "Orders",

                    data: data.orders,

                    backgroundColor:
                        "#2563eb",

                    borderRadius: 5

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}



// =====================================
// CATEGORY CHART
// =====================================

function createCategoryChart() {

    const ctx =
        document
            .getElementById("categoryChart")
            .getContext("2d");


    categoryChart = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: [

                "Electronics",

                "Clothing",

                "Accessories",

                "Home & Living"

            ],

            datasets: [

                {

                    data: [
                        45,
                        25,
                        18,
                        12
                    ],

                    backgroundColor: [

                        "#2563eb",

                        "#16a34a",

                        "#f59e0b",

                        "#9333ea"

                    ]

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}



// =====================================
// UPDATE ANALYTICS
// =====================================

function updateAnalytics(period) {

    const data =
        analyticsData[period];


    if (!data) {

        return;

    }


    createRevenueChart(data);

    createOrdersChart(data);


    // Update summary values

    const totalRevenue =
        data.revenue.reduce(
            (sum, value) => sum + value,
            0
        );


    const totalOrders =
        data.orders.reduce(
            (sum, value) => sum + value,
            0
        );


    document.getElementById(
        "analyticsRevenue"
    ).textContent =
        "₹" +
        totalRevenue.toLocaleString();


    document.getElementById(
        "analyticsOrders"
    ).textContent =
        totalOrders.toLocaleString();

}



// =====================================
// DATE RANGE CHANGE
// =====================================

const analyticsPeriod =
    document.getElementById(
        "analyticsPeriod"
    );


analyticsPeriod.addEventListener(
    "change",
    function() {

        updateAnalytics(
            analyticsPeriod.value
        );

    }
);



// =====================================
// INITIALIZE
// =====================================

updateAnalytics("30");

createCategoryChart();