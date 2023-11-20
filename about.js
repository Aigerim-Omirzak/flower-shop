// Wait for the HTML document to fully load before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    const monitoringData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Orders",
            data: [1500, 2500, 4000, 2000, 3000],
            borderColor: "darkred",
            fill: false,
        }],
    };

    const ctx = document.getElementById('monitoring-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: monitoringData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});