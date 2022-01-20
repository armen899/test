import React from "react";
import "./DoughnutChart.less";
import { Doughnut } from "react-chartjs-2";
import NoData from "../noData/NoData";

const DoughnutChart = (props) => {

  const { datasets, className } = props;

  return (
    
    <div className={className}>
      {
        Boolean(
          datasets &&
          datasets.length &&
          datasets[0].data.filter((val) => {
            return parseFloat(val) > 0
          }).length
        ) ?
          <Doughnut
            data={{
              datasets: datasets,
            }}
          />
          :
          <NoData />
      }
    </div>
  );
};

export default DoughnutChart;
