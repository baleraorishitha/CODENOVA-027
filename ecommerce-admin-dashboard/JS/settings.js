// ============================
// SETTINGS
// ============================

const saveSettings =
    document.getElementById("saveSettings");

const storeName =
    document.getElementById("storeName");

const emailNotifications =
    document.getElementById("emailNotifications");

const lowStockAlerts =
    document.getElementById("lowStockAlerts");


// Load saved settings

const savedStoreName =
    localStorage.getItem("storeName");

const savedEmailNotifications =
    localStorage.getItem(
        "emailNotifications"
    );

const savedLowStockAlerts =
    localStorage.getItem(
        "lowStockAlerts"
    );


if (savedStoreName) {

    storeName.value =
        savedStoreName;

}


if (savedEmailNotifications !== null) {

    emailNotifications.checked =
        savedEmailNotifications === "true";

}


if (savedLowStockAlerts !== null) {

    lowStockAlerts.checked =
        savedLowStockAlerts === "true";

}


// Save settings

saveSettings.addEventListener(
    "click",
    function() {

        localStorage.setItem(
            "storeName",
            storeName.value
        );

        localStorage.setItem(
            "emailNotifications",
            emailNotifications.checked
        );

        localStorage.setItem(
            "lowStockAlerts",
            lowStockAlerts.checked
        );


        alert(
            "Settings saved successfully!"
        );

    }
);