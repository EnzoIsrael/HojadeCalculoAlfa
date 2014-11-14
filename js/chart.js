
var n = [];
google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);


      datos = [
         ['Year', 'Sales', 'Expenses'],
          ['2004',  0,      0],
          ['2005',  0,      0],
          ['2006',  0,      0],
          ['2007',  0,      0] 
        ]
     
function drawChart() {
  var data = google.visualization.arrayToDataTable(datos);

  var options = {
    title: 'Company Performance'
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}



