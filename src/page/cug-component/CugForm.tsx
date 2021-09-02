import React from 'react';
import { Card } from 'antd';

function CugMultiSelect () {
  return (
    <>
      <span className='mr10'>多选: </span>
      <div></div>
    </>
  );
}

export default function CugForm () {
  return (
    <>
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>自定义表单元素</span>
        </h3>
        <div className='common-form'>
          <div>
            <CugMultiSelect></CugMultiSelect>
          </div>
        </div>
      </Card>
    </>
  );
}
