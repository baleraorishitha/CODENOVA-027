// ============================
// DARK / LIGHT MODE
// ============================

const themeToggle =
    document.getElementById("themeToggle");


// Check saved theme

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );

    themeToggle.textContent = "☀️";

}


// Toggle theme

themeToggle.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "dark-mode"
        );


        const isDark =
            document.body.classList.contains(
                "dark-mode"
            );


        if (isDark) {

            themeToggle.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

        else {

            themeToggle.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);