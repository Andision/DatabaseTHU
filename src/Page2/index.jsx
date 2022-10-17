import React from 'react';
import { Row, List, Input } from 'antd';
import { withRouter } from 'react-router-dom';
import querystring from "querystring"

import './index.css'

const { Search } = Input;

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: '/detail',
  title: `ant design part ${i}`,
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
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 5,
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
              <a href={item.href} style={{color:"rgba(0, 0, 0, 0.65)"}}>

                <List.Item
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
                  {/* <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                /> */}
                  {item.content}
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