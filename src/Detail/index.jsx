import React from 'react';
import { Row, Col, Typography, Button } from 'antd';

import './index.css'

const { Title, Paragraph, Text, Link } = Typography;

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
    "file_list": ["filename1", "filename2"]
}



const first_child = ["description", "quality", "usage", "cite", "fund", "copyright", "author"]
const second_child = ["details"]
const list_name = { "description": "数据描述", "quality": "产品质量", "usage": "数据使用方法", "cite": "数据引用", "fund": "资助项目", "copyright": "数据使用条款", "author": "数据资源提供者", "details": "数据细节" }
export default class Home extends React.Component {
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
                console.log('good', item, testData[item])
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
            allData: testData
        }
        console.log(myFirstData)
    }
    render() {
        return (
            // <div className='detail-bg'>
            //     <Row className='detail-title'>
            //         <span>
            //             {this.state.data.title}
            //         </span>
            //     </Row>
            //     <Row className='detail-download'>
            //         <Button type="primary" size="large" href={this.state.data.download} >下载数据</Button>
            //     </Row>
            //     <Card className='detail-card'>
            //         <Col className='detail-card-content'>

            //             {this.state.data.content.map((item, i) => {
            //                 return (
            //                     <Row className='detail-section'>
            //                         <span className='detail-section-title'>{item.name}</span>
            //                         {item.content.map((sub_item, sub_index) => {
            //                             return (
            //                                 <p className={item.className + ' detail-section-content'}>{sub_item}</p>
            //                             )
            //                         })}
            //                     </Row>)
            //             })}
            //         </Col>
            //     </Card>
            // </div>
            <div className='detail-bg'>
                <Row gutter={40}>
                    <Col span={16}>
                        <Row className='detail-title'>
                            <Title level={2}>{this.state.allData.title}</Title>
                        </Row>
                        {this.state.firstData.map((item, i) => {
                            return (
                                <Row className='detail-section'>
                                    <Title level={4}>{item.name}</Title>
                                    {item.content.map((sub_item, sub_index) => {
                                        return (
                                            <Paragraph>{sub_item}</Paragraph>
                                        )
                                    })}
                                </Row>)
                        })}
                    </Col>
                    <Col span={8}>
                        <Row className='detail-section'>
                            <Title level={4}>{list_name.details}</Title>
                            {this.state.allData.details.map((sub_item, sub_index) => {
                                return (
                                    <div>
                                        <Text>{sub_item}</Text>
                                        <br />
                                    </div>
                                )
                            })}
                        </Row>
                        <Row className='detail-section'>
                            <Row className='detail-button-row'>
                                <Button icon="download">
                                    文件列表
                                </Button>

                            </Row>
                            <Row className='detail-button-row'>

                                <Button type="primary" icon="download">
                                    数据下载
                                </Button>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}