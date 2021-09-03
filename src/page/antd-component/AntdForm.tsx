import React, { useState } from 'react';
import { Select, Input, Switch, Rate, DatePicker, Space, Card } from 'antd';

const selectOptions = [
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

// 单选
function AntdSelect () {
  return (
    <>
      <span className='mr10'>单选: </span>
      <Select className='form-item' defaultValue='liyisheng'>
        {selectOptions.map(item => (
          <Select.Option key={item.id} value={item.id}>
            {item.text}
          </Select.Option>
        ))}
      </Select>
    </>
  );
}

// 多选
function AntdMultiSelect () {
  let [maxTagCount, setMaxTagCount] = useState<number | 'responsive'>(1);

  // 过滤函数
  function filterOption (value, option) {
    if (option.label.includes(value)) {
      return true;
    }
    return false;
  }

  // 自定义渲染 tag
  // function tagRender (props) {
  //   console.log(props);
  //   if (isOpen) {
  //     return false;
  //   } else {
  //     return <div>只展示一行</div>;
  //   }
  // }

  // 监听展开下拉的回调
  const onDropdownVisibleChange = function (open: boolean) {
    if (open) {
      console.log('打开了');
      setMaxTagCount(500);
    } else {
      console.log('关闭了');
      setMaxTagCount(1);
    }
  };

  return (
    <>
      <span className='mr10'>多选: </span>
      <Select
        className='form-item'
        defaultValue={['liyisheng']} // TODO: 默认值：<string | string[] | number | number[] | LabeledValue | LabeledValue[]>
        // allowClear={true} // TODO: 允许清除
        // autoClearSearchValue={true} // TODO:自动删除搜索值
        // disabled={true} // TODO: 是否禁用
        // dropdownClassName=<string> // TODO:下拉菜单的 className 属性
        // dropdownMatchSelectWidth={50} // TODO: 下拉菜单的宽度
        // fieldNames={label: 'cLabel', key: 'cKey', options: 'Options'} // TODO: 自定义节点 label、key、options 的字段
        filterOption={filterOption} // TODO: 过滤条目 <boolean | function(inputValue, option)>
        // getPopupContainer=<() => document.body> // TODO: 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位
        // listHeight={256} // TODO: 设置弹窗滚动高度
        // loading={false} // TODO:加载中状态
        maxTagCount={maxTagCount} // TODO: 最多显示多少个tag
        // maxTagTextLength=<number> // TODO: 最大显示的tag文本长度
        // notFoundContent=<ReactNode> // TODO: 当下拉列表为空时显示的内容
        // open={isOpen} // TODO: 是否展开下拉
        // options={} // TODO: 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能
        // placeholder=<string> // TODO: 选择框默认文本
        // searchValue=<string> // TODO: 控制搜索文本
        showSearch={true} // TODO: 是否支持搜索
        // tagRender={isOpen ? null : tagRender} // TODO: 自定义tag内容 <(props) => ReactNode>
        // value=<string | string[] | number | number[] | LabeledValue | LabeledValue[]> // TODO: 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新）
        showArrow={true} // TODO: 是否显示小箭头
        // 事件
        // onBlur=() => {} // TODO: 失去焦点的回调
        // onChange=(value, Array<option>) => {} // TODO: 选中 option，或 input 的 value 变化时，调用此函数
        // onClear=() => {} // TODO: 清除内容时的回调
        // onDeselect=(value) => {} // TODO: 取消选中时回调
        onDropdownVisibleChange={onDropdownVisibleChange} // TODO: 关闭展开下拉菜单的回调
        // onFocus=()=> {} // TODO: 获得焦点时的回调
        // onSearch=() => {} // TODO：文本框变化时回调
        // onSelect=() => {} // TODO：被选中时回调

        // autoFocus={true} // DELAY: 自动获取焦点
        // defaultActiveFirstOption={true} // DELAY: 默认高亮第一个 option
        // defaultOpen={true} // DELAY: 默认展开 选项
        // dropdownRender=<(originNode: ReactNode) => ReactNode> // DELAY: 自定义下拉框内容
        // dropdownStyle=<CSSProperties> // DELAY: 下拉菜单的 style 属性
        // filterSort=<(optionA: Option, optionB: Option) => number> // DELAY: 排序过滤条目
        // menuItemSelectedIcon // DELAY: 自定义多选时当前选中的条目图标
        // optionFilterProp={'label'} // DELAY: 搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索。若通过 options 属性配置选项内容，建议设置 optionFilterProp="label" 来对内容进行搜索。
        // optionLabelProp=<string> // DELAY: 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value
        // removeIcon=<ReactNode> // DELAY: 自定义多选框清除图标
        // size=<large | middle | small> // DELAY: 选择框大小
        // suffixIcon=<ReactNode> // DELAY: 自定义选择框后缀图标

        // 回调事件
        // onInputKeyDown=() => {} // DELAY: 按键按下时的回调
        // onMouseEnter=() => {} // DELAY: 鼠标移入时回调
        // onMouseLeave=() => {} // DELAY: 鼠标移出时回调
        // onPopupScroll=() => {} // DELAY: onPopupScroll

        mode='multiple' // DEL: 模式：<multiple | tags>  设置 Select 的模式为多选或标签 没啥区别
        // bordered={false} // DEL：是否带边框
        // clearIcon=<ReactNode> // DEL: 自定义清除图标
        // labelInValue={false} // DEL:
        // maxTagPlaceholder=<ReactNode | function(omittedValues)> // 隐藏 tag 时显示的内容
        // tokenSeparators=<string[]> // DEL:  在 tags 和 multiple 模式下自动分词的分隔符
        // virtual={true} // DEL: 设置 false 时关闭虚拟滚动
      >
        {selectOptions.map(item => (
          <Select.Option key={item.id} value={item.id} label={item.text}>
            {item.text}
          </Select.Option>
        ))}
      </Select>
    </>
  );
}

// 输入框
function AntdInput () {
  return (
    <>
      <span className='mr10'>输入框：</span>
      <Input className='form-item' placeholder='请输入姓名'></Input>
    </>
  );
}

// 开关
const AntdSwitch = () => {
  return (
    <>
      <span className='mr10'>开关：</span>
      <Switch defaultChecked />
    </>
  );
};

// 评分
function AntdRate () {
  return (
    <>
      <span className='mr10'>评分：</span>
      <Rate />
    </>
  );
}

// 日期
function AntdDatePicker () {
  return (
    <>
      <span className='mr10'>日期：</span>
      <Space direction='vertical'>
        <DatePicker />
      </Space>
    </>
  );
}

const FormSelect = () => {
  return (
    <>
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>React表单元素</span>
        </h3>
        <div className='common-form'>
          <div>
            <AntdSelect></AntdSelect>
          </div>
          <div>
            <AntdMultiSelect></AntdMultiSelect>
          </div>
          <div>
            <AntdInput></AntdInput>
          </div>
          <div>
            <AntdSwitch></AntdSwitch>
          </div>
          <div>
            <AntdRate></AntdRate>
          </div>
          <div>
            <AntdDatePicker></AntdDatePicker>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FormSelect;
