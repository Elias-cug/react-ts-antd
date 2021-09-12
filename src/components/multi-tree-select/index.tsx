import React, { FC, useEffect, useState } from 'react';
import { TreeSelect } from 'antd';
import { TreeSelectProps } from 'antd/lib/index';
import './style/index.less';
import { getDomSize } from './util';

const omitTypes = [];

const HAS_DELETE_ATTRIBUTES = ['allowCreate'];
interface optionsType {
  value: string | number;
  label: string | number;
  key?: string | number;
}

type VT = string | string[] | number | number[];
interface MultiTreeSelectPropsType extends TreeSelectProps<VT> {
  allowCreate?: boolean;
  className?: string;
  data?: Array<optionsType>;
}

const defaultOptions = {
  allowCreate: false,
  showSearch: true,
  placeholder: '请选择',
  data: []
};

/** 合并配置 */
function mergeOptions (
  defaultOptions: MultiTreeSelectPropsType,
  customOptions: TreeSelectProps<VT>
): MultiTreeSelectPropsType {
  const mergedOptions = {
    ...defaultOptions,
    ...customOptions
  };
  return mergedOptions;
}

/** 组件：返回自定义后缀图标 */
const SuffixIcon: FC = () => {
  return (
    <>
      <i className='icon-select-arrow'></i>
      <i className='icon-search'></i>
    </>
  );
};

/** 组件：返回清除图标 */
const ClearIcon: FC = () => {
  return <i className='icon-input-close'></i>;
};

/** 返回超过最大显示个数时要展示的 ReactNode  */
const getMaxTagPlaceholder = props => {
  const len = props?.length;
  const str = len <= 99 ? '+' + len : '99+';
  return <div>{<i>{str}</i>}</div>;
};

const MultiTreeSelect: FC<MultiTreeSelectPropsType> = (props: MultiTreeSelectPropsType) => {
  // 合并配置
  const mergedOptions: MultiTreeSelectPropsType = mergeOptions(defaultOptions, props);
  console.log('log---树形多选合并后的配置：');
  console.log(mergedOptions);

  // 处理 maxTagCount：实现收起的时候只展示一行
  const [maxTagCountState, setMaxTagCount] = useState<number | 'responsive'>(1);

  const [isOpen, setIsOpen] = useState(false);

  // 监听展开下拉的回调
  const onDropdownVisibleChange = function (open: boolean) {
    if (open) {
      setMaxTagCount(500);
    } else {
      setMaxTagCount(1);
    }
    setIsOpen(open);
  };

  // 计算关闭后 selector 大小，保持关闭后只占一行
  useEffect(() => {
    function computeSelectorSize () {
      const eleAntSelector = document.querySelector('.br-multi-tree-select .ant-select-selector');
      const eleAntSelectorWidth = getDomSize(eleAntSelector).width;
      const eleMaxTag = document.querySelector('.br-multi-tree-select .ant-select-selection-overflow-item-rest');
      const eleItem = document.querySelector('.br-multi-tree-select .ant-select-selection-item');
      if (eleMaxTag) {
        const eleMaxTagWidth = getDomSize(eleMaxTag).width;
        const restWidth = eleAntSelectorWidth - eleMaxTagWidth - 60 - 10;
        const eleItem = document.querySelector('.br-multi-tree-select .ant-select-selection-item');
        eleItem?.setAttribute('style', `width: ${restWidth + 'px'}`);
      } else if (eleItem) {
        const eleItemWidth = getDomSize(eleItem).width;
        let restWidth = eleAntSelectorWidth - 60 - 10;
        restWidth = eleItemWidth < restWidth ? eleItemWidth : restWidth;
        eleItem?.setAttribute('style', `width: ${restWidth + 'px'}`);
      }
    }
    computeSelectorSize();
  }, [isOpen]);

  // 删除无用的属性
  HAS_DELETE_ATTRIBUTES.forEach(prop => {
    delete mergedOptions[prop];
  });

  return (
    <>
      <TreeSelect
        {...mergedOptions}
        className={`${mergedOptions.className} br-multi-tree-select`}
        allowClear
        showArrow
        maxTagCount={maxTagCountState}
        clearIcon={ClearIcon}
        suffixIcon={SuffixIcon}
        treeCheckable={true}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeDefaultExpandAll
        onDropdownVisibleChange={onDropdownVisibleChange}
        maxTagPlaceholder={getMaxTagPlaceholder}
      >
        {mergedOptions.data?.map(item => {
          return <TreeSelect.TreeNode key={item.key || item.value} value={item.value} title={item.label} />;
        })}
      </TreeSelect>
    </>
  );
};
export default MultiTreeSelect;
