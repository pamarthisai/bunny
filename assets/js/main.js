async function fetchData() {
    try {
        const response = await fetch('/path/to/your/api');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching and parsing JSON:', error);
    }
}

fetchData();
