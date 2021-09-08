import React, { FC } from 'react';
import { Checkbox } from 'antd';
// import { CheckboxProps } from 'antd/lib/index';

interface Options {
  value: string | number;
  label: string | number;
  key?: string | number;
  disabled?: boolean;
}
interface CheckboxOptionProps {
  options: Array<Options>;
}

const CheckboxOption: FC<CheckboxOptionProps> = (props: CheckboxOptionProps) => {
  const { options } = props;
  console.log('options选项:', options);
  return (
    <>
      <Checkbox.Group>
        {options.map(item => {
          return (
            <Checkbox key={item.key || item.value} value={item.value} disabled={item.disabled}>
              {item.label}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </>
  );
};

export default CheckboxOption;
