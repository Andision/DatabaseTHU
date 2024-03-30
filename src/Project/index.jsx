import React, { useState } from 'react';
import { Row, Col, Typography, Button, Modal, Avatar, Card, Tag, List, Image, Tabs } from 'antd';
import { DownloadOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import querystring from "querystring"

import './index.css'

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const staticData1 = {
    title: "黄河内蒙古段生态水文综合观测试验",
    subtitle: "",
    english_title: "Comprehensive ecological and hydrological observation experiment on the Inner Mongolia section of the Yellow River",
    plan: [
        {
            title: "实验介绍",
            description: "“黄河流域内蒙古段生态-水文过程综合观测试验”是围绕内蒙古科技厅“黑河流域生态-水文集成研究”重大研究计划中的核心科学目标，以黄河流域内蒙古段已建立的观测系统以及2020～2023年开展的“黄河流域内蒙古段综合观测试验”成果为基础，联合多学科、多机构、多项目的科研人员，于2020～2023年在黄河流域内蒙古段开展的卫星、无人机及地面观测互相配合的多尺度综合观测试验。"
        },
        {
            title: "总体设计",
            description: "“黄河内蒙古段生态水文综合观测试验”在中小尺度蒸散发及水文气象要素观测试验的基础上，联合卫星、航空和地面等多观测手段，获取流域不同时空尺度、高精度的气象、生态、水文以及环境等要素的观测资料，解译高分辨率生态水文与气象、土壤、环境变量/参数的时空特征，建立黄河流域内蒙古段一体化综合观测试验平台和多尺度生态水文数据库，形成天-空-地交互的嵌套式多尺度生态水文一体化综合观测试验网络。“黄河内蒙古段生态水文综合观测试验”由基础试验、专题试验、产品与方法研究和信息系统组成。基础试验是以建设观测系统，提供基础数据，提升观测能力，发展观测方法为目标的观测试验，具体包括流域水文气象观测网、生态水文无线传感器网络和无人机/卫星遥感试验四个部分。专题试验是针对特定的水文或生态过程，而组织开展的综合性加强试验，包括流域植被生态和土壤特性调查试验、中小尺度无人机遥感观测试验、不同侵蚀类型区植被格局的生态及水文观测实验等。产品与方法是在基础试验、专题试验的支持下，开展全流域生态-水文关键参量遥感产品生产，发展尺度转换方法，具体包括水循环遥感产品、生态过程关键参量遥感产品、尺度转换方法。“黄河内蒙古段生态水文综合观测试验”信息系统包括地面观测数据、卫星遥感数据、产品数据和数据共享。"
        },
        {
            title: "试验区",
            description: "以黄河流域内蒙古段整个范围为试验区，黄河流域内蒙古段位于39.1°N～41.8°N、106.3°E～112.8°E，总面积为9.64万km2，年均温为5.0～8.5℃，其西北部、中北部、东部、东北部和南部分别属于内蒙古自治区巴彦淖尔市、包头市、呼和浩特市、乌兰察布市。黄河沿岸分布着大量灌溉农业区(灌区)，其中巴彦淖尔市境内为河套灌区，包头市境内有磴口灌区和黄河南岸灌区，呼和浩特市境内则有麻地壕灌区。鄂尔多斯市主要土地利用类型为草地和裸地，其中库布其沙漠和毛乌素沙地主要分布在鄂尔多斯市西部。由于植被覆盖度低，生态环境脆弱，库布其沙漠和毛乌素沙地也是近年来生态恢复的重点区域之一。河套灌区东部有研究区内最大的湖泊湿地——乌梁素海，而森林主要分布在降水量较高的区域，包括呼和浩特市麻地壕灌区以北地区和乌兰察布市。\n 根据不同片区的下垫面和特殊植被类型，自东向西沿黄河向上游选取了包括大黑河流域，西柳沟流域，昆都仑河流域，乌梁素海片区，杭锦后旗，磴口和乌海等地不同下垫面的典型实验点，如大黑河流域草地耕地，灌木地，林地混合地带，杭锦后旗的玉米和葵花地，磴口林地灌木地交错带，开展地面植被生态-湖泊水体-蒸散发-土壤水分-径流等生态水文要素的同步监测。"
        },
        {
            title: "基础实验",
            subtitle: true,
            sublist: [
                {
                    title: "自动气象土壤环境监测体系",
                    description: "(1) 自动气象-土壤环境监测站8套。在黄河流域内蒙古段布设，自建站起自动监测梯度风速、风向、温湿度、辐射、降水、蒸发、通量、土壤水分和地温等。(2) 自动传输雨量站8套。在河套灌区布设，自2018年起自动监测降雨过程。"
                },
                {
                    title: "水文监测点网",
                    description: "(1) 人工测流断面38个。在河套灌区流域，在总干流、干流、总干沟、干沟精准布设。对38个断面流量、流速进行同步监测。（2）构建现代化的无线传感器网络，度量生态水文模型所需的若干关键的驱动、参数和模型状态的空间异质性；形成自动化的遥感真实性检验系统。将在黄河流域内蒙古段试验区，以无线传感器网络为纽带，高效集成试验区内各种气象、水文及生态观测项目，建立自动化的、智能化的可远程控制的多尺度、多层嵌套的生态水文传感器综合观测网络，全面提高流域水文和生态过程的综合观测能力和观测自动化水平。"
                },
                {
                    title: "植被生态-土壤调查试验网",
                    description: "在黄河流域内蒙古段均匀布设植被生态-土壤连续调查点57个，2022年起于每年生长季参照卫星过境时间，调查测试植被生态特性和土壤环境参数。"
                },
                {
                    title: "无人机光学/热红外遥感试验",
                    description: "在黄河流域内蒙古段分别布设无人机光学/热红外遥感试验地面观测点共 26个，配合卫星遥感、航空遥感飞行开展地面同步场地定标观测试验。"
                },
                {
                    title: "场地定标与卫星/航空遥感的真实性试验",
                    description: "针对关键生态-水文过程的航空和卫星遥感产品，依托传感器网络，并辅之以必要的地面同步和加密观测，获取用于遥感产品真实性检验的地面观测数据集。在黄河流域内蒙古段德格纽河流域、河套灌区、西柳沟流域、磴口、杭锦后旗等多地分别布设地表样方156个（每个样点6个地面样方），对中小尺度蒸散发解译与地表水分反演进行验证。"
                },

            ],
            description: "航空遥感包括以下试验内容：（a）开展激光雷达（LiDAR）、红外广角双模式成像仪（WIDAS）、成像光谱仪和CCD像机的航空遥感试验，利用激光雷达航空遥感获取葫芦沟流域的DEM，分辨率为1 m；结合激光雷达和航空高光谱遥感数据开展高分辨率植被功能型、土地利用、种植结构和植被结构参数制图，分辨率为1-5 m；发展和改进地表温度、发射率、叶面积指数、粗糙度、反照率、亚像元积雪面积比例等关键生态水文变量／参数的遥感反演和估计方法。（b）开展L, K和Ka波段微波辐射计航空遥感试验，获取高精度的亮度温度数据，研究多频率、多极化机载微波辐射计反演雪深和雪水当量的方法。研究利用机载微波辐射计反演地表土壤水分、监测地表冻融循环的方法；针对植被和地表粗糙度对微波观测的影响，发展和改进土壤水分反演方法。",
            picture: ""
        },
        {
            title: "水循环及生态遥感产品",
            subtitle: true,
            sublist: [
                {
                    title: "蒸散发",
                    description: "基于彭曼方法构建适用于黄河流域内蒙古段的蒸散估算方法，本研究针对热传输空气动力学粗糙度长度（z0H）以及土壤热通量的计算方法，可有效提升该方法的蒸散估算精度，并估算了1982–2018年间的实际蒸散产品。"
                },
                {
                    title: "产水量",
                    description: "基于MERRA2年尺度的降水数据和年尺度的实际蒸散（基于彭曼方法估算），得到黄河流域内蒙古段1982–2018年的产水量（即降水和实际蒸散的差值）产品。基于灌溉条件下的土壤水量平衡，考虑灌溉用水量的多重归宿，系统推导了灌溉用水量计算公式，提出了利用遥感反演的实际蒸散和模型模拟的实际蒸散及土壤水分，估算灌溉用水量的新方法，并生成了黄河流域内蒙古段2003–2017年灌溉用水量数据集。"
                },
                {
                    title: "水库水面面积",
                    description: "采用GRSAD的方法，较准确地填补光学遥感反演水库逐月淹没区时出现的缺失值，从而较好地估算水库逐月的水域面积，并生成了万家寨水库2000~2021年水库水域面积产品。"
                },
                {
                    title: "土壤水分",
                    description: "发展了结合微波遥感反演土壤水机理的多层级神经网络，校正、融合7种不同时期的主、被动微波遥感数据，生成2003-2020年间旬尺度、时空连续的表层（约5cm）土壤水数据产品。"
                },
                {
                    title: "植被总初级生产力",
                    description: "结合大量碳水通量观测数据，采用机器学习方法推算植被最适生长温度和潜在光能利用率的空间格局，采用改进的光能利用率模拟获得了2001-2018年黄河流域内蒙古土段植被总初级生产力（Gross Primary Production, GPP）。"
                },
                {
                    title: "碳储量",
                    description: "采用地面数据校正主动微波反演的森林地上生物量，然后基于长时间序列的森林和非森林植被覆盖度以及多源被动微波反演的植被光学厚度，实现长时间森林地上生物量监测，最后通过训练随机森林模型估算2002-2020年地下生物量变化。"
                }
            ],
        },
        {
            title: "共享系统",
            subtitle: true,
            sublist: [
                {
                    title: "卫星遥感和产品数据",
                    description: "通过与国内外其他科研、教学机构合作，免费获取多种高时空分辨率遥感资料。（1）配合基础试验、专题试验和标定试验的卫星遥感数据获取；（b）面向全流域遥感产品生产、为流域生态水文模型同化和模拟积累遥感观测数据源的卫星遥感数据获取。"
                },
                {
                    title: "数据汇总和共享系统",
                    description: "在观测试验和研制数据过程中，同周期完成数据的质量控制、元数据和数据文档制备以及大部分数据的入库。完成数据处理、数据汇交、数据入库，并通过“黄河流域内蒙古段生态水文”综合观测平台发布与共享试验数据。"
                }
            ],
        },

    ],
    map_enable: true,
    map: ["http://cloud.gutemorgan.com:18888/ads/huanghe/project1.1.png"],
    communication: {
        description: "“黄河流域内蒙古段生态水文遥感试验”热忱欢迎国内外相关研究机构和个人的参与，欢迎合作者共享已观测或研制出的与研究区相关生态水文要素数据产品。参与的程序如下：合作者围绕“黄河流域内蒙古段生态水文遥感试验”的总体设计，提供拟解决的科学问题、研究方案、数据和观测，并附加观测实验或产品研制相关说明等，提交试验数据和产品，通过试验总体组评估后，合作者按有的数据类型、格式，会交数据和产品，并有权获取本试验中相应的观测数据。",
        picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project1.2.jpg"
    },
    partner_enable: false,
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

const staticData2 = {
    title: "黄河内蒙古段生态水文专题试验",
    subtitle: "",
    english_title: "Special Experiment on Ecology and Hydrology in the Inner Mongolia Section of the Yellow River",
    plan: [
        {
            title: "实验介绍",
            description: "“黄河内蒙古段生态水文综合观测试验”专题试验是针对特定的水文或生态过程，组织开展的综合性加强试验，包括流域植被生态和土壤特性调查试验、中小尺度无人机遥感观测试验、不同侵蚀类型区植被格局的生态及水文观测实验等。为系统辨析流域生态水文与气象、土壤、环境要素的时空演变规律，提出符合流域内不同地貌单元自身生态特点的生态修复模式，研究流域生态水文耦合机理、退化和恢复机制等提供坚实的基础。"
        },
        {
            title: "关键技术问题",
            description: "综合分析地面观测与遥感观测的多尺度效应，发展和完善流域尺度转换方法，建立黄河流域内蒙古段一体化综合观测试验平台和多尺度生态水文数据库，形成天-空-地交互的嵌套式多尺度生态水文一体化综合观测试验网络，解析多卫星联合、多源数据融合、多观测手段协同监测的误差传递规律，实现面向生态水文管理需求的天-空-地协同监测的科学目标。"
        },
        {
            title: "关键科学问题",
            description: "解析气候变化和人类活动影响下，不同地貌类型区生态系统与水资源互馈驱动机制，揭示气象-土壤-环境多维要素的时空变化特征及其协同效应，结合水资源承载力的空间分布、生态恢复模式的生态耗水特征及适宜水文阈值，分析不同地貌类型区水文生态安全风险，提出符合流域内不同地貌单元自身生态特点的生态修复模式。"
        },
        {
            title: "流域植被生态和土壤特性调查试验",
            subtitle: true,
            sublist: [
                {
                    title: "试验介绍",
                    description: "为全面掌握流域植物群落现状、分布及生境条件，同时考虑到人力和财力的限制以及荒漠区的特点，结合《中国植被分布图》，对流域主要植物群落进行调查，保证研究区中每一种主要自然群落类型都能得到调查；对研究区的地带性、特有、珍稀、濒危以及有特殊用途和重要经济价值的群落进行精查。在每个选定的调查点上，选择目标植物群落，设置一个100 m×100 m的样方，利用GPS定位。结合无人机低空航拍（垂直照片），清查样方内的所有乔、灌、草植物种类组成，记录珍稀濒危植物。在样方内系统设置10 m×10 m的灌木样方，1 m×1 m的草本样方，1个土壤剖面调查点（图1），开展主要植物群落特征调查。调查主要观测点区域的气候要素、地下水位、河流状况（季节性河流、冲沟）；调查观测点的土壤类型，测定土壤有机质、氮、磷、pH 值、机械组成和 土壤水分等理化性质；每个群落中，采样深度为0-100 cm（分 6层）。挖掘和拍摄典型土壤剖面1份（0-100 cm）。除了上述调查获取的数据以外，需要利用无人机航拍和植物群落成像系统真实记录植物群落的空间特征。",
                    picture_enable: true,
                    picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project2.1.png"
                },
                {
                    title: "试验区介绍",
                    description: "在黄河流域内蒙古段不同片区进行野外实验调查，自东向西沿黄河向上游选取了乌兰布和沙漠片区、狼山片区、河套灌区片区；中游选取了西柳沟流域，乌梁素海片区，昆都仑河流域，十大孔兑片区，下游选取了大黑河大青山片区、黑河蜜汗山片区、红河片区、准格尔东南片区等地不同下垫面的典型实验点。根据不同片区的下垫面和特殊植被类型，比如大黑河流域草地耕地，灌木地，林地混合地带，杭锦后旗的玉米和葵花地，磴口林地灌木地交错带。",
                    picture_enable: true,
                    picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project2.title.jpg"
                }
            ],
            description: "",
            picture: ""
        },
        {
            title: "不同侵蚀类型区植被格局的生态及水文观测实验",
            subtitle: true,
            sublist: [
                {
                    title: "试验介绍",
                    description: "综合分析典型生态修复模式的稳定性及其适生环境，明确典型生态修复模式的空间生态位。阐明草地、沙漠、砒砂岩等类型区典型生态恢复模式的生态耗水特征，厘定典型生态恢复模式的适宜水文阈值。界定不同立地单元的生态修复空间，配置适宜的生态恢复模式。\n（1）选取风沙区、黄土丘陵沟壑区、砒砂岩丘陵沟壑区等区域典型植被格局建立长期观测样地9处。安装土壤水分、温度、盐分三参数设备18套，小型蒸渗仪9套，简易径流小区9个，薄层水流设备3套，入渗壤中流设备2套、茎流仪8套、叶绿素仪2套、降雨模拟设备1套。\n（2）选取沙柳、沙蒿、柠条等全流域范围内的共有性植被为研究对象。开展典型植被降雨截留、土壤入渗、蒸散发、冲刷试验和人工降雨模拟等试验，确定沙柳、沙蒿、柠条等全流域范围内的广布型物种，适宜对比分析。",
                    picture_enable: true,
                    picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project2.2.png"
                },
                {
                    title: "试验区介绍",
                    description: "试验区位于十大孔兑西柳沟西柳沟流域属于半干旱大陆性气候，季节性差异较明显，降雨集中在植物生长季的六到九月份，年平均降雨量267.7mm。该区域蒸发强烈，潜在蒸发量为2000mm气候特征为夏季降雨多以暴雨形式发生，春冬多风沙,年均风速为3.1-3.5m/s。年均温在5.3-6.19°C之间，最高温度可达40°C,最低温度为-34°C,积温为2499.7-2942.1°C。",
                    picture_enable: true,
                    picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project2.4.png"
                }
            ],
        },
        {
            title: "中小尺度无人机遥感观测试验",
            subtitle: true,
            sublist: [
                {
                    title: "试验介绍",
                    description: "针对流域内森林、草原、湖泊、荒漠及沙漠等不同类型区，在景观群落、群落生态带、小流域等尺度，开展黄河流域内蒙段典型区中、小尺度蒸散发观测试验。观测蒸发、蒸腾、土壤呼吸、净光合速率、蒸腾速率、气孔导度、温室气体与生态系统水碳氮-能量通量等要素。结合稳定同位素观测，开展涡度相关测量，获取异质性地表的中小尺度蒸散发等通量观测资料。结合历史监测数据，经时间序列分析、小波分析、信息熵与地统计分析等多方法联用，识别流域降水、蒸散发、径流、气温、辐射、泥沙等水文气象变量/参数的时空特征，揭示蒸散发的时空异质性、尺度效应及其驱动力，系统辨析水文气象要素的时空演变规律及其协同变异性。基于热红外可见光的植被-土壤温度解译，在研究区内选取20个试验点，120个地标样方进行无人机航测试验，同时在地面标定样方内进行植被冠层、地表土壤、空气的温度测量进行协同验证。在每年的5-10月植被生长季，每月一次，调查植被参数包括植被类型、LAI、高度、叶宽、冠幅。",
                    picture_enable: true,
                    picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project2.5.png"
                },
                {
                    title: "LAI叶面积指数测定",
                    description: "对实验点不同下垫面的样方进行LAI的测定。具体步骤:使用英国SunScan type SS1植物冠层分析仪，在云层均匀或者晴天的的正午前后三小时的测量时间段内，先调整好三脚架，使顶部的BFS传感器位置水平，方向正北，无阴影和光线遮挡，然后连接手持数据记录仪和手持SunScan探测器，针对不同的植被类型设置好ELADP和叶片吸收率，再利用手持探测器对样方植被下层区域进行对角和中线位置的三次LAI测量，可进行重复多次测量，读取保存数据。",
                    picture_enable: true,
                    picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project2.6.jpg"
                },
                {
                    title: "地面温度信息测定",
                    description: "在上述调查样方内，在无人机飞行同时，在地面使用测温枪对植被冠层和地表以及地面温度验证点黑白板进行温度测量；选取不同点测试冠层温度代表样方平均值；地表土壤温度同理，分别测试地表光照和阴影处，测试要能代表平均值，注意不要在无人机飞行至样方上空时遮挡样方光线；冠层上方1.5m处温度使用温度计测量。",
                    picture_enable: true,
                    picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project2.7.jpg"
                },
                {
                    title: "土壤水分测定",
                    description: "利用手持TDR选取不同采样点测试不同深度（3.8cm、7.5cm、12cm、21cm）土壤水分；并用取土钻对表层土壤（3.8cm、7.5cm）进行取土并装入标记好铝盒内用防水胶带进行密封。回到实验室先对土壤进行湿重称重，再对胶带纸进行称重；将铝盒打开放入烘箱中进行105℃十小时的烘干，取出后对其再次称重获得干重；再将烘干后的土倒出并清洗铝盒，待其完全晾干后对每个铝盒进行称重。最后可得出土壤的质量含水率用于进行对TDR的校准。根据实验室测得的土壤水分与TDR测量的土壤水分，分别对不同深度（3.8cm、7.5cm）进行拟合，分析对比校准TDR所测土壤水分数据。",
                    picture_enable: true,
                    picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project2.8.jpg"
                },
                {
                    title: "无人机飞行实验",
                    description: "结合landsat和哨兵卫星过境的时间基础上，飞行参数设置为飞行高度100m, 航向重叠率70%，旁向重叠率80%，进行同步无人机遥感影像实验。保证黄河流域内蒙古段不同片区的试验点的卫星过境时间和无人机遥感测量时间相吻合，无人机每次航测时刻中间点在卫星过境时刻附近。以大黑河流域无人机影像为例，对其热红外影像及可见光影像进行拼接，通过植被指数提取植被分布图，并解译无人机热红外影像温度信息。将无人机热红外影像进行温度校准，利用地面验证点黑白板和样方冠层温度实测值与热红外影像相对应点的温度值进行线性校准。\n 试验区介绍：在黄河流域内蒙古段不同片区开展地面和无人机协同观测实验，自东向西选取了乌海、磴口、杭锦后旗、五原、乌梁素海、包头、达拉特旗、大黑河、草原所等20余个不同试验点，下垫面类型涉及耕地、草地、林地、灌木等植被类型，其中无人机热红外和开见光同步开展观测试验点包括9个、无人机可见光单独观测试验点包括11个。",
                    picture_enable: true,
                    picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project2.9.jpg"
                }
            ],
        },
        {
            title: "数据平台",
            description: "以现代陆面过程模型和水文水资源模型（包括地下水动态模型）为骨架，构建“大气－水文－生态”综合模拟模型平台。发展流域尺度的陆面/水文数据同化系统，集成观测与模拟结果，生成全流域空间分辨率为1km、时间分辨率为1小时的同化数据集。进一步发展能够实时融合多源遥感观测的数据同化系统，实现卫星遥感对流域水文与生态过程的动态监测。在“数字黑河”基础上，建立黑河遥感试验信息系统，发布原始试验数据、各级数据产品及同化数据。"
        }

    ],
    map_enable: false,
    map: ["http://cloud.gutemorgan.com:18888/ads/huanghe/project1.1.png"],
    communication: {
        description: "“黄河流域内蒙古段生态水文遥感试验”热忱欢迎国内外相关研究机构和个人的参与，欢迎合作者共享已观测或研制出的与研究区相关生态水文要素数据产品。参与的程序如下：合作者围绕“黄河流域内蒙古段生态水文遥感试验”的总体设计，提供拟解决的科学问题、研究方案、数据和观测，并附加观测实验或产品研制相关说明等，提交试验数据和产品，通过试验总体组评估后，合作者按有的数据类型、格式，会交数据和产品，并有权获取本试验中相应的观测数据。",
        picture: "http://cloud.gutemorgan.com:18888/ads/huanghe/project1.2.jpg"
    },
    partner_enable: true,
    partner: [
        {
            title: "清华大学水利系",
            logo: "http://cloud.gutemorgan.com:18888/ads/huanghe/tsinghua.png"
        },
        {
            title: "内蒙古农业大学",
            logo: "http://cloud.gutemorgan.com:18888/ads/huanghe/imau.jpg"
        },
        {
            title: "中国水科院牧科所",
            logo: "http://cloud.gutemorgan.com:18888/ads/huanghe/iwhr.png"
        }
    ]
}

let staticData = staticData2

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            staticData: staticData1,
        }
    };
    componentDidMount() {
        const data_id = querystring.parse(this.props.location.search.slice(1)).id
        // console.log(data_id)
        if (data_id === undefined) {

        }
        else {
            if (data_id === '1') {
                this.setState({
                    staticData: staticData1,
                })
            }
            else if (data_id === "2") {
                this.setState({
                    staticData: staticData2,
                })
            }
            else {
            }
        }
    }
    render() {
        return (
            <div className='project-background' >
                <Row className="project-row">
                    <Col span={24}>
                        <div className="project-banner">
                            <div className="project-banner-content">
                                <h1>{this.state.staticData.title}</h1>
                                <p></p>
                                <span>{this.state.staticData.english_title}</span>
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
                                        size="large"
                                        items={this.state.staticData.plan.map((item, i) => {
                                            let child = item.description
                                            if (item.subtitle) {
                                                child =
                                                    <Col>
                                                        <Tabs
                                                            type="card"
                                                            size="small"
                                                            items={item.sublist.map((sub, subIndex) => {
                                                                return {
                                                                    label: sub.title,
                                                                    key: subIndex,
                                                                    children: (
                                                                        <>
                                                                            <Row>
                                                                                <Col span={24}>{sub.description}</Col>
                                                                            </Row>
                                                                            {sub.picture_enable &&
                                                                                <Row style={{marginTop:"50px"}}>
                                                                                    <Col span={4}></Col>
                                                                                    <Col span={16}><Image width="100%" src={sub.picture} /></Col>
                                                                                    <Col span={4}></Col>
                                                                                </Row>
                                                                            }
                                                                        </>),
                                                                };
                                                            })}
                                                        />
                                                    </Col>
                                            }
                                            return {
                                                label: item.title,
                                                key: i,
                                                children: child,
                                            };
                                        })}
                                    />
                                </Col>
                            </Row>


                            {this.state.staticData.map_enable && <Row className="project-row project-title">
                                <Col span={24}>
                                    <h1>试验区地图</h1>
                                </Col>
                            </Row>
                            }

                            {this.state.staticData.map_enable && <Row className="project-row project-row-margin" gutter={30}>
                                <Col span={24}>
                                    <Image
                                        width="100%"
                                        src={this.state.staticData.map[0]}
                                    />
                                </Col>
                            </Row>
                            }

                            <Row className="project-row project-title">
                                <Col span={24}>
                                    <h1>合作交流</h1>
                                </Col>
                            </Row>

                            <Row className="project-row project-row-margin" gutter={30}>

                                <Col span={16} style={{ textAlign: "left" }}>
                                    {this.state.staticData.communication.description}
                                </Col>
                                <Col span={8}>
                                    <Image
                                        src={this.state.staticData.communication.picture}
                                    />
                                </Col>

                            </Row>



                            {this.state.staticData.partner_enable && <Row className="project-row project-title">
                                <Col span={24}>
                                    <h1>合作单位</h1>
                                </Col>
                            </Row>
                            }

                            {this.state.staticData.partner_enable && <Row className="project-row project-row-margin" gutter={30}>
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
                                        dataSource={this.state.staticData.partner}
                                        renderItem={item => (
                                            <List.Item>
                                                <Card
                                                    style={{ height: 70 }}
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
                            }

                        </div>
                    </Col>


                </Row>




            </div>

        )
    }
}
export default withRouter(Home);
