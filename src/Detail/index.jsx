import React from 'react';
import { Row, Col, Typography, Button, Modal, Table, Card, Tag, Skeleton, Image } from 'antd';
import { DownloadOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import querystring from "querystring"

import './index.css'

const { Title, Paragraph, Text} = Typography;

const testData = {
    "title": "CLDAS土壤湿度分析产品（2018-2020）",
    "details": ["时间分辨率：小时", "空间分辨率：0.0625°", "格式：tif", "大小：3G", "时间范围：2018-2020"],
    "description": ["“CLDAS 土壤湿度分析产品”为覆盖亚洲区域（0°-65°N，60°-160°E）， 逐小时、垂直分为 5 层（0-5，0-10，10-40，40-100，100-200cm），0.0625°× 0.0625°等经纬度网格的土壤湿度产品，近实时产品滞后 2d。"],
    "quality": ["利用中国区域业务的质量控制后的土壤湿度自动站观测资料对CLDAS-V2.0 土壤湿度数据产品进行了评估，结果表明：CLDAS 土壤湿度产品 与地面实际观测吻合度较高；全国区域平均相关系数为 0.89，均方根误差为 0.02m3/m3，偏差为 0.01 m3/m3。"],
    "usage": ["数据以tif格式存储，可以用Arcgis、ENVI等空间数据处理软件打开读取，以图像形式表达。"],
    "cite": ["中国气象数据中心（暂时先填这个）"],
    "fund": ["内蒙古自治区科技重大科技专项（2020ZD0009）"],
    "copyright": ["为尊重知识产权、保障数据作者的权益、评估数据的应用潜力，请数据使用者在使用数据所产生的研究成果中（包括公开发表的论文、论著、数据产品和未公开发表的研究报告、数据产品等成果），明确注明数据来源和数据作者。对于转载（二次或多次发布） 的数据，作者还须注明原始数据来源。"],
    "author": ["中国气象数据中心"],
    "download": "https://s1.ax1x.com/2022/09/07/vH5QhR.png",
    "file_list": [{ "name": "filename1", "size": "1.23MB" }, { "name": "filename2", "size": "4.56MB" }]
}



const first_child = ["quality", "usage", "cite", "fund", "copyright", "author"]
const second_child = ["details"]
const list_name = {
    "keyword": "关键词", "download": "数据下载", "description": "数据描述", "quality": "产品质量", "usage": "数据使用方法", "cite": "数据引用", "fund": "资助项目", "copyright": "数据使用条款", "author": "数据资源提供者", "details": "数据细节", "file_list": "文件列表"
}
const columns = [
    {
        title: '文件名',
        dataIndex: 'name',
        width: '80%'
    },
    {
        title: '大小',
        dataIndex: 'size',
    },
];
class Home extends React.Component {
    dataProcess = (getData) => {
        // console.log("IN DATAPROCESS")
        // console.log(getData)
        var myFirstData = []
        var mySecondData = []
        for (var item in getData) {
            if (first_child.indexOf(item) !== -1) {
                myFirstData.push({
                    name: list_name[item],
                    content: getData[item]
                })
                // console.log('good', item, testData[item])
            }
            else if (second_child.indexOf(item) !== -1) {
                mySecondData.push({
                    name: list_name[item],
                    content: getData[item]
                })
            }
        }
        this.setState({
            firstData: myFirstData,
            secondData: mySecondData,
            allData: getData,
            visible: false,
            loading: false
        })
    };
    constructor() {
        super();
        var myFirstData = []
        var mySecondData = []
        for (var item in testData) {
            if (first_child.indexOf(item) !== -1) {
                myFirstData.push({
                    name: list_name[item],
                    content: testData[item]
                })
                // console.log('good', item, testData[item])
            }
            else if (second_child.indexOf(item) !== -1) {
                mySecondData.push({
                    name: list_name[item],
                    content: testData[item]
                })
            }
        }
        this.state = {
            firstData: myFirstData,
            secondData: mySecondData,
            allData: testData,
            visible: false,
            loading: true,
            download: false
        }
        // console.log(myFirstData)
    };
    componentDidMount() {
        const data_id = querystring.parse(this.props.location.search.slice(1)).id
        // console.log(data_id)
        if (data_id === undefined) {
            this.dataProcess(testData)

        }
        else {

            axios.post('/hydrologyAPI/data/', { "data_id": data_id }).then((response) => {
                // console.log(response)
                this.dataProcess(response.data.data)
            });
        }
    }
    render() {
        const showModal = () => {
            this.setState({
                visible: true,
            });
        };
        const hideModal = () => {
            this.setState({
                visible: false,
            });
        };
        const showDownload = () => {
            this.setState({
                download: true,
            });
        };
        const hideDownload = () => {
            this.setState({
                download: false,
            });
        };
        return (
            <div className='detail-background' >

                <div className='detail-bg'>
                    <Skeleton active loading={this.state.loading} paragraph={{ rows: 30 }}>
                        <Row gutter={20}>
                            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                                <Card className='detail-card'>
                                    <Row className='detail-title'>
                                        <Title level={2}>{this.state.allData.title}</Title>
                                    </Row>
                                    <Row className='detail-section'>
                                        <Title level={4}>{list_name.description}</Title>
                                        <Row gutter={20}>
                                            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                                                {this.state.allData.description.map((sub_item, sub_index) => {
                                                    return (
                                                        <Paragraph key={sub_index}>{sub_item}</Paragraph>
                                                    )
                                                })}
                                                {/* <Paragraph >{this.state.allData.description}</Paragraph> */}
                                            </Col>
                                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                                <Image
                                                    width="100%"
                                                    src={this.state.allData.picture}
                                                    // src="https://s1.ax1x.com/2022/09/07/vH5QhR.png"
                                                />
                                                {/* <img src="https://s1.ax1x.com/2022/09/07/vH5QhR.png" alt='alt' width="100%"></img> */}
                                            </Col>
                                        </Row>
                                    </Row>
                                    {this.state.firstData.map((item, i) => {
                                        return (
                                            <Row className='detail-section' key={i}>
                                                <Title level={4}>{item.name}</Title>
                                                {item.content.map((sub_item, sub_index) => {
                                                    return (
                                                        <Paragraph key={sub_index}>{sub_item}</Paragraph>
                                                    )
                                                })}
                                            </Row>)
                                    })}
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                <Row className='detail-section'>
                                    <Card className='detail-keyword detail-card detail-card-second'>
                                        <Title level={4}>{list_name.keyword}</Title>
                                        <Text>学科：</Text>
                                        <br></br>
                                        <Tag color="gold">土壤湿度</Tag>
                                        <Tag color="gold">亚洲区域</Tag>

                                        <br></br>

                                        <Text>主题：</Text>
                                        <br></br>
                                        <Tag color="green">地表水</Tag>
                                        <Tag color="green">水文断面</Tag>
                                        <Tag color="green">流量</Tag>
                                        <Tag color="green">径流</Tag>
                                        <br></br>

                                        <Text>时间：</Text>
                                        <br></br>
                                        <Tag color="blue">2018</Tag>
                                        <Tag color="blue">2019</Tag>
                                        <Tag color="blue">2020</Tag>
                                        <br></br>


                                        {/* {this.state.allData.details.map((sub_item, sub_index) => {
                                        return (
                                            <div key={sub_index}>
                                                <Text>{sub_item}</Text>
                                                <br />
                                            </div>
                                        )
                                    })} */}
                                    </Card>
                                </Row>

                                <Row className='detail-section'>
                                    <Card className='detail-card-second'>
                                        <Title level={4}>{list_name.details}</Title>
                                        {this.state.allData.details.map((sub_item, sub_index) => {
                                            return (
                                                <div key={sub_index}>
                                                    <Text>· {sub_item}</Text>
                                                    <br />
                                                </div>
                                            )
                                        })}
                                    </Card>
                                </Row>
                                <Row className='detail-section'>
                                    <Card className='detail-card-second'>
                                        <Title level={4}>{list_name.download}</Title>

                                        <Row className='detail-button-row'>
                                            <Button icon={<UnorderedListOutlined />} onClick={showModal}>
                                                文件列表
                                            </Button>

                                        </Row>
                                        <Row className='detail-button-row'>

                                            <Button type="primary" icon={<DownloadOutlined />} onClick={showDownload}>
                                                数据申请
                                            </Button>
                                        </Row>
                                    </Card>
                                </Row>
                            </Col>
                        </Row>
                    </Skeleton>
                    <Modal
                        title={list_name.file_list}
                        visible={this.state.visible}
                        onOk={hideModal}
                        onCancel={hideModal}
                        footer={[
                            <Button key="confirm" type="primary" onClick={hideModal}>OK</Button>
                        ]}
                    >
                        <Table columns={columns} dataSource={[{ "name": this.state.allData.title, "size": "0MB" }]} size="small" />
                    </Modal>
                    <Modal
                        title={"数据申请"}
                        visible={this.state.download}
                        onOk={hideDownload}
                        onCancel={hideDownload}
                        footer={[
                            <Button key="confirm" type="primary" onClick={hideModal}>OK</Button>
                        ]}
                    >
                        <div>请下载并填写<a href={process.env.PUBLIC_URL + '/file/Heliu1.geojson'}>数据申请表</a>并发送到<a href='mailto:test@example.com'>申请邮箱</a>，我们会第一时间联系您。</div>
                    </Modal>
                </div>
            </div>

        )
    }
}
export default withRouter(Home);
