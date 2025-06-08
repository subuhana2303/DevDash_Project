document.addEventListener("DOMContentLoaded", () => {
  loadWidgets();
});

function loadWidgets() {
  const dashboard = document.getElementById("dashboard");

  const widgets = ["todo", "weather", "github", "markdown", "clock", "quote"];
  widgets.forEach(widget => {
    const el = document.createElement("section");
    el.id = widget;
    el.className = "widget p-4 shadow-lg";
    el.innerHTML = `<h2 class="text-blue-400 text-xl mb-2">${widget.toUpperCase()}</h2><div id="${widget}-content">Loading...</div>`;
    dashboard.appendChild(el);

    import(`./widgets/${widget}.js`).then(module => {
      module.default(document.getElementById(`${widget}-content`));
    }).catch(err => {
      document.getElementById(`${widget}-content`).textContent = "Failed to load.";
    });
  });
}
