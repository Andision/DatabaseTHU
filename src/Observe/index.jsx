import React from 'react';
import { Row, Col, Typography, Button, Modal, List, Card, Tag, Image, Avatar } from 'antd';
import { DownloadOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import querystring from "querystring"

import './index.css'

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const staticData = {
    project: [
        {
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/hiwaterLogo.png",
            title: "HiWATER",
            subtitle: "黑河生态水文遥感试验",
            picture: "https://heihe.tpdc.ac.cn/static/static-heihe/img/hiwater.jpg",
            text: "“黑河流域生态-水文过程综合遥感观测联合试验”是围绕基金委“黑河流域生态-水文集成研究”重大研究计划中的核心科学目标，以黑河流域已建立的观测系统以及2007～2009年开展的“黑河综合遥感联合试验”成果为基础，联合多学科、多机构、多项目的科研人员，于2012～2015年在黑河流域开展的一次卫星和航空遥感及地面观测互相配合的多尺度综合观测试验。",
            link: "https://heihe.tpdc.ac.cn/static/static-heihe/img/hiwaterLogo.png"

        },
        {
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/waterLogo.png",
            title: "WATER实验",
            subtitle: "黑河综合遥感联合试验",
            picture: "https://heihe.tpdc.ac.cn/static/static-heihe/img/water.png",
            text: "“黑河综合遥感联合试验”是由中国科学院西部行动计划（二期）项目“黑河流域遥感 -地面观测同步试验与综合模拟平台建设”与国家重点基础研究发展计划（973计划）项目“陆表生态环境要素主被动遥感协同反演理论与方法”共同设计并组织实施。是在流域尺度上开展的，以水循环及与之密切联系的生态过程为主要研究对象的大型航空、卫星遥感与地面同步观测科学试验...",
            link: "https://heihe.tpdc.ac.cn/static/static-heihe/img/waterLogo.png"

        }
    ],
    dataset: [
        {
            title: "黑河流域中游L波段机载微波辐射计数据集",
            picture: "https://heihe.tpdc.ac.cn/thumbnails-cache/99c8eabc-7d7a-491a-83f9-192de67eea65/3dd4cfc8-d01a-41d1-bdf2-89da92fb8878_middle.png.thumb.png",
        },
        {
            title: "黑河流域中游L波段机载微波辐射计数据集",
            picture: "https://heihe.tpdc.ac.cn/static/static-heihe/img/hiwater.jpg",
        },
        {
            title: "黑河流域中游生态水文无线传感器网络WSN观测数据子集——PLMR飞行日数据",
            picture: "https://heihe.tpdc.ac.cn/thumbnails-cache/ecd1c395-0020-4aac-8d4e-5333e0ab2b4d/98258522-0d06-480b-9f35-5c0117b8dd5f_middle.jpg.thumb.png",
        },
        {
            title: "水文气象观测网数据集(张掖湿地站涡动相关仪)",
            picture: "https://s11.ax1x.com/2024/01/25/pFmEt9s.jpg",
        },
    ]
}


class Home extends React.Component {
    constructor() {
        super();
    };
    // componentDidMount() {
    //     const data_id = querystring.parse(this.props.location.search.slice(1)).id
    //     // console.log(data_id)
    //     if (data_id === undefined) {

    //     }
    //     else {

    //         axios.post('/hydrologyAPI/data/', { "data_id": data_id }).then((response) => {
    //             // console.log(response)
    //             this.dataProcess(response.data.data)
    //         });
    //     }
    // }
    render() {
        return (
            <div className='observe-background' >
                {staticData.project.map((item, index) => (
                    <div className='observe-project-row'>
                        <Row className='observe-project-title-row observe-project-title-row'>
                            <Col span={24} style={{ textAlign: "center" }}>
                                <div style={{ textAlign: "center" }}>
                                    <Avatar style={{ float: "none" }} size={64} src={item.logo} />
                                    <h1>{item.title}</h1>
                                    <p>{item.subtitle}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='observe-project-row' gutter={30} justify="center">
                            {index % 2 == 0 &&

                                <Col span={12}>
                                    <Image
                                        src={item.picture}
                                    />
                                </Col>
                            }
                            <Col span={12}>
                                <Row>
                                    <Col>
                                        {item.text}
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: 30 }}>
                                    <Col>
                                        <Button href={item.link}>了解更多</Button>
                                    </Col>
                                </Row>
                            </Col>
                            {index % 2 == 1 &&

                                <Col span={12}>
                                    <Image
                                        src={item.picture}
                                    />
                                </Col>
                            }
                        </Row>
                    </div>

                ))}

                <Row className='observe-project-title-row observe-project-title-row' style={{marginTop: "80px"}}>
                    <Col span={24} style={{ textAlign: "center" }}>
                        <div style={{ textAlign: "center" }}>
                            <h1>数据专题</h1>
                        </div>
                    </Col>
                </Row>
                <Row className='observe-project-row' style={{ marginTop: "0px" }}>
                    <Col span={24}>
                        <List
                            grid={{
                                gutter: 100,
                                column: 2,
                            }}
                            dataSource={staticData.dataset}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card
                                        bordered={false}
                                        className='observe-card'
                                        hoverable
                                        cover={<img alt="example" src={item.picture} style={{ height: "280px", backgroundSize: "contain", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundColor: "white" }}/>}
                                    >
                                        <Meta className="observe-card-meta" title="" description={item.title} />
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>





            </div>

        )
    }
}
export default withRouter(Home);
