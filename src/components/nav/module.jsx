import React from "react";
import "antd/dist/antd.css";
import { Breadcrumb } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

function NavBreadcrumb() {
  return (
    <Breadcrumb separator=">">
      <Breadcrumb.Item href="https://udev.api.liontravel.com/">
        <FileTextOutlined /> Mongo Log
      </Breadcrumb.Item>
      <Breadcrumb.Item>mongo log 查詢</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default NavBreadcrumb;
