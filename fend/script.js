async function fetchTickerData() {
    try {
        const response = await fetch('http://localhost:8000/api/v1/profile/all');
        const data = await response.json();
        const fetchData = data.data;
        const tickerDataElement = document.getElementById('tickerData');
        tickerDataElement.innerHTML = '';

        fetchData.forEach(ticker => {
        const tickerItem = document.createElement('div');
        tickerItem.classList.add('ticker-item');
        tickerItem.innerHTML = `
            <div class="itemDev"> <p>${ticker.name}</p></div>
            <div class="itemDev"> <p>${ticker.last}</p></div>
            <div class="itemDev"> <p>${ticker.buy}</p></div>
            <div class="itemDev"> <p>${ticker.sell}</p></div>
            <div class="itemDev"> <p>${ticker.volume}</p></div>
            <div class="itemDev"> <p>${ticker.base_unit}</p></div>
        `;
        tickerDataElement.appendChild(tickerItem);
        });
    } catch (error) {
        console.error('Error fetching ticker data:', error);
    }
}

async function updateTickerData() {
    try {
        const response = await fetch('http://localhost:8000/api/v1/profile/fetch');
        fetchTickerData();
    } catch (error) {
        console.error('Error fetching ticker data:', error);
    }
}