const btnHome = document.querySelector("#btnHome");
const btnProducts = document.querySelector("#btnProducts");

btnHome.addEventListener('click', () => {
    window.location.href = "/Boci/index.html";
});

btnProducts.addEventListener('click', () => {
    window.location.href = "/Boci/views/products.html";
});