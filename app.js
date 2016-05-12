$(function() {
        var table = [
          [4, 5, 6, 3],
          [8, 12, 4, 34],
          [3, 5, 2, 12],
          [4, 14, 2, 4]
        ]
        // Create the heatmap closure.
        var myHeatmap = heatmap();

        /// Set chart properties post-creation.
        myHeatmap.width(400)
          .minColor('yellow')
          .maxColor('red');

        var chartWrapper = d3.select('#vis').datum(table).call(myHeatmap);


        $('button').on("click", function() {

            console.log('hello');
            var width = $('#width').val();
            myHeatmap.width(width);
            chartWrapper.call(myHeatmap);
            return false;
        });
});     
/*
     var myHeatmap = heatmap();

      var table = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      d3.select('#vis')
        .datum(table)
        .call(myHeatmap);

      d3.csv('ppg2008.csv', function(data) {

        setTimeout(function() {
            myHeatmap.width(800)
                .height(1200)
                .minColor('yellow')
                .maxColor('red');
            d3.select('#vis')
                .datum(data)
                .call(myHeatmap);
        }, 3000);
*/

