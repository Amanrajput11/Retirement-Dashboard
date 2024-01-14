function updateDonutChart(el, percent, donut) {
    percent = Math.round(percent);
    percent = Math.max(0, Math.min(100, percent));
    var deg = Math.round(360 * (percent / 100));

    var $el = $(el);
    var $pie = $el.find('.pie');
    var $rightSide = $el.find('.right-side');
    var $leftSide = $el.find('.left-side');
    var $shadow = $el.find('.shadow');
    var $num = $el.find('.num');

    if (percent > 50) {
        $pie.css('clip', 'rect(auto, auto, auto, auto)');
        $rightSide.css('transform', 'rotate(180deg)');
    } else {
        $pie.css('clip', 'rect(0, 1em, 1em, 0.5em)');
        $rightSide.css('transform', 'rotate(0deg)');
    }

    if (donut) {
        $rightSide.css('border-width', '0.1em');
        $leftSide.css('border-width', '0.1em');
        $shadow.css('border-width', '0.1em');
    } else {
        $rightSide.css('border-width', '0.5em');
        $leftSide.css('border-width', '0.5em');
        $shadow.css('border-width', '0.5em');
    }

    $num.text(percent);
    $leftSide.css('transform', 'rotate(' + deg + 'deg)');
}

// Pass in a number for the percent
updateDonutChart('#specificChart', 70, true);

$('#percent').on('input', function () {
    var percent = $(this).val();
    var donut = $('#donut input').is(':checked');
    updateDonutChart('#specificChart', percent, donut);
});

$('#donut input').on('change', function () {
    var donut = $(this).is(':checked');
    var percent = $('#percent').val();
    var $span = $('#donut span');

    if (donut) {
        $span.html('Donut');
    } else {
        $span.html('Pie');
    }

    updateDonutChart('#specificChart', percent, donut);
});
// bdsfhj
function updateDonutChart(el, percent, donut) {
    percent = Math.round(percent);
    percent = Math.max(0, Math.min(100, percent));
    var deg = Math.round(360 * (percent / 100));

    var $el = $(el);
    var $pie = $el.find('.pie');
    var $rightSide = $el.find('.right-side');
    var $leftSide = $el.find('.left-side');
    var $shadow = $el.find('.shadow');
    var $num = $el.find('.num');

    if (percent > 50) {
        $pie.css('clip', 'rect(auto, auto, auto, auto)');
        $rightSide.css('transform', 'rotate(180deg)');
    } else {
        $pie.css('clip', 'rect(0, 1em, 1em, 0.5em)');
        $rightSide.css('transform', 'rotate(0deg)');
    }

    if (donut) {
        $rightSide.css('border-width', '0.1em');
        $leftSide.css('border-width', '0.1em');
        $shadow.css('border-width', '0.1em');
    } else {
        $rightSide.css('border-width', '0.5em');
        $leftSide.css('border-width', '0.5em');
        $shadow.css('border-width', '0.5em');
    }

    $num.text(percent);
    $leftSide.css('transform', 'rotate(' + deg + 'deg)');
}

// Pass in a number for the percent
updateDonutChart('#specificCharta', 95, true);

$('#percent').on('input', function () {
    var percent = $(this).val();
    var donut = $('#donut input').is(':checked');
    updateDonutChart('#specificCharta', percent, donut);
});

