import React from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { calcsData, calcsGrid } from "../data/dummy";
import { Header } from "../components";

const Calcs = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow-2xl">
      <Header category="대시보드" title="정산 내역" />
      <GridComponent
        dataSource={calcsData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 1 }}
        editSettings={editing}
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {calcsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Calcs;
