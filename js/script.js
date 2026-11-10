const headerButtons = document.querySelectorAll(".headerButtons") // document is the root of everything, querySelectorAll checks everything class headerButtons
const panels = document.querySelectorAll(".panel")

function changePages(page) {
    for (const panel of panels)
        if (panel.dataset.page === page) {
            panel.classList.remove("hidden")
        }
        else {
            panel.classList.add("hidden")
        }
}

for (const button of headerButtons) { // for (for each thing in this next block) set button = to the first, then the next and so on of the buttons in headerButtons
    button.addEventListener("click", function() {
        console.log(button.dataset.page)
        changePages(button.dataset.page)
    });
}