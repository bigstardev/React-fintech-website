import React, {Component} from "react";
import {Bar} from 'react-chartjs-2'
import { v4 as uuidv4 } from 'uuid';

class BarWithoutTick extends Component {


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
                                ticks: {
                                    display: false
                                },
                                gridLines: {
                                    display: false
                                }

                            }],
                            yAxes: [{
                                ticks: {
                                    display: false,
                                    suggestedMax: 2000
                                },
                                gridLines: {
                                    display: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        },
                        tooltips: {
                            enabled: false
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

export default BarWithoutTick