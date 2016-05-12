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