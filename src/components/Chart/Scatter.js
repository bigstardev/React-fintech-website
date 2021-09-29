import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';
import { v4 as uuidv4 } from 'uuid';

const data = {
    labels: ['Scatter'],
    data:
        {
            labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015],
                datasets: [
                    {
                        label: "Primary",
                        backgroundColor: '#345DEE',
                        borderWidth: 0,
                        fill: true,
                        pointBorderColor: '#345DEE',
                        pointBackgroundColor: 'rgba(52, 93, 238, 1)',
                        pointBorderWidth: 1,
                        pointHoverRadius: 12,
                        pointHoverBackgroundColor: 'rgba(52, 93, 238, 0.8)',
                        pointHoverBorderColor: 'rgba(52, 93, 238, 0.8)',
                        pointHoverBorderWidth: 1,
                        pointRadius: 10,
                        pointHitRadius: 10,
                        data: [
                            { x: 65, y: 75 },
                            { x: 59, y: 49} ,
                            { x: 80, y: 90 },
                            { x: 81, y: 29 },
                            { x: 56, y: 36 },
                            { x: 55, y: 25 },
                            { x: 40, y: 18 }]
                    },
                    {
                        label: "Secondary",
                        fill: false,
                        pointBorderColor: '#DFE4EA',
                        backgroundColor: '#DFE4EA',
                        borderWidth: 0,
                        pointBackgroundColor: '#DFE4EA',
                        pointBorderWidth: 1,
                        pointHoverRadius: 12,
                        pointHoverBackgroundColor: 'rgba(223, 228, 234, 0.8)',
                        pointHoverBorderColor: 'rgba(223, 228, 234, 0.8)',
                        pointHoverBorderWidth: 1,
                        pointRadius: 10,
                        pointHitRadius: 10,
                        data: [
                            { x: 15, y: 55 },
                            { x: 29, y: 49} ,
                            { x: 50, y: 10 },
                            { x: 61, y: 79 },
                            { x: 26, y: 46 },
                            { x: 65, y: 15 },
                            { x: 40, y: 88 }]
                    }
                ],
        }
};

class ScatterChart extends Component {

    render() {
        return (
            <div className="chart">
                <Scatter
                    key={uuidv4()}
                    data={data.data}
                    options={{
                        legend: {
                            display: true,
                            position: "bottom",
                            align: 'start',
                            labels: {
                                padding: 30,
                                boxWidth: 8,
                                usePointStyle: true,
                            }
                        },
                        plugins: {
                            datalabels: {
                                display: false,
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

export default ScatterChart;