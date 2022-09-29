import React from 'react';
import { Row, List, Avatar, Input } from 'antd';

import './index.css'

const { Search } = Input;

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

export default class Home extends React.Component {
  render() {
    // const onSearch = () => {
    // };
    return (
      <div className='search-bg'>
        <Row className='search-title'>
          <span>
            数据检索
          </span>
        </Row>
        <Row>
          <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton size="large" />
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
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </Row>
      </div>
    )
  }
}