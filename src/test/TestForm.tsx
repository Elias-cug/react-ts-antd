import React from 'react';
import FormCreate from '@/components/HOC/Form';

const TestForm = props => {
  return (
    <div>
      <input
        {...props.form.getFiledProps('input1', {
          validator: [{ min: 2, max: 10, message: '2-10允许' }]
        })}
      ></input>
      <div>{props.form.getFieldFilter('input1').children}</div>
    </div>
  );
};

export default FormCreate()(TestForm);
