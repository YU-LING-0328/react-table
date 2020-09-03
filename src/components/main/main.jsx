import React from "react";
import NavBreadcrumb from "../nav/module";
import SearchForm from "../searchForm/module";
import NestedTable from "../table/module";

class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavBreadcrumb />
        </div>
        <div className="margin-top-20">
          <SearchForm />
        </div>
        <div>
          <NestedTable />
        </div>
      </div>
    );
  }
}
export { Main };
