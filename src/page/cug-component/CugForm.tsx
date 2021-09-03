import React, { useState, FC } from 'react';
import { Card, Select } from 'antd';
import { SelectProps } from 'antd/lib/index';

const brFontNames = [
  {
    id: 'tiannana',
    text: '田娜娜'
  },
  {
    id: 'hanxiaoyu',
    text: '韩晓雨'
  },
  {
    id: 'liyisheng',
    text: '李义升'
  },
  {
    id: 'tanqinglian',
    text: '谭青廉'
  },
  {
    id: 'zhanghui',
    text: '张慧'
  },
  {
    id: 'chaochang',
    text: '超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长'
  }
];

type VT = string | string[] | number | number[];
interface CugMultiSelectProps extends SelectProps<VT> {
  allowCreate?: boolean;
}

const defaultOptions = {
  allowCreate: false,
  showSearch: false
};

// 合并自定义配置
function mergeOptions (defaultOptions: CugMultiSelectProps, customOptions: SelectProps<VT>): CugMultiSelectProps {
  const mergedOptions = {
    ...defaultOptions,
    ...customOptions
  };
  return mergedOptions;
}

function getMode (allowCreate: boolean, showSearch: boolean): 'tags' | 'multiple' {
  if (allowCreate) {
    return 'tags';
  } else if (!allowCreate && showSearch) {
    return 'multiple';
  } else if (!allowCreate && !showSearch) {
    return 'multiple';
  }
  return 'multiple';
}

const CugMultiSelect: FC<Omit<CugMultiSelectProps, 'mode'>> = props => {
  // 合并配置
  let mergedOptions: CugMultiSelectProps = mergeOptions(defaultOptions, props);

  const { allowCreate = false, showSearch = false, maxTagCount = 500 } = mergedOptions;
  // 处理 mode
  const mode = getMode(allowCreate, showSearch);
  // 处理 maxTagCount：实现收起的时候只展示一行
  let [maxTagCountState, setMaxTagCount] = useState<number | 'responsive'>(1);

  let [options, setOptions] = useState(brFontNames);
  // 过滤函数
  const filterOption = function (value, option) {
    if (option.label.includes(value)) {
      return true;
    }
    return false;
  };
  // 监听展开下拉的回调
  const onDropdownVisibleChange = function (open: boolean) {
    if (open) {
      setMaxTagCount(maxTagCount);
    } else {
      setMaxTagCount(1);
    }
  };
  return (
    <>
      <span className='mr10'>多选: </span>
      <Select
        className='form-item'
        mode={mode} // tags: 可以增加条目，会使 showSearch 失效  multiple: 不可以增加条目，showSearch=false 不支持搜索； 支持搜索不支持增加条目： mode=“multiple” showSearch=true 不支持搜索 mode=“multiple” showSearch=false 支持搜索也支持增加条目 mode=“tags”
        defaultValue={['liyisheng']}
        filterOption={filterOption}
        maxTagCount={maxTagCountState}
        showSearch={false}
        showArrow={true}
        onDropdownVisibleChange={onDropdownVisibleChange}
      >
        {options.map(item => (
          <Select.Option key={item.id} value={item.id} label={item.text}>
            {item.text}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

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
            <CugMultiSelect allowCreate={true} showSearch={false} maxTagCount={3}></CugMultiSelect>
          </div>
        </div>
      </Card>
    </>
  );
}
