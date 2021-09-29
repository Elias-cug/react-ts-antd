import React, { FC, useState } from 'react';
import { Card, Table } from 'antd';
import { Resizable } from 'react-resizable';

const data = [
  {
    key: 0,
    date: '2018-02-11',
    amount: 120,
    type: 'income',
    note: 'transfer'
  },
  {
    key: 1,
    date: '2018-03-11',
    amount: 243,
    type: 'income',
    note: 'transfer'
  },
  {
    key: 2,
    date: '2018-04-11',
    amount: 98,
    type: 'income',
    note: 'transfer'
  }
];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    width: 200
  },
  {
    title: 'Amount',
    dataIndex: 'amount'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: 100
  },
  {
    title: 'Note',
    dataIndex: 'note',
    width: 100
  },
  {
    title: 'Action',
    key: 'action',
    width: 200
  }
];

const ResizableTitle: FC = (props: any) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className='react-resizable-handle'
          onClick={e => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};
const components = {
  header: {
    cell: ResizableTitle
  }
};
const TableTest: FC = () => {
  const columnsCopy = columns.map((col, index) => ({
    ...col,
    onHeaderCell: column => ({
      width: column.width,
      onResize: handleResize(index)
    })
  }));
  const [columnsState, setColumns] = useState<any>(columnsCopy);
  const handleResize = index => (e, { size }) => {
    const nextColumns = [...columns];
    nextColumns[index] = {
      ...nextColumns[index],
      width: size.width
    };
    setColumns(nextColumns);
  };

  return (
    <>
      <div className='cug-component'>
        <Card className='card-common'>
          <h3 className='commom-h3 mb8'>
            <em className='decorative-block'></em>
            <span>可拖拽表头table</span>
          </h3>
          <Table bordered components={components} columns={columnsState} dataSource={data} />;
        </Card>
      </div>
    </>
  );
};
export default TableTest;
