 google.charts.load('current', {
        'packages': ['corechart', 'bar']
      });
      google.charts.setOnLoadCallback(drawStuff);

 var someObj = {
     "1": ['Age', 'Male', 'Female'],
     "2": ['0-9', 80, 23.3],
     "3": ['10-14', 70, 50],
     "4": ['20-24', 20, 14.3],
     "5": ['30-39', 5, 0.9],
     "6": ['40-49', 60, 13.1],
     "7": ['50-59', 40, 13.1],
     "8": ['60-69', 9, 13.1],
     "9": ['70+', 8, 13.1]
 };

      function drawStuff() {

        var button = document.getElementById('change-chart');
        var chartDiv = document.getElementById('chart_div');

          var data = feedToGraph(someObj);
        /*var data = google.visualization.arrayToDataTable([
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
            },
          },
          axes: {
            y: {
              male: {
                label: 'Percentage'
              },
            }
          }
        };



        function drawMaterialChart() {
          var materialChart = new google.charts.Bar(chartDiv);
          materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
        }

        drawMaterialChart();
      }

 /**
  * Gets Json object from server to feed into graph
  */
 function receiveJsonFromServer() {
     var xmlhttp = new XMLHttpRequest();
     var url = "userResults.json";
     xmlhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
             var myObj = JSON.parse(this.responseText);
         }
     }
 }


 function feedToGraph(myObj) {
     //bs start
     //readJsonFile(jsonFile);
     //bs end
     console.log("myObj: " + myObj);
     var myData = [];
         myData.push(["Age", "Male", "Female"]);
     for (var property in myObj) {
         myData.push(myObj[property]);
     }
     console.log("myData: " + JSON.stringify( myData));
     return google.visualization.arrayToDataTable(myData);
 }

 var jsonFile = '{"results": [{"age_range": {"range_label": "0-9","age_min": 0,"age_max": 9,"male_correct": 1,"male_total": 1,"female_correct": 0,"female_total": 0 +}},'
     '{"age_range": {"range_label": "10-14", "age_min": 10, "age_max": 14,"male_correct": 0, "male_total": 0,"female_correct": 0,  "female_total": 0}}]}';

      /**
      * Trying to return JS object from JSON file with desired structure {"key" : ["age", "male", "female"]}
      * @param jsonObj
      */
         function readJsonFile(jsonObj) {
             var chartObj = {};
             console.log("jsonObj: " + jsonObj);
             var jsonParsed = JSON.parse(jsonObj);
             var jsonArray = jsonParsed[results];
             console.log("jsonArray: " + jsonArray);
             for (var i = 0; i < jsonArray.length; i++) {
                 var keyName = "value" + i;
                 var currentObj = jsonArray[i];
                 console.log("currentObj" + currentObj);
                 var currentProperty = currentObj["age_range"];
                 var returnedArray = [currentProperty["range_label"], currentProperty["male_correct"], currentProperty["female_correct"]];
                 chartObj[keyName] = returnedArray;
                 }
             }