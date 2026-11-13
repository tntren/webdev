const triggers = document.querySelectorAll(".headerButtons, .pageLink")
const buttons = document.querySelectorAll(".headerButtons")
const panels = document.querySelectorAll(".panel")
const projectLinks = document.querySelectorAll(".projectButtons")

// shows the panel whose data-page matches, hides the rest, and marks the matching nav button active
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

function showProject(id) {
    for (const project of document.querySelectorAll(".project")) {
        project.classList.toggle("hidden", project.id !== id)
    }
    for (const link of projectLinks) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + id)
    }
}

// one handler for both the nav buttons and in-page links like "me"
for (const trigger of triggers) {
    trigger.addEventListener("click", event => {
        event.preventDefault()
        changePages(trigger.dataset.page)
    })
}

for (const link of projectLinks) {
    link.addEventListener("click", event => {
        event.preventDefault()
        showProject(link.getAttribute("href").slice(1))
    })
}