import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './activity.css'
function Activity() {
    const [chartData, setChartData] = useState({
        series: [{
            name: 'Activity',
            data: [4000, 10000, 5000, 4000, 7000, 7000, 6000, 5000, 2000, 7000, 6000, 12000, 15000, 11000, 7000, 6000, 5000, 7000, 11000, 7000, 6000]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false 
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                    endingShape: 'rounded',
                    borderRadius: 8
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['5','','9','','11','','13','','15','','17', '','19','','21','','23','','25','','27'],
                labels: {
                    style: {
                        colors: '#9c9c9c',
                        fontSize: '12px',
                    }
                },
                axisTicks: {
                    show: false 
                },
            },            
            yaxis: {
                tickAmount: 3,
                labels: {
                    formatter: function(val) {
                        return `${val / 1000}k`; 
                    },
                    style: {
                        colors: '#9c9c9c',
                        fontSize: '12px',
                    }
                },
                min: 0,
                max: 15000, 
            },
            fill: {
                opacity: 1,
                colors: ['#6A8FF1'] 
            },
            grid: {
                borderColor: '#444',
                strokeDashArray: 3,
            },
            tooltip: {
                enabled: false,
            }
        },
    });


    const [period, setPeriod] = useState('Weekly');

    const handlePeriodChange = (event) => {
        const selectedPeriod = event.target.value;
        setPeriod(selectedPeriod);

        if (selectedPeriod === 'Weekly') {
            setChartData({
                series: [{
                    name: 'Activity',
                    data: [4000, 10000, 5000, 4000, 7000, 7000, 6000, 5000, 2000, 7000, 6000, 12000, 15000, 11000, 7000, 6000, 5000, 7000, 11000, 7000, 6000]
                }],
                options: {
                    // Update options if needed
                    xaxis: {
                        categories: ['5','','9','','11','','13','','15','','17', '','19','','21','','23','','25','','27'],
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 8
                        },
                    },
                }
            });
        } else if (selectedPeriod === 'Monthly') {
            setChartData({
                series: [{
                    name: 'Activity',
                    data: [12000, 15000, 11000, 7000, 5000, 4000, 7000, 6000, 10000, 3000, 6000, 5000]
                }],
                options: {
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 14
                        },
                    },
                }
            });
        }
    };

    return (
        <div className='activityconain' style={{ position: 'relative', backgroundColor: '#191e23', padding: '10px 16px', borderRadius: '10px'}}>
            <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>Activity</h2>
            <select 
                value={period} 
                onChange={handlePeriodChange} 
                className='dropselection'
                >
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
            </select>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height="280"
            />
        </div>
    );
}

export default Activity;
