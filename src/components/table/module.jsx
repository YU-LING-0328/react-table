import React from "react";
import "antd/dist/antd.css";
import "../../index.css";
import { Table } from "antd";
import reqwest from "reqwest";
import "./data.json";

const columns = [
  {
    title: "CreateDateTime",
    dataIndex: "CreateDateTime",
    key: "createDateTime",
  },
  { title: "RequestId", dataIndex: "RequestId", key: "requestId" },
  {
    title: "SourceJsonString",
    dataIndex: "SourceJsonString",
    key: "sourceJsonStr",
  },
  {
    title: "ReturnJsonString",
    dataIndex: "ReturnJsonString",
    key: "returnJsonStr",
  },
  { title: "DurationTime", dataIndex: "DurationTime", key: "durationTime" },
  { title: "Info", dataIndex: "Info", key: "info" },
];

const getRandomuserParams = (params) => {
  return {
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
  };
};

class NestedTable extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    this.setState({ loading: true });
    reqwest({
      url: "http://localhost:44301/datas",
      method: "get",
      type: "json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "get",
        mode: "cors",
      },
      data: getRandomuserParams(params),
    }).then((data) => {
      console.log(data);
      console.log(params);
      this.setState({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: data.totalCount,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
    });
  };

  render() {
    const { data, pagination, loading } = this.state;
    return (
      <Table
        columns={columns}
        //rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default NestedTable;
