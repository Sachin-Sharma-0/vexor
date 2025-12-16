document.addEventListener("DOMContentLoaded", () => {
  const includeHTML = (id, file) => {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(err => console.error(`Error loading ${file}`, err));
  };

  includeHTML("header", "partials/header.html");
  includeHTML("footer", "partials/footer.html");
});
