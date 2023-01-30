const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Iphone', 'Samsung', 'Mac Pro', 'Acer', 'Asus', 'Xiomi'],
        datasets: [{
            label: 'Orders Data',
            data: [210, 190, 45, 50, 28, 39],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
      responsive: true,
    }
});

const myCharts = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June' , 'July' , 'August' , 'September' ,
    'October' , 'November' , 'December'],
        datasets: [{
            label: 'Earning',
            data: [1200, 1950, 1420, 1430, 456, 780, 980, 560, 2000, 3140, 4503, 3900 ],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        responsive: true,
    }
});