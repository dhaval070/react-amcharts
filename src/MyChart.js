import {  useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default function MyChart (props) {
    useEffect(() => {
        const series = [
            { name: 'Delivery', color: '#54A3CD' },
            { name: 'In Store', color: '#C31F46' },
            { name: 'Order Ahead', color: '#636568' },
        ];

        am4core.useTheme(am4themes_animated);
        let chart = am4core.create('mychart', am4charts.XYChart);
        chart.numberFormatter.numberFormat = "$#.##a";
        chart.dateFormatter.dateFormat = "MM/dd/yyyy";

        chart.data = props.data;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 1;
        dateAxis.startLocation = 0.5;
        dateAxis.endLocation = 0.5;
        dateAxis.tooltip.background.fill = am4core.color('#636568');

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.background.fill = am4core.color('#636568');

        for (let s of series) {
            let sr = chart.series.push(new am4charts.LineSeries());
            sr.name = s.name;
            sr.dataFields.dateX = "period";
            sr.dataFields.valueY = s.name;
            sr.fillOpacity = 0.6;
            sr.sequencedInterpolation = true;
            sr.strokeWidth = 2;
            sr.stacked = true;
            sr.strokeWidth = 2;
            sr.stroke = sr.fill = am4core.color(s.color);
            sr.tooltipText = "{period}: {valueY}";
        }

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;
        chart.scrollbarX = new am4core.Scrollbar();

        chart.legend = new am4charts.Legend();
        chart.legend.position = "top";

    }, [ props.data ]);

    return <div id="mychart" className="my-chart"></ div>
}
