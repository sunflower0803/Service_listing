            // ApexCharts options and config
            window.addEventListener("load", function () {
              let options = {
                // add data series via arrays, learn more here: https://apexcharts.com/docs/series/
                series: [
                  {
                    name: "Last Month",
                    data: [1500, 1050, 1456,700, 1526, 1356, 1256],
                    color: "#52B69A",
                  },
                  {
                    name: "This month",
                    data: [643, 413, 765, 412,900, 1423, 1731],
                    color: "#0095FF",
                  },
                ],
                chart: {
                  height: "100%",
                  maxWidth: "100%",
                  type: "area",
                  fontFamily: "Inter, sans-serif",
                  dropShadow: {
                    enabled: false,
                  },
                  toolbar: {
                    show: false,
                  },
                },
                tooltip: {
                  enabled: true,
                  x: {
                    show: false,
                  },
                },
                legend: {
                  show: true,
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    opacityFrom: 0.55,
                    opacityTo: 0,
                    shade: "#1C64F2",
                    gradientToColors: ["#1C64F2"],
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  width: 6,
                },
                grid: {
                  show: false,
                  strokeDashArray: 4,
                  padding: {
                    left: 2,
                    right: 2,
                    top: -26,
                  },
                },
                xaxis: {
                  categories: [
                    "01 February",
                    "02 February",
                    "03 February",
                    "04 February",
                    "05 February",
                    "06 February",
                    "07 February",
                  ],
                  labels: {
                    show: false,
                  },
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                },
                yaxis: {
                  show: false,
                  labels: {
                    formatter: function (value) {
                      return "$" + value;
                    },
                  },
                },
              };

              if (
                document.getElementById("legend-chart") &&
                typeof ApexCharts !== "undefined"
              ) {
                const chart = new ApexCharts(
                  document.getElementById("legend-chart"),
                  options
                );
                chart.render();
              }
            });



          
            // ApexCharts options and config
            window.addEventListener("load", function() {
              let options = {
                chart: {
                  height: "100%",
                  maxWidth: "100%",
                  type: "line",
                  fontFamily: "Inter, sans-serif",
                  dropShadow: {
                    enabled: false,
                  },
                  toolbar: {
                    show: false,
                  },
                },
                tooltip: {
                  enabled: true,
                  x: {
                    show: false,
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  width: 6,
                },
                grid: {
                  show: true,
                  strokeDashArray: 4,
                  padding: {
                    left: 2,
                    right: 2,
                    top: -26
                  },
                },
                series: [
                  {
                    //red
                    name: "Clicks",
                    data: [7000, 6418, 7000, 6012, 5033, 6456],
                    color: "#EF4444",
                  },
                  {
                    // purple
                    name: "CPC",
                    data: [6700, 6300, 4500, 6700, 6100, 7000],
                    color: "#A700FF",
                  },
                  {
                    name: "New Business Owner",
                    data: [6300, 6500, 6200, 4000, 6112, 6300],
                    color: "#3CD856",
                  },

                ],
                legend: {
                  show: false
                },
                stroke: {
                  curve: 'smooth'
                },
                xaxis: {
                  categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
                  labels: {
                    show: true,
                    style: {
                      fontFamily: "Inter, sans-serif",
                      cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                    }
                  },
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                },
                yaxis: {
                  show: false,
                },
              }

              if (document.getElementById("line-chart") && typeof ApexCharts !== 'undefined') {
                const chart = new ApexCharts(document.getElementById("line-chart"), options);
                chart.render();
              }
            });
          
         