import React from 'react';
import { Row, List, Input, Card } from 'antd';
import { withRouter } from 'react-router-dom';
import querystring from "querystring"

import './index.css'

const { Search } = Input;
const { Meta } = Card;

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: '/detail',
  title: i % 2 === 0 ? `part ${i}` : `CLDAS土壤湿度分析产品CLDAS土壤湿度分析产品 part ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
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
            grid={{ gutter: 16, column: 4 }}
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
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                  >
                    <Meta className="search-result-card-meta" title={item.title} description="" />
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