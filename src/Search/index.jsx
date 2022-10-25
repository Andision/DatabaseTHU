import React from 'react';
import { Row, List, Input, Card } from 'antd';
import { withRouter } from 'react-router-dom';
import querystring from "querystring"
import {
  EyeOutlined
} from '@ant-design/icons';

import './index.css'

const { Search } = Input;
const { Meta } = Card;

const test_pic = [
  "https://heihe.tpdc.ac.cn/thumbnails-cache/99c8eabc-7d7a-491a-83f9-192de67eea65/3dd4cfc8-d01a-41d1-bdf2-89da92fb8878_middle.png.thumb.png",
  "https://heihe.tpdc.ac.cn/thumbnails-cache/ae3aa286-60f0-489b-b540-af118af01488/711fe6d7-6e75-490e-af49-723d781c4698_middle.png.thumb.png",
  "https://heihe.tpdc.ac.cn/thumbnails-cache/03b61d9d-5a04-4509-9b71-d328d52a345c/9bad2929-bc35-49ad-a355-cffda4127111_middle.jpg.thumb.png",
  "https://heihe.tpdc.ac.cn/thumbnails-cache/ecd1c395-0020-4aac-8d4e-5333e0ab2b4d/98258522-0d06-480b-9f35-5c0117b8dd5f_middle.jpg.thumb.png"
]

const test_title = [
  "黑河中游甘临高区域42部门价值型投入产出表（2012）",
  "基于CMIP5气候情景的黑河流域未来降水的降尺度模拟（2011-2100）",
  "青藏高原北部高山集水区综合水文地质和水文地球化学数据集（2012-2020）",
  "沙冬青的干旱胁迫响应特征",
]

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: '/detail',
  title: test_title[(i % 4 + Math.floor(i / 4)) % 4],
  pic: test_pic[(i % 4 + Math.floor(i / 4)) % 4],
  avatar: 'https://joeschmoe.io/api/v1/random',
  description: Math.floor(Math.random() * 1000),
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

// const search = querystring.parse(this.props.location.search.slice(1))

class Home extends React.Component {
  componentDidMount() {
    // console.log(this.props.location.search)
    // console.log(querystring.parse(this.props.location.search.slice(1)))
    // this.setState(querystring.parse(this.props.location.search.slice(1)))
  }
  render() {
    const onSearch = (search) => {
      // this.setState({search:search})
      // console.log(search)
      window.history.pushState({}, '', '/search?search=' + search);
    };
    return (
      <div className='search-bg'>
        <Row className='search-title'>
          <span>
            数据检索
          </span>
        </Row>
        <Row className='search-searchbar-row'>
          <Search className='search-searchbar' placeholder="搜索关键字" defaultValue={querystring.parse(this.props.location.search.slice(1)).search} onSearch={onSearch} enterButton allowClear size="large" />
        </Row>
        <Row className='search-result'>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 12,
              position: 'bottom',
              // showQuickJumper:true,
              // showSizeChanger:true
            }
            }
            dataSource={data}
            footer={
              <div>
                {/* <b>ant design</b> footer part */}
              </div>
            }
            renderItem={item => (
              <a className="search-item" href={item.href}>

                {/* <List.Item
                  key={item.title}
                  // actions={[
                  //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                  // ]}
                  extra={
                    <img
                      width={272}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
                >
                  {item.content}
                </List.Item> */}
                <List.Item>
                  <Card
                    hoverable
                    tabBarExtraContent
                    className="search-result-card"
                    // style={{ width: 240 }}
                    cover={<img alt="example" src={item.pic} className="search-result-card-pic" />}
                  >
                    <Meta className="search-result-card-meta" title={item.title} description={<div><EyeOutlined />{' ' + item.description}</div>} />
                  </Card>
                </List.Item>
              </a>
            )}
          />
        </Row>
      </div>
    )
  }
}

export default withRouter(Home);