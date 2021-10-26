import React, { FC, useState } from 'react';
import { Card } from 'antd';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
  'Item 11',
  'Item 12',
  'Item 13',
  'Item 14',
  'Item 15'
];
const SortableItem = SortableElement(({ value }) => (
  <li className='sortable-item' key={value}>
    {value}
  </li>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul className='sortable-wrapper'>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const Sortable: FC = () => {
  const [itemsState, setItems] = useState(items);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(itemsState, oldIndex, newIndex));
  };
  return (
    <div>
      <SortableList
        items={itemsState}
        helperClass='helper-class'
        onSortEnd={onSortEnd}
        lockAxis={'y'}
        hideSortableGhost={false}
        lockToContainerEdges={true}
        // lockOffset={['-3px', '-3px']}
      />
    </div>
  );
};

export default Sortable;
