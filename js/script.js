const triggers = document.querySelectorAll(".headerButtons, .pageLink")
const buttons = document.querySelectorAll(".headerButtons")
const panels = document.querySelectorAll(".panel")

function changePages(page) {
    if (!page) return

    for (const panel of panels) {
        panel.classList.toggle("hidden", panel.dataset.page !== page)
    }

    for (const button of buttons) {
        const isActive = button.dataset.page === page
        button.classList.toggle("active", isActive)
        button.setAttribute("aria-current", isActive ? "page" : "false")
    }
}

for (const trigger of triggers) {
    trigger.addEventListener("click", event => {
        event.preventDefault()
        changePages(trigger.dataset.page)
    })
}