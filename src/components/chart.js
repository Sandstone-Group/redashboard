import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import dataTest from "../dataProd/testData.json";

const Chart = () => {
  const data = dataTest;

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="US30Y" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="US30Y" stroke="black" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
