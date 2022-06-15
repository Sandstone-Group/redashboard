import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import "./datatile.css";

const Datetile = (props) => {
  return (
    <div className="background">
      <Card>
        <div>
          <Statistic
            title={props.title}
            value={props.value}
            precision={props.precision}
            valueStyle={{ color: "#3f8600" }}
            suffix={props.suffix}
          />
          <Tooltip title={props.iconTitle}>
            <InfoIcon />
          </Tooltip>
        </div>
      </Card>
    </div>
  );
};

export default Datetile;
