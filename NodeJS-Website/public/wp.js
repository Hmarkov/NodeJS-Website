$(document).ready(function () {
    $(".menu-toggle").click(function () {
        $("nav").toggleClass("active");
    });

    $("ul li").click(function () {
        $(this).toggleClass("active");
    })
    let myChart = document.getElementById('myChart').getContext('2d');
    let myChart1 = document.getElementById('myChart1').getContext('2d');

    let barChart = new Chart(myChart1, {
        type: 'bar',
        data: {
            labels: ['Power', 'Buildings', 'Industry', 'Surface transport', 'Total CO2'],
            datasets: [{
                label: 'Temperature unadjusted',
                data: [-10, 2.5, -1, -1.5, -2.5, -12, 4],
                backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
        }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
            }]
            }
        }
    });

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Open Sans';
    Chart.defaults.global.defaultFontSize = 17;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
        type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ["1990", "1992", "1994", "1996", "1998", "2000", "2002", "2004", "2006", "2008", "2010", "2012", "2014", "2016", "2018"],
            datasets: [{
                    label: 'UK (GDP)',
                    data: [
                    100,
                    98,
                    104,
                    110,
                    117,
                    124,
                    131,
                    142,
                    156,
                    155,
                    149,
                    151,
                    154,
                    160,
                    167
                            ],
                    //backgroundColor:'green',
                    borderWidth: 3,
                    borderColor: 'blue',
                        },

                {
                    label: 'UK Greenhouse',
                    data: [
                    100,
                    104,
                    95,
                    98,
                    94,
                    89,
                    87,
                    86,
                    85,
                    82,
                    77,
                    79,
                    74,
                    65,
                    60
                            ],
                    //backgroundColor:'green',
                    borderWidth: 3,
                    borderColor: 'red',
                        }
                      ]

        },
        options: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {
                padding: {
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
            tooltips: {
                enabled: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
        }]
            }
        }
    });

});
