const filters = document.querySelectorAll('.filter-group input[type="checkbox"]');
const products = document.querySelectorAll('.product');

filters.forEach((filter) => {
    filter.addEventListener('change', (e) => {
        const checkedFilters = Array.from(filters).filter((filter) => filter.checked);
        const filteredProducts = products.filter((product) => {
            const marca = product.querySelector('.marca').textContent;
            const categoria = product.querySelector('.categoria').textContent;
            const genero = product.querySelector('.genero').textContent;
            const estado = product.querySelector('.estado').}
       ) }} )
    