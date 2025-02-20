// Sample data for suggestions
const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew"
];

const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');

// Function to filter suggestions
const filterSuggestions = (query) => {
    return suggestions.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );
}

// Function to show suggestions
const showSuggestions = (filteredSuggestions) => {
    suggestionsList.innerHTML = '';

    filteredSuggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.addEventListener('click', () => {
            searchInput.value = suggestion;
            suggestionsList.style.display = 'none';
        });
        suggestionsList.appendChild(li);
    });

    if (filteredSuggestions.length > 0) {
        suggestionsList.style.display = 'block';
    } else {
        suggestionsList.style.display = 'none';
    }
}

// Event listener for input
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    if (query) {
        const filteredSuggestions = filterSuggestions(query);
        showSuggestions(filteredSuggestions);
    } else {
        suggestionsList.style.display = 'none';
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        suggestionsList.style.display = 'none';
    }
});
