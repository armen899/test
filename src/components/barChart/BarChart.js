import React from 'react'
import { Bar } from 'react-chartjs-2';
import { withTranslation } from 'react-i18next';

const BarChart = (props) => {

    const { dataSets, labels } = props

    const data = {
        labels: labels,
        datasets: dataSets
    };

    return (
        <Bar
            data={data}
        />
    );
}

export default withTranslation()(BarChart);