$('#donut input').on('change', function () {
    var donut = $(this).is(':checked');
    var percent = $('#percent').val();
    var $span = $('#donut span');

    if (donut) {
        $span.html('Donut');
    } else {
        $span.html('Pie');
    }

    updateDonutChart('#specificCharta', percent, donut);
});
// hjds
function updateDonutChart(el, percent, donut) {
    percent = Math.round(percent);
    percent = Math.max(0, Math.min(100, percent));
    var deg = Math.round(360 * (percent / 100));

    var $el = $(el);
    var $pie = $el.find('.pie');
    var $rightSide = $el.find('.right-side');
    var $leftSide = $el.find('.left-side');
    var $shadow = $el.find('.shadow');
    var $num = $el.find('.num');

    if (percent > 50) {
        $pie.css('clip', 'rect(auto, auto, auto, auto)');
        $rightSide.css('transform', 'rotate(180deg)');
    } else {
        $pie.css('clip', 'rect(0, 1em, 1em, 0.5em)');
        $rightSide.css('transform', 'rotate(0deg)');
    }

    if (donut) {
        $rightSide.css('border-width', '0.1em');
        $leftSide.css('border-width', '0.1em');
        $shadow.css('border-width', '0.1em');
    } else {
        $rightSide.css('border-width', '0.5em');
        $leftSide.css('border-width', '0.5em');
        $shadow.css('border-width', '0.5em');
    }

    $num.text(percent);
    $leftSide.css('transform', 'rotate(' + deg + 'deg)');
}

// Pass in a number for the percent
updateDonutChart('#specificChartb', 59, true);

$('#percent').on('input', function () {
    var percent = $(this).val();
    var donut = $('#donut input').is(':checked');
    updateDonutChart('#specificChartb', percent, donut);
});

$('#donut input').on('change', function () {
    var donut = $(this).is(':checked');
    var percent = $('#percent').val();
    var $span = $('#donut span');

    if (donut) {
        $span.html('Donut');
    } else {
        $span.html('Pie');
    }

    updateDonutChart('#specificChartb', percent, donut);
});
// hsfdsf
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        
        axisX: {
            interval: 1,
            intervalType: "year",
            valueFormatString: "#"
        },
        axisY:{
            valueFormatString:"$#",
            gridColor: "#B6B1A8",
            tickColor: "#B6B1A8"
        },
        toolTip: {
            shared: true,
            content: toolTipContent
        },
        data: [
            {
                type: "stackedColumn",
                showInLegend: true,
                color: "blue",
                name: "employee",
                dataPoints: [
                    { y: 6.75, x: 2010 },
                    { y: 8.57, x: 2011 },
                    { y: 10.64, x: 2012 },
                    { y: 13.97, x: 2013 },
                    { y: 15.42, x: 2014 },
                    { y: 17.26, x: 2015 },
                    { y: 20.26, x: 2016 },
                    // Add more dataPoints for additional columns
                ]
            },
            {        
                type: "stackedColumn",
                showInLegend: true,
                name: "Q2",
                color: "#23486f",
                dataPoints: [
                    { y: 6.82, x: 2010 },
                    { y: 9.02, x: 2011 },
                    { y: 11.80, x: 2012 },
                    { y: 14.11, x: 2013 },
                    { y: 15.96, x: 2014 },
                    { y: 17.73, x: 2015 },
                    { y: 21.5, x: 2016 },
                    // Add more dataPoints for additional columns
                ]
            },
            {        
                type: "stackedColumn",
                showInLegend: true,
                name: "Q3",
                color: "#4e79a7",
                dataPoints: [
                    { y: 7.28, x: 2010 },
                    { y: 9.72, x: 2011 },
                    { y: 13.30, x: 2012 },
                    { y: 14.9, x: 2013 },
                    { y: 18.10, x: 2014 },
                    { y: 18.68, x: 2015 },
                    { y: 22.45, x: 2016 },
                    // Add more dataPoints for additional columns
                ]
            },
            // Add more series for additional columns
        ]
    });
    chart.render();
    
    function toolTipContent(e) {
        var str = "";
        var total = 0;
        var str2, str3;
        for (var i = 0; i < e.entries.length; i++){
            var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: $<strong>"+e.entries[i].dataPoint.y+"</strong><br/>";
            total = e.entries[i].dataPoint.y + total;
            str = str.concat(str1);
        }
        str2 = "<span style = \"color:DodgerBlue;\"><strong>"+e.entries[0].dataPoint.x+"</strong></span><br/>";
        total = Math.round(total * 100) / 100;
        str3 = "<span style = \"color:Tomato\">Total:</span><strong> $"+total+"</strong><br/>";
        return (str2.concat(str)).concat(str3);
    }
    
    }
// ghdsfd
