import React from 'react';
import { Row, Col, Typography, Button, Modal, Avatar, Card, Tag, List, Image, Tabs } from 'antd';
import { DownloadOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import querystring from "querystring"

import './index.css'

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const staticData = {
    plan: [
        {
            title: "实验介绍",
            description: "黑河流域生态-水文过程综合遥感观测联合试验（简称“黑河生态水文遥感试验”，英文名称Heihe Watershed Allied Telemetry Experimental Research，简称HiWATER），由国家自然科学基金委员会重大研究计划“黑河流域生态－水文过程集成研究”（以下简称“黑河计划”）和中国科学院“西部行动计划”联合发起组织，以黑河流域已建立的观测系统以及2007～2009年开展的“黑河综合遥感联合试验”成果为基础，联合多学科、多机构、多项目的科研人员，计划于2012～2015年在黑河流域开展的一次卫星和航空遥感及地面观测互相配合的多尺度综合观测试验。 试验的总体目标是显著提升对流域生态和水文过程的观测能力，建立国际领先的流域观测系统，提高遥感在流域生态-水文集成研究和水资源管理中的应用能力。其中，在基础观测方面的具体目标包括：\n（1）建立支持流域科学研究和水资源综合管理的流域观测系统。\n（2）精细观测流域水循环各分量，获取水循环各分量的多尺度观测数据。\n（3）获取理解内陆河流域生态系统动态变化的多尺度观测数据。在遥感产品和真实性检验方面的目标包括：\n（4）在综合试验基础上，制备一套支持流域-生态水文集成研究的高精度遥感产品。\n（5）开展真实性检验试验，验证遥感模型及遥感产品。在应用方面的目标是：\n（6）将综合观测数据和遥感产品用于上游寒区分布式水文模型、中游地表水-地下水-农作物生长耦合模型、下游生态耗水模型，通过实证研究提升遥感在流域生态-水文集成研究和水资源管理中的应用能力。"
        },
        {
            title: "总体设计",
            description: "“黑河生态水文遥感试验”在黑河流域选择3个重点试验区开展加强和长期观测试验。选择黑河上游干流流域作为寒区水文试验区，在流域、八宝河子流域和葫芦沟小流域三个尺度上开展观测研究；在中游的人工绿洲－河岸生态系统－湿地－荒漠复合体内，选择两个典型的区域――盈科灌区与大满灌区、以及平川灌区作为中游人工绿洲试验区；在下游沙漠戈壁－额济纳胡杨林－戈壁－尾闾湖区，选择额济纳核心绿洲至西北方向的乌兰图格嘎查为下游天然绿洲试验区。加强试验将在2012年首先从中游展开，并顺次开展上游和下游加强试验，全流域持续观测期从2013年到2015年，航空遥感数据获取主要在2012年夏季。“黑河生态水文遥感试验”由基础试验、专题试验、应用试验、产品与方法研究和信息系统组成。基础试验是以建设观测系统，提供基础数据，提升观测能力，发展观测方法为目标的观测试验，具体包括航空遥感试验、流域水文气象观测网、生态水文无线传感器网络和定标与真实性检验四个部分。专题试验是针对特定的水文或生态过程，而组织开展的综合性加强试验。目前，已设计了“非均匀下垫面多尺度地表蒸散发观测试验”，但在“黑河生态水文遥感试验”执行期间，还将根据特定的科学目标，组织开展土壤水分等其他专题试验。应用试验的目标是针对流域上、中、下游各具特色的生态-水文过程，以综合观测试验为手段，检验和标定生态-水文模型，实证遥感产品和其他观测数据在流域生态-水文集成研究和水资源管理中的应用能力，包括：上游寒区遥感水文试验、中游灌区遥感支持下的灌溉优化配水试验、下游绿洲生态耗水尺度转换遥感试验。产品与方法研究是在基础试验、专题试验和应用试验的支持下，开展全流域生态-水文关键参量遥感产品生产，发展尺度转换方法，开展多源遥感数据同化研究，具体包括水循环遥感产品、生态过程关键参量遥感产品、尺度转换方法、多源遥感数据同化。“黑河生态水文遥感试验”信息系统包括卫星遥感数据收集、数据质量控制和自动综汇系统。"
        },
        {
            title: "试验区",
            description: "以具有高寒与干旱区伴生鲜明特征的黑河流域为试验区，选择3个重点试验区开展加强和长期观测试验。（1）上游寒区试验区：选择黑河主干流上游（10,009 km2）及大野口流域（70 km2）为重点试验区。在干流山区流域、子流域（八宝河流域）、小流域（葫芦沟和大野口）三个尺度上开展观测试验。八宝河流域是黑河流域干流的上游子流域之一。八宝河发源于峨堡东的景阳岭，自东向西河流长约105 km，流域面积约2452 km2，介于100°06.00′~101°09.05′E，37°43.01′~38°19.02′N之间；流域海拔在2640 ~ 5000m之间，属大陆性高寒山区气候，年平均气温1°C，年降水量为270-600 mm。植被覆盖以天然草地为主，包含高山和高寒草甸／草原等类型，流域西部山区分布有少量灌木林和青海云杉林，4200 m以上有常年积雪和永久冰川；冻土现象相当发育，多年冻土分布下限大约在3600 m。八宝河流域是结合遥感开展冻土水文研究的理想流域。在该子流域内重点观测获取空间分布的积雪和冻土水文模型的驱动数据和模型参数。葫芦沟流域，位于黑河流域上游西支。该流域内分布有几乎所有的寒区典型下垫面类型，包括高山草原、高山草甸、沼泽化草甸、河谷灌丛、山坡灌丛、青海云杉、祁连圆柏，并且季节性冻土、多年冻土、高山寒漠、积雪和冰川共存。流域内已建立黑河上游生态水文试验研究站，主要开展寒区水文、寒区生态和寒区生态水文研究工作。大野口流域，是一个独立水系，大野口水库以上汇水面积为70 km2，主要树种为青海云杉。中科院寒旱所内陆河流域研究站及甘肃省祁连山水源涵养林研究院在大野口流域内设置有多处森林水文观测设施。（2）中游人工绿洲试验区：在中游的人工绿洲－河岸生态系统－湿地－荒漠复合体内，选择两个典型的区域－－盈科灌区与大满灌区、以及平川灌区作为核心观测区，两个区都属大陆性干旱气候类型，光照充足，降水稀少，蒸发强烈。其中，盈科与大满灌区位于黑河流域中游张掖市黑河主干道以东沿岸，海拔在1400～1600 m之间。盈科与大满灌区是流域中游人工绿洲区域灌溉基础设施最完备的灌区，以河灌为主、井灌为辅。灌区主要种植小麦、制种玉米、大田玉米、蔬菜瓜果等作物。灌区内密布干、支和斗渠等各级灌溉渠系。灌区主要种植小麦、制种玉米、大田玉米、蔬菜瓜果等作物。平川灌区位于黑河流域中游临泽县境内，海拔1350～1500 m，面积约450 km2。平川灌区的主要特点是地表与地下水交换复杂，是开展地表地下水交换研究的最佳选择。灌区渠系水利用系数仅为0.517，田间水利用系数仅为0.878，渠首引进的有限水量在输水过程中和田间均造成大量损失，致使灌溉水利用系数仅为0.454。主要农作物以制种玉米为主，还有大田玉米、小麦、蔬菜、棉花、蕃茄等。（3）下游天然绿洲试验区：在下游沙漠戈壁－额济纳胡杨林－戈壁－尾闾湖区，选择额济纳核心绿洲至西北方向的乌兰图格嘎查为试验区，其中，额济纳核心绿洲二道桥东至七道桥典型河岸林区域为核心观测区。下游额济纳旗属于极端干旱气候区，多年平均降水量不足45 mm，多年平均潜在蒸发量为3755 mm，下游额济纳绿洲是天然的绿洲生态系统，其结构简单并极度脆弱，植被稀疏，以分布于河道两岸的乔木胡杨和灌木柽柳为主。在以上3个重点试验区内，按不同的试验目标嵌套布置核心观测区、观测小区和观测（采样）单元，开展多尺度观测试验。"
        },
        {
            title: "基础实验",
            description: "航空遥感包括以下试验内容：（a）开展激光雷达（LiDAR）、红外广角双模式成像仪（WIDAS）、成像光谱仪和CCD像机的航空遥感试验，利用激光雷达航空遥感获取葫芦沟流域的DEM，分辨率为1 m；结合激光雷达和航空高光谱遥感数据开展高分辨率植被功能型、土地利用、种植结构和植被结构参数制图，分辨率为1-5 m；发展和改进地表温度、发射率、叶面积指数、粗糙度、反照率、亚像元积雪面积比例等关键生态水文变量／参数的遥感反演和估计方法。（b）开展L, K和Ka波段微波辐射计航空遥感试验，获取高精度的亮度温度数据，研究多频率、多极化机载微波辐射计反演雪深和雪水当量的方法。研究利用机载微波辐射计反演地表土壤水分、监测地表冻融循环的方法；针对植被和地表粗糙度对微波观测的影响，发展和改进土壤水分反演方法。"
        },
        {
            title: "专题实验",
            description: "蒸散发观测极具挑战性，和能量平衡闭合、通量尺度上推等复杂问题均有密切联系。在“黑河生态水文遥感试验”中，我们设计了密集的涡动相关仪、大孔径闪烁仪与自动气象站的矩阵方式观测试验，力求捕捉地表-大气水热交换的三维动态特征。为理解蒸散发过程，揭示地表蒸散发的空间异质性及其影响因子，实现非均匀下垫面地表蒸散发的尺度扩展提供基础观测数据；也为蒸散发遥感估算模型的发展与验证等提供像元尺度的地面真值。观测方案是：在黑河流域中游核心绿洲区设立30km×30km、5.5km×5.5km 两个嵌套试验区。在30km×30km试验区内，构建“一横一纵”的观测系统，包括1个超级站、4个普通站，各配置一台涡动相关仪。在5.5km×5.5km 试验区内，根据作物结构、防护林朝向、村庄与道路分布、土壤水分与灌溉状况等将该区域划分成17个小区，每个小区内架设一台涡动相关仪和自动气象站。3台大孔径闪烁仪贯穿矩阵区域中间3×3 个MODIS 像元。在大满超级站，架设1台大孔径闪烁仪横跨两个MODIS像元。光径路线中间设置1个40米气象塔作为超级站。利用稳定同位素技术开展单点连续以及多点同步的土壤蒸发与植被蒸腾的分割观测。利用热扩散液流测量系统观测树木蒸腾量。"
        },
        {
            title: "应用实验",
            description: "开展针对性的综合观测试验，验证和标定包含了冻土过程的寒区分布式水文模型；通过航空-地面遥感试验验证复杂地形条件下的亚像元积雪面积比例产品算法，发展积雪面积和雪水当量之间的动态函数关系；以降水同化产品作为主要驱动之一，将积雪面积和土壤水分遥感产品同化到寒区水文模型中，改进山区径流——特别是春季径流的预报精度。寒区遥感水文试验主要在流域尺度和网格尺度进行。流域尺度试验在黑河上游、八宝河流域以及葫芦沟小流域开展: ①黑河上游试验区以获取时间和空间分布的积雪水文与冻土水文模型驱动为主要目标，模型参数以卫星遥感手段为主，验证数据主要为径流观测和遥感可反演／估算的表层水热状态变量；②八宝河子流域以获取高分辨率驱动、空间分布的模型参数（土壤和植被）、高密度的径流为主要观测目标；③葫芦沟小流域以获取高精度的驱动数据、模型参数、模型状态变量为主，获取积雪水文和冻土水文模型的发展、验证和改进所需的完整数据集。网格尺度试验：应对一维或网格尺度的积雪与冻土水热过程，分别建立积雪和冻土综合观测场。积雪试验场选择葫芦沟小流域内较为平坦的场地，以积雪积累与消融中的质量和能量平衡过程观测为重点，重点考虑积雪面积和雪水当量的空间变化；冻土试验场选择阿柔超级站，以土壤水热过程观测为重点，尤其是土壤的冻融循环过程。"
        },
        {
            title: "产品与方法研究",
            description: "基于端元自动获取技术的非线性光谱混合分析模型，发展一种适用于黑河上游山区复杂地形条件下的MODIS积雪覆盖比例提取算法，形成规范化的算法软件，并制备500m分辨率的逐日积雪面积比例产品。利用ASAR全球模式后向散射数据和MODIS植被指数产品，发展监测地表土壤水分的时间序列变化检测算法，制备黑河流域1km分辨率的地表土壤水分遥感产品。以中尺度大气模型WRF为骨架，分两层嵌套同化被动微波遥感及多普勒雷达和地面降水观测资料，制备1-5km分辨率逐小时降水产品。在地面-航空-卫星同步试验的支持下，开展以上产品的真实性检验和质量评估。"
        },
        {
            title: "Hiwater信息系统",
            description: "高度重视数据的质量控制，实现全过程的数据质量管理。在试验前编写观测规范、完成人员培训、仪器比对与标定，建立无线传感器网络的数据自动综汇，实现数据的自动采集、传输、发布以及对各种观测节点的远程控制。在观测试验过程中，同周期完成数据的质量控制、元数据和数据文档制备以及大部分数据的入库；落实技术巡检和数据规范化措施。在试验后期完成数据处理、数据汇交、数据入库，并通过“黑河计划”数据中心发布与共享试验数据。"
        },
    ],
    communication: {
        description: "“黑河生态水文遥感试验”热忱欢迎国内外相关研究机构和个人的参与，欢迎合作者自带仪器和相关试验经费参与试验。参与的程序如下： 　合作者（参与试验的小组或个人）围绕“黑河生态水文遥感试验”的总体设计，提出自己拟解决的科学问题、研究方案、数据和观测需求并说明自己所能匹配的仪器、人员等，提交试验计划和研究目标，试验计划通过试验总体组评估后，合作者按试验的总体安排参与试验，并有权获取试验计划中相应的观测数据。",
        picture: "https://s11.ax1x.com/2024/01/25/pFmKHdx.jpg"
    },
    partner: [
        {
            title: "国家自然科学基金委员会",
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/observe-hiwater/gjzrkxjjwyh.jpg"
        },
        {
            title: "中国科学院",
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/observe-hiwater/zgkxy.jpg"
        },
        {
            title: "中科院寒区旱区环境与工程研究所",
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/observe-hiwater/zkyhhygydlxxkxyjs.jpg"
        },
        {
            title: "北京师范大学",
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/observe-hiwater/bjsfdx.jpg"
        },
        {
            title: "中科院遥感应用研究所",
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/observe-hiwater/zkyygyyyjs.jpg"
        },
        {
            title: "中科院地理科学与资源研究所",
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/observe-hiwater/zkyygyyyjs.jpg"
        },
        {
            title: "中科院东北地理与农业生态研究所",
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/observe-hiwater/zkydbdkynystyjs.jpg"
        },
        {
            title: "中科院计算机网络信息中心",
            logo: "https://heihe.tpdc.ac.cn/static/static-heihe/img/observe-hiwater/zkyjsjwlxxzx.jpg"
        },

    ]
}


class Home extends React.Component {
    constructor() {
        super();
    };
    componentDidMount() {
        const data_id = querystring.parse(this.props.location.search.slice(1)).id
        // console.log(data_id)
        if (data_id === undefined) {

        }
        else {

            // axios.post('/hydrologyAPI/data/', { "data_id": data_id }).then((response) => {
            //     // console.log(response)
            //     this.dataProcess(response.data.data)
            // });
        }
    }
    render() {
        return (
            <div className='project-background' >
                <Row className="project-row">
                    <Col span={24}>
                        <div className="project-banner">
                            <div className="project-banner-content">
                                <h1> HiWATER</h1>
                                <p>黑河流域生态-水文过程综合遥感观测联合试验</p>
                                <span>Heihe Watershed Allied Telemetry Experimental Research</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="project-row">
                    <Col span={24}>
                        <div className="project-content">
                            <Row className="project-row">
                                <Col span={24}>
                                    <h1>实验计划</h1>
                                </Col>
                            </Row>

                            <Row className="project-row">
                                <Col span={24}>
                                    <Tabs
                                        className="project-tab"
                                        defaultActiveKey="1"
                                        centered
                                        items={staticData.plan.map((item, i) => {
                                            return {
                                                label: item.title,
                                                key: i,
                                                children: item.description,
                                            };
                                        })}
                                    />
                                </Col>
                            </Row>

                            <Row className="project-row project-title">
                                <Col span={24}>
                                    <h1>合作交流</h1>
                                </Col>
                            </Row>

                            <Row className="project-row project-row-margin" gutter={30}>

                                <Col span={16} style={{ textAlign: "left" }}>
                                    {staticData.communication.description}
                                </Col>
                                <Col span={8}>
                                    <Image
                                        src={staticData.communication.picture}
                                    />
                                </Col>

                            </Row>


                            <Row className="project-row project-title">
                                <Col span={24}>
                                    <h1>合作单位</h1>
                                </Col>
                            </Row>

                            <Row className="project-row project-row-margin" gutter={30}>
                                <Col span={24}>
                                    <List
                                    className='project-partner-list'
                                        grid={{
                                            gutter: 16,
                                            xs: 1,
                                            sm: 2,
                                            md: 3,
                                            lg: 3,
                                            xl: 3,
                                            xxl: 3,
                                        }}
                                        dataSource={staticData.partner}
                                        renderItem={item => (
                                            <List.Item>
                                                <Card
                                                    style={{ height: 85 }}
                                                >
                                                    <Meta
                                                        avatar={<Avatar src={item.logo} />}
                                                        description={item.title}
                                                    />
                                                </Card>
                                            </List.Item>
                                        )}
                                    />
                                </Col>
                            </Row>

                        </div>
                    </Col>


                </Row>




            </div>

        )
    }
}
export default withRouter(Home);
