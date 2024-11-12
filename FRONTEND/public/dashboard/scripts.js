function toggleNotifications() {
    const panel = document.getElementById("notifications-panel");
    panel.style.display = panel.style.display === "none" || panel.style.display === "" ? "block" : "none";
}

// Optional: Close the notifications panel when clicking outside of it
document.addEventListener("click", function(event) {
    const panel = document.getElementById("notifications-panel");
    const settingsIcon = document.querySelector(".alert-icon img");
    if (panel.style.display === "block" && !panel.contains(event.target) && !settingsIcon.contains(event.target)) {
        panel.style.display = "none";
    }
});


// Initialize the "Active Threats" bar chart
const ctxThreats = document.getElementById('vulnerabilityChart').getContext('2d');
const activeThreatsChart = new Chart(ctxThreats, {
    type: 'bar', // Bar chart for Active Threats
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Active Threats',
            data: [10000, 50000, 60000, 70000, 50000, 60000, 70000, 80000, 75000, 90000, 85000, 95000],
            backgroundColor: '#FF0000',
            borderColor: '#FF0000',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#FFFFFF',
                    callback: function(value) { return `$${value / 1000}k`; }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            },
            x: {
                ticks: {
                    color: '#FFFFFF',         // Set color for x-axis labels
                    font: { size: 14 },       // Increase font size for better visibility
                    padding: 10
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Initialize the "Monthly Leaks" line chart
const ctxLeaks = document.getElementById('leaksChart').getContext('2d');
const monthlyLeaksChart = new Chart(ctxLeaks, {
    type: 'line', // Line chart for Monthly Leaks
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Monthly Leaks',
            data: [15000, 20000, 30000, 25000, 27000, 32000, 28000, 31000, 29000, 34000, 33000, 36000],
            borderColor: '#FF4500',
            backgroundColor: 'rgba(255, 69, 0, 0.2)',
            borderWidth: 2,
            fill: true,
            pointBackgroundColor: '#FF4500',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#FFFFFF',
                    callback: function(value) { return `$${value / 1000}k`; }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            },
            x: {
                ticks: {
                    color: '#FFFFFF',         // Set color for x-axis labels
                    font: { size: 14 },       // Increase font size for better visibility
                    padding: 10
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
