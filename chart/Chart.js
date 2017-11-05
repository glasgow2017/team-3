      google.charts.load('current', {
        'packages': ['corechart', 'bar']
      });
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {

        var button = document.getElementById('change-chart');
        var chartDiv = document.getElementById('chart_div');
        var someObj = {"1" : ['Age', 'Male', 'Female'],
            "2" : ['0-9', 80, 23.3],
            "3" : ['10-14', 70, 50],
            "4" : ['20-24', 20, 14.3],
            "5" : ['30-39', 5, 0.9],
            "6" : ['40-49', 60, 13.1],
            "7" : ['50-59', 40, 13.1],
            "8" : ['60-69', 9, 13.1],
            "9" : ['70+', 8, 13.1]};

        var data = feedToGraph(someObj);

     /*   var data = google.visualization.arrayToDataTable([
          ['Age', 'Male', 'Female'],
          ['0-9', 80, 23.3],
          ['10-14', 70, 50],
          ['20-24', 20, 14.3],
          ['30-39', 5, 0.9],
          ['40-49', 60, 13.1],
          ['50-59', 40, 13.1],
          ['60-69', 9, 13.1],
          ['70+', 8, 13.1]
        ]);
*/
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
      }

      /**
       * Gets Json object from server to feed into graph
       */
      function receiveJsonFromServer() {
          var xmlhttp = new XMLHttpRequest();
          var url = "averageresponse.json";
          xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  var myObj = JSON.parse(this.responseText);
              }
          };
          xmlhttp.open("GET", url, true);
          xmlhttp.send();
      }

      //myObj structure: {"key" : ["age", "male", "female"]} <--- with multiple keys
      function feedToGraph(myObj) {
          var myData = [];
          myData.push(["Age", "Male", "Female"]);
          for (var property in myObj) {
              myData.push(property);
          }
          /*for(key in myObj) {
              if(myObj.hasOwnProperty(key)) {
                  myData.push(data[key]);
              }
          }*/
          alert("myData: " + myData);
          return myData;
      }

      /*//Attempts to add rows onto graph from object
      function objToGraph(obj) {
          var data = google.visualization.arrayToDataTable([
              ['Age', 'Male', 'Female'],
              [obj[Object.keys("1")[0]], 80, 23.3],
              ['10-14', 70, 50],
              ['20-24', 20, 14.3],
              ['30-39', 5, 0.9],
              ['40-49', 60, 13.1],
              ['50-59', 40, 13.1],
              ['60-69', 9, 13.1],
              ['70+', 8, 13.1]
          ]);
          Object.keys(obj).forEach(function (key) {

          }
          return data;
      }*/

