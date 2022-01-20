import React from 'react';
import { Line } from 'react-chartjs-2';

const BasicChart = (props) => {

    const { labels, datasets } = props;

    const data = {
        labels: labels,
        datasets: datasets,

    };

    return (
        <Line
            data={data}
            title="Chart"
        />
    )
}

export default BasicChart;