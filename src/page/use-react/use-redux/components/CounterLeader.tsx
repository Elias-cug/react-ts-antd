import React, { FC } from 'react';
import { useAppSelector } from '@/hooks/redux-hooks';
import { selectCount } from '@/redux/react-redux-test/reducers/counterReducer';
const CounterLeader: FC = () => {
  const count = useAppSelector(selectCount);
  return (
    <>
      <div>你咋操作的我不管我要的是结果：{count}</div>
    </>
  );
};
export default CounterLeader;
