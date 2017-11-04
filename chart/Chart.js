      google.charts.load('current', {
        'packages': ['corechart', 'bar']
      });
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {

        var button = document.getElementById('change-chart');
        var chartDiv = document.getElementById('chart_div');

        var data = google.visualization.arrayToDataTable([
          ['Gender', 'Male', 'Female'],
          ['0-9', 80, 23.3],
          ['10-14', 70, 50],
          ['20-24', 20, 14.3],
          ['30-39', 5, 0.9],
          ['40-49', 60, 13.1],
          ['50-59', 40, 13.1],
          ['60-69', 9, 13.1],
          ['70+', 8, 13.1]
        ]);

        var materialOptions = {
          width: 900,
          chart: {
            title: 'The percentage of correct answers in your country',
            subtitle: 'Based on gender and age range'
          },
          series: {
            0: {
              axis: 'male'
            }, // Bind series 0 to an axis named 'distance'.
          },
          axes: {
            y: {
              male: {
                label: 'Percentage'
              }, // Left y-axis.
            }
          }
        };

        var classicOptions = {
          width: 900,
          series: {
            0: {
              targetAxisIndex: 0
            },
            1: {
              targetAxisIndex: 1
            }
          },
          title: 'Nearby galaxies - distance on the left, brightness on the right',
          vAxes: {
            // Adds titles to each axis.
            0: {
              title: 'Percentage'
            },
          }
        };

        function drawMaterialChart() {
          var materialChart = new google.charts.Bar(chartDiv);
          materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
        }

        function drawClassicChart() {
          var classicChart = new google.visualization.ColumnChart(chartDiv);
          classicChart.draw(data, classicOptions);
        }

        drawMaterialChart();
      };
