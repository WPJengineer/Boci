const btnHome = document.querySelector("#btnHome");
const btnProducts = document.querySelector("#btnProducts");

btnHome.addEventListener('click', () => {
    window.location.href = "/index.html";
});

btnProducts.addEventListener('click', () => {
    window.location.href = "/views/products.html";
});