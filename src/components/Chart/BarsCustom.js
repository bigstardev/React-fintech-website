import React, {Component} from "react";
import {Bar} from 'react-chartjs-2'
import { v4 as uuidv4 } from 'uuid';

class BarCustom extends Component {


    render() {
        return (
            <div className="chart">
                <Bar
                    key={uuidv4()}
                    data={this.props.data}
                    width={this.props.width}
                    height={this.props.height}

                    options={{
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                categoryPercentage: 0.5,
                                barPercentage: 0.6,

                            }],
                            yAxes: [{
                                ticks: {
                                    suggestedMax: 2000
                                },
                            }]
                        },
                        legend: {
                            display: false
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

export default BarCustom