import React, { FC, useEffect, useState } from 'react';
import { get } from '@/axios/axios';
import './scroll.less';
import { getDomSize } from '@/utils/business';

interface ListType {
  id: string | number;
  title: string;
  content: string;
}

const CircultionScroll: FC = () => {
  // 可视区域高度
  const ele = document.querySelector('.main-content');
  console.log(ele);
  const size = getDomSize(ele);
  console.log(size);
  const visibleHeight = size.height;
  // 单个条目高度
  const itemHeight = 100;
  // 全量数据
  const [listData, setListData] = useState<Array<ListType>>([]);
  // 可视区域数据
  const [visibleData, setVisibleData] = useState<Array<ListType>>([]);

  // 可视区域显示列表数
  const defaultCount = Math.ceil(visibleHeight / itemHeight);
  const [visibleCount, setVisibleCount] = useState(defaultCount);

  // 起始索引
  const [start, setStart] = useState(0);
  // 结束索引
  const [end, setEnd] = useState(start + visibleCount);

  // 偏移量, 为了滚动条
  const [startOffset, setStartOffset] = useState(0);

  // 偏移量
  const [transform, setTransform] = useState(`translate3d(0,0px,0)`);

  useEffect(() => {
    getInfiniteList();
  }, []);

  useEffect(() => {
    const tmp = getVisibleData(listData);
    console.log(tmp);
    setVisibleData(tmp);
  }, [listData]);

  useEffect(() => {
    setTransform(`translate3d(0,${startOffset}px,0)`);
  }, [startOffset]);

  /**
   * 初始加载数据，将数据处理成可视区域数据量
   * 产生滚动时，
   */

  async function getInfiniteList() {
    const res: any = await get('/api/getInfiniteList');
    setListData([...listData, ...res.data.result]);
  }

  // 获取可视区域数据
  function getVisibleData(listData) {
    return listData.slice(start, Math.min(end, listData.length));
  }

  // 计算偏移量-- > 得到新的起止索引-- > 获取接口数据-- > 与之前数据拼接-- > 更新可视区域数据-- > 计算偏移量;
  async function onScroll() {
    // 当前滚动位置
    const scrollTop: any = document.querySelector('#list-container')?.scrollTop;

    console.log('scrollTop', scrollTop);

    // 获取当前开始索引
    const start = Math.floor(scrollTop / itemHeight);
    // 获取当前结束索引
    const end = start + visibleCount;
    // 获取数据
    if (end > listData.length) {
      await getInfiniteList();
    }
    // 计算偏移量
    setStartOffset(scrollTop - (scrollTop % itemHeight));
  }

  return (
    <>
      {/* <Card className='card-common'>
        <Title title='无限滚动方案' /> */}
      <div id="list-container" className="infinite-list-container" onScroll={onScroll}>
        <div className="scrollTopBtn">回到顶部</div>
        <div className="infinite-list-phantom" style={{ height: listData.length * itemHeight }}></div>
        <div className="infinite-list" style={{ transform: transform }}>
          {visibleData.map(item => {
            return (
              <div
                key={item.id}
                className="infinite-list-item"
                style={{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }}
              >
                <div className="left-section">{item.title[0]}</div>
                <div className="right-section">
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* </Card> */}
    </>
  );
};
export default CircultionScroll;
