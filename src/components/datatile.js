import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import "./datatile.css";

const Datetile = () => {
  return (
    <div className="background">
      <Card>
        <div>
          <Statistic
            title="Core CPI"
            value={8.6}
            precision={1}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
          <Tooltip title="Hi Paul Blow Me">
            <InfoIcon />
          </Tooltip>
        </div>
      </Card>
    </div>
  );
};

export default Datetile;
