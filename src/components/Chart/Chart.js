import React, {Component} from "react";
import {Bar} from 'react-chartjs-2'
import { v4 as uuidv4 } from 'uuid';

class Chart extends Component {

    render() {
        return (
            <div className="chart">
                <Bar
                    key={uuidv4()}
                    data={this.props.data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: true,
                        bezierCurve: false,
                        scales: {
                            xAxes: [{
                                categoryPercentage: 1.0,
                                barPercentage: 1.0,

                            }],
                            yAxes: [{
                                ticks: {
                                    suggestedMax: 2000
                                },
                            }]
                        },
                        legend: {
                            display: false,
                            labels: {
                                fontColor: "red",
                                fontSize: 18
                            }
                        },
                        tooltips: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    return tooltipItem.yLabel;
                                }
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

export default Chart