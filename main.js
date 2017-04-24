
    var svg1 = dimple.newSvg("#chart1", 590, 400);
    d3.csv("titanic_data.csv", function (data) {
      var myChart = new dimple.chart(svg1, data);
      myChart.setBounds(65, 45, 505, 315)
      myChart.addCategoryAxis("x", "AgeGroup");
      myChart.addPctAxis("y", "Passengers");
      myChart.addSeries("Survived", dimple.plot.bar);
      myChart.addLegend(200, 10, 380, 20, "right");
      myChart.draw();
    });


    var svg2 = dimple.newSvg("#chart2", 590, 400);
     d3.csv("titanic_data.csv", function (data) {
       var myChart = new dimple.chart(svg2, data);
       myChart.setBounds(60, 30, 510, 330)
       myChart.addCategoryAxis("x", ["Sex", "Survived"]);
       myChart.addMeasureAxis("y", "Passengers");
       myChart.addSeries("Survived", dimple.plot.bar);
       myChart.addLegend(65, 10, 510, 20, "right");
       myChart.draw();
     });


     var svg3 = dimple.newSvg("#chart3", 590, 400);
     d3.csv("titanic_data.csv", function (data) {
       var myChart = new dimple.chart(svg3, data);
       myChart.setBounds(65, 45, 505, 315)
       myChart.addCategoryAxis("x", ["FareGroup", "Sex"]);
       myChart.addPctAxis("y", "Passengers");
       myChart.addSeries("Survived", dimple.plot.bar);
       myChart.addLegend(200, 10, 390, 20, "right");
       svg3.append("text")
                .attr("x", 500)
                .attr("y", 380)
                .style("text-anchor", "middle")
                .style("font-family", "sans-serif")
                .style("font-size", "65%")
                .text("female");
                svg3.append("text")
                         .attr("x", 390)
                         .attr("y", 380)
                         .style("text-anchor", "middle")
                         .style("font-family", "sans-serif")
                         .style("font-size", "65%")
                         .text("male");
                         svg3.append("text")
                                  .attr("x", 240)
                                  .attr("y", 380)
                                  .style("text-anchor", "middle")
                                  .style("font-family", "sans-serif")
                                  .style("font-size", "65%")
                                  .text("female");
                                  svg3.append("text")
                                           .attr("x", 140)
                                           .attr("y", 380)
                                           .style("text-anchor", "middle")
                                           .style("font-family", "sans-serif")
                                           .style("font-size", "65%")
                                           .text("male");

       myChart.draw();

     });
