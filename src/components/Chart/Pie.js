import React, {Component} from "react";
import {Pie} from 'react-chartjs-2'
import { v4 as uuidv4 } from 'uuid';

class PieChart extends Component {

    render() {
        return (
            <div className="chart">
                <Pie
                    key={uuidv4()}
                    data={this.props.data}
                    width={100}
                    height={78}
                    options={{
                        legend: {
                            display: false
                        },
                        tooltips: {
                            enabled: false
                        },
                        plugins: {
                            datalabels: {
                                formatter: (value, ctx) => {
                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                        sum += data;
                                    });
                                    let percentage = (value*100 / sum).toFixed(0)+"%";
                                    return percentage;
                                },
                                color: '#fff',
                                font: {
                                    weight: 'bold',
                                    size: 16,
                                    lineHeight: 19,
                                }
                            }
                        }
                    }}
                />

            </div>
        )
    }
}

export default PieChart;