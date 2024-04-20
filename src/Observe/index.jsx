import React from 'react';
import { Row, Col, Typography, Button, Modal, List, Card, Tag, Image, Avatar,Divider  } from 'antd';
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
            title: "黄河内蒙古段生态水文综合观测试验",
            subtitle: "",
            picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project1.title.png",
            text: "“黄河流域内蒙古段生态-水文过程综合观测试验”是围绕内蒙古科技厅“黑河流域生态-水文集成研究”重大研究计划中的核心科学目标，以黄河流域内蒙古段已建立的观测系统以及2020～2023年开展的“黄河流域内蒙古段综合观测试验”成果为基础，联合多学科、多机构、多项目的科研人员，于2020～2023年在黄河流域内蒙古段开展的卫星、无人机及地面观测互相配合的多尺度综合观测试验。",
            link: "/project?id=1"

        },
        {
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/waterLogo.png",
            title: "黄河内蒙古段生态水文专题试验",
            subtitle: "",
            picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project2.title.jpg",
            text: "“黄河内蒙古段生态水文综合观测试验”专题试验是针对特定的水文或生态过程，组织开展的综合性加强试验，包括流域植被生态和土壤特性调查试验、中小尺度无人机遥感观测试验、不同侵蚀类型区植被格局的生态及水文观测实验等。为系统辨析流域生态水文与气象、土壤、环境要素的时空演变规律，提出符合流域内不同地貌单元自身生态特点的生态修复模式，研究流域生态水文耦合机理、退化和恢复机制等提供坚实的基础。",
            link: "/project?id=2"

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
                        {index != 0 && 
                        <Row className='observe-project-divider'>
                            <Divider />
                        </Row>}
                        <Row className='observe-project-title-row observe-project-title-row'>
                            <Col span={24} style={{ textAlign: "center" }}>
                                <div style={{ textAlign: "center" }}>
                                    {/* <Avatar style={{ float: "none" }} size={64} src={item.logo} /> */}
                                    <h1 className='observe-project-title-h1'>{item.title}</h1>
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
                                    <Col className='observe-project-description'>
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






                {/* <Row className='observe-project-title-row observe-project-title-row' style={{marginTop: "80px"}}>
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
                </Row> */}





            </div>

        )
    }
}
export default withRouter(Home);
