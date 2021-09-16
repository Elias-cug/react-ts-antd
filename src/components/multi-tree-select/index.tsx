import React, { FC, useEffect, useState, useMemo } from 'react';
import { TreeSelect, Space, Spin } from 'antd';
import { TreeSelectProps } from 'antd/lib/index';
import './style/index.less';
import { getDomSize, fillMissValues } from './util';

// TODO: 不能传的类型
const omitTypes = ['mode', 'clearIcon'];

interface OptionType {
  [prop: string]: any;
}

type OptionsType = Array<OptionType>;

const HAS_DELETE_ATTRIBUTES = ['allowCreate'];

type VT = string[] | number[];
interface MultiTreeSelectPropsType extends TreeSelectProps<VT> {
  allowCreate?: boolean;
  className?: string;
  options: Array<OptionType>;
}

const defaultProps = {
  allowCreate: false,
  showSearch: true,
  placeholder: '请选择',
  options: []
};

/** 合并配置 */
function mergeProps (
  defaultProps: MultiTreeSelectPropsType,
  customProps: TreeSelectProps<VT>
): MultiTreeSelectPropsType {
  const _proxyProps = {
    ...defaultProps,
    ...customProps
  };
  return _proxyProps;
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

/** 组件：返回超过最大显示个数时要展示的 ReactNode  */
const getMaxTagPlaceholder = props => {
  const len = props?.length;
  const str = len <= 99 ? '+' + len : '99+';
  return <div>{<i>{str}</i>}</div>;
};

/** 组件：返回无数据 ReactNode */
const NotFoundContent = <div>无数据了</div>;

const MultiTreeSelect: FC<MultiTreeSelectPropsType> = (props: MultiTreeSelectPropsType) => {
  // 合并配置
  const _proxyProps: MultiTreeSelectPropsType = mergeProps(defaultProps, props);

  const {
    options,
    showSearch,
    allowCreate,
    value = [],
    defaultValue = [],
    onSelect,
    onSearch,
    onChange,
    onDeselect,
    maxTagCount,
    loading = false
  } = _proxyProps;

  const mergedShowSearch = allowCreate ? true : showSearch;

  const [maxTagCountState, setMaxTagCount] = useState<number | 'responsive'>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [mergedValue, setMergedValue] = useState([...value, ...defaultValue]);

  // 拦截 onDropdownVisibleChange
  const onInnerDropdownVisibleChange = (open: boolean) => {
    if (open) {
      setMaxTagCount(maxTagCount || 500);
    } else {
      setMaxTagCount(1);
    }
    setIsOpen(open);
  };

  // 拦截 onSearch
  const onInnerSearch = (value: string) => {
    setSearchValue(value);
    onSearch && onSearch(value);
  };

  // 拦截 onSelect
  const onInnerSelect = (value, option) => {
    onSelect && onSelect(value, option);
  };

  // 拦截 onInnerDeselect
  const onInnerDeselect = (value, option) => {
    onDeselect && onDeselect(value, option);
  };

  // 拦截 onChange
  const onInnerChange = (value, label, extra) => {
    setMergedValue(value);
    setSearchValue('');
    computeSelectorSize(isOpen);
    onChange && onChange(value, label, extra);
  };

  function computeSelectorSize (isOpen: boolean) {
    // 可用宽度
    const $selectOverflow = document.querySelector('.br-multi-tree-select .ant-select-selection-overflow');
    const selectOverflowWidth = getDomSize($selectOverflow).width;

    // 普通的item
    const $item = document.querySelector('.br-multi-tree-select .ant-select-selection-item');

    // maxTag item
    const $maxTagItem = document.querySelector('.br-multi-tree-select .ant-select-selection-overflow-item-rest');

    // search item
    const $searchItem = document.querySelector('.ant-select-selection-overflow-item-suffix');

    // 关闭且出现 maxTagItem
    if (!isOpen && $item) {
      const itemWidth = getDomSize($item).width;
      const searchItemWidth = getDomSize($searchItem).width;
      let maxTagItemWidth = 0;
      if ($maxTagItem) {
        maxTagItemWidth = getDomSize($maxTagItem).width;
      }
      const restWidth = selectOverflowWidth - maxTagItemWidth - searchItemWidth - 22;
      if (itemWidth >= restWidth) {
        $item.setAttribute('style', `width: ${restWidth + 'px'}`);
      }
    } else if (isOpen && $item && $searchItem) {
      const itemWidth = getDomSize($item).width;
      const searchItemWidth = getDomSize($searchItem).width;
      const restWidth = selectOverflowWidth - searchItemWidth - 22;
      if (itemWidth >= restWidth) {
        $item.setAttribute('style', `width: ${restWidth + 'px'}`);
      } else {
        $item.setAttribute('style', `max-width: "100%"`);
      }
    }
  }

  // 自定义下拉内容--》解决 loading 态
  const dropdownRender = Menu => {
    if (loading) {
      return (
        <div className='br-multi-select-loading'>
          <Spin></Spin>
        </div>
      );
    }
    return Menu;
  };

  // 设置过滤函数
  const filterOption = (inputValue, option) => {
    return option.title.includes(inputValue);
  };

  // Effect: 计算关闭后 selector 大小，保持关闭后只占一行
  useEffect(() => {
    computeSelectorSize(isOpen);
  }, [isOpen, mergedValue]);

  // Memo: 合并 options
  const mergedOptions = useMemo<OptionsType>(() => {
    let newOption: OptionsType = [];
    if (!mergedShowSearch || !allowCreate || !searchValue) {
      newOption = [...options];
    }
    newOption = fillMissValues(mergedValue, options);
    return newOption;
  }, [mergedValue, searchValue, isOpen]);

  // Memo: 获取要展示的 options
  const displayOptions = useMemo<OptionsType>(() => {
    if (!mergedShowSearch || !allowCreate || !searchValue) {
      return [...mergedOptions] as OptionsType;
    }

    const filteredOptions = [...mergedOptions];
    if (filteredOptions.every(opt => opt['label'] !== searchValue)) {
      filteredOptions.unshift({
        value: searchValue,
        label: searchValue,
        key: searchValue
      });
    }
    return filteredOptions;
  }, [mergedOptions, mergedShowSearch, allowCreate, searchValue]);

  // 删除无用的属性
  HAS_DELETE_ATTRIBUTES.forEach(prop => {
    delete _proxyProps[prop];
  });
  return (
    <>
      <TreeSelect
        {..._proxyProps}
        className={`${_proxyProps.className} br-multi-tree-select`}
        allowClear
        showArrow
        treeDefaultExpandAll
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        dropdownRender={dropdownRender}
        clearIcon={ClearIcon}
        suffixIcon={SuffixIcon}
        notFoundContent={NotFoundContent}
        maxTagCount={maxTagCountState}
        treeCheckable={true}
        maxTagPlaceholder={getMaxTagPlaceholder}
        filterTreeNode={filterOption}
        onDropdownVisibleChange={onInnerDropdownVisibleChange}
        onSearch={onInnerSearch}
        onSelect={onInnerSelect}
        onDeselect={onInnerDeselect}
        onChange={onInnerChange}
      >
        {displayOptions?.map(item => {
          return (
            <TreeSelect.TreeNode
              {...item}
              key={item.key || item.value}
              value={item.value}
              title={item.label}
              disabled={item.disabled}
            />
          );
        })}
      </TreeSelect>
    </>
  );
};
export default MultiTreeSelect;
