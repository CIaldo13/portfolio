document.addEventListener('DOMContentLoaded', function() {
    // Add the toggle button to the HTML
    const searchSection = document.querySelector('.search-section');
    const toggleButton = document.createElement('button');
    toggleButton.className = 'search-toggle';
    toggleButton.textContent = 'Filters';
    document.body.appendChild(toggleButton);

    // Add toggle functionality
    toggleButton.addEventListener('click', function() {
        const searchContainer = document.querySelector('.search-container');
        searchContainer.classList.toggle('active');
        toggleButton.textContent = searchContainer.classList.contains('active') ? 'Close' : 'Filters';
    });
});

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const yearFilter = document.getElementById('yearFilter');
const workItems = document.querySelectorAll('.work-item');

function filterWorks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedYear = yearFilter.value;

    workItems.forEach(item => {
        const title = item.querySelector('.work-title').textContent.toLowerCase();
        const category = item.dataset.category;
        const year = item.dataset.year;

        const matchesSearch = title.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
        const matchesYear = selectedYear === 'all' || year === selectedYear;

        if (matchesSearch && matchesCategory && matchesYear) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

