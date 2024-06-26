import React, { PureComponent } from 'react';
import { Card, Button, Checkbox, Row, Col, Descriptions } from 'antd';
import { Map, View, Overlay } from 'ol';
import { Tile as TileLayer, Heatmap, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource, XYZ } from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import { fromLonLat } from 'ol/proj';
// import {Overlay} from 'ol/Overlay';
import ScaleLine from 'ol/control/ScaleLine';
import ZoomSlider from 'ol/control/ZoomSlider';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { Stroke, Style, Icon, Text, Fill, Circle, RegularShape } from "ol/style";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import './gcj02'

import { gcj02Mecator } from './index.css'

const fileToUrl = {
  HuangheLiuyu: process.env.PUBLIC_URL + '/file/HuangheLiuyu.geojson',
  Heliu1: process.env.PUBLIC_URL + '/file/Heliu1.geojson',
  Heliu2: process.env.PUBLIC_URL + '/file/Heliu2.geojson',
  Heliu3: process.env.PUBLIC_URL + '/file/Heliu3.geojson',
  HetaoGuanqu: process.env.PUBLIC_URL + '/file/HetaoGuanqu.geojson',
  YanjiuQuyu: process.env.PUBLIC_URL + '/file/YanjiuQuyu.geojson',
  WuliangsuHai: process.env.PUBLIC_URL + '/file/WuliangsuHai.geojson',
  XiliuGou: process.env.PUBLIC_URL + '/file/XiliuGou.geojson',
  WuliangsuDongbu: process.env.PUBLIC_URL + '/file/WuliangsuDongbu.geojson',
  WurenjiRehongwai: process.env.PUBLIC_URL + '/file/WurenjiRehongwai.geojson',
  WurenjiKejianguang: process.env.PUBLIC_URL + '/file/WurenjiKejianguang.geojson',
  KaochaDian: process.env.PUBLIC_URL + '/file/KaochaDian.geojson',
  KaochaLuxian: process.env.PUBLIC_URL + '/file/KaochaLuxian.geojson',
  ZidongJianceXitong: process.env.PUBLIC_URL + '/file/ZidongJianceXitong.geojson',
  ChixuDiaochaDian1: process.env.PUBLIC_URL + '/file/ChixuDiaochaDian1.geojson',
  ChixuDiaochaDian2: process.env.PUBLIC_URL + '/file/ChixuDiaochaDian2.geojson',
  CeliuDuanmianDian: process.env.PUBLIC_URL + '/file/CeliuDuanmianDian.geojson',
  ZidongQixiangZhan: process.env.PUBLIC_URL + '/file/ZidongQixiangZhan.geojson',
  QixiangZhan: process.env.PUBLIC_URL + '/file/QixiangZhan.geojson',
  ZhuanxiangShiyanZhan: process.env.PUBLIC_URL + '/file/ZhuanxiangShiyanZhan.geojson',
  ShuituWeishengtai: process.env.PUBLIC_URL + '/file/ShuituWeishengtai.geojson',
  Landsat: process.env.PUBLIC_URL + '/file/Landsat.geojson',
  MODIS1: process.env.PUBLIC_URL + '/file/MODIS1.geojson',
  MODIS: process.env.PUBLIC_URL + '/file/MODIS.geojson',
  Sentinel: process.env.PUBLIC_URL + '/file/Sentinel.geojson',
  WurenjiFeixingBaotou: process.env.PUBLIC_URL + '/file/Wurenji.Baotou.geojson',
  WurenjiFeixingCaoyuansuo: process.env.PUBLIC_URL + '/file/Wurenji.Caoyuansuo.geojson',
  WurenjiFeixingDaqi: process.env.PUBLIC_URL + '/file/Wurenji.Daqi.geojson',
  WurenjiFeixingDaheihe: process.env.PUBLIC_URL + '/file/Wurenji.Daheihe.geojson',
  WurenjiFeixingDengkou: process.env.PUBLIC_URL + '/file/Wurenji.Dengkou.geojson',
  WurenjiFeixingHangjinhouqi: process.env.PUBLIC_URL + '/file/Wurenji.Hangjinhouqi.geojson',
  WurenjiFeixingWuliangsuhaiXibu: process.env.PUBLIC_URL + '/file/Wurenji.WuliangsuhaiXibu.geojson',
}

const control = require('ol/control');
let myView = new View({
  center: fromLonLat([110, 40]),
  zoom: 4
})

let myMap = new Map()

let lineLayerTsinghua = new VectorLayer()
let HuangheLiuyu = new VectorLayer()
let Heliu1 = new VectorLayer()
let Heliu2 = new VectorLayer()
let Heliu3 = new VectorLayer()

let YanjiuQuyu = new VectorLayer()
let HetaoGuanqu = new VectorLayer()
let WuliangsuHai = new VectorLayer()
let XiliuGou = new VectorLayer()
let WuliangsuDongbu = new VectorLayer()

let WurenjiRehongwai = new VectorLayer()
let WurenjiKejianguang = new VectorLayer()
let KaochaDian = new VectorLayer()
let KaochaLuxian = new VectorLayer()

let ZidongJianceXitong = new VectorLayer()
let ChixuDiaochaDian1 = new VectorLayer()
let ChixuDiaochaDian2 = new VectorLayer()
let CeliuDuanmianDian = new VectorLayer()
let ZidongQixiangZhan = new VectorLayer()
let QixiangZhan = new VectorLayer()
let ZhuanxiangShiyanZhan = new VectorLayer()
let ShuituWeishengtai = new VectorLayer()

let Landsat = new VectorLayer()
let MODIS1 = new VectorLayer()
let MODIS = new VectorLayer()
let Sentinel = new VectorLayer()

let WurenjiFeixingBaotou = new VectorLayer()
let WurenjiFeixingCaoyuansuo = new VectorLayer()
let WurenjiFeixingDaqi = new VectorLayer()
let WurenjiFeixingDaheihe = new VectorLayer()
let WurenjiFeixingDengkou = new VectorLayer()
let WurenjiFeixingHangjinhouqi = new VectorLayer()
let WurenjiFeixingWuliangsuhaiXibu = new VectorLayer()
// let lineLayerTsinghua = new VectorLayer()
// let lineLayerTsinghua = new VectorLayer()
// let lineLayerTsinghua = new VectorLayer()
const ZhuanxiangShiyanZhanList = [
  {
    station: 1,
    name: "草原所观测试验站—土壤质量观测实验站",
    position: [111.821, 40.533]
  },
  {
    station: 2,
    name: "达拉特旗草原所—沙地草原生态试验站",
    position: [110.048, 40.294]
  },
  {
    station: 3,
    name: "牧科所准格尔旗砒砂岩区水土流失观测站",
    position: [111.122, 39.969]
  },
  {
    station: 4,
    name: "牧科所杭锦旗毛布拉孔兑覆沙丘陵沟壑区生态水文监测站",
    position: [109.0184, 39.8182]
  },
  {
    station: 5,
    name: "杭锦旗杭锦旗卜尔色太沟荒漠草原生态水文监测试验站",
    position: [108.9068, 39.7193]
  },
  {
    station: 6,
    name: "林科院荒漠系统生态试验站",
    position: [106.7301, 39.8710]
  },
  {
    station: 7,
    name: "牧科所黄河几字弯区域生态环境变化与综合治理野外科学观测研究站",
    position: [106.7645, 40.1275]
  },
  {
    station: 8,
    name: "牧科所杭锦旗库布齐沙地生态水文观测区",
    position: [108.7393, 39.9566]
  },
  {
    station: 9,
    name: "牧科所达拉特旗黄土丘陵沟壑区水土流失观测站",
    position: [109.8856, 39.8973]
  },

  {
    station: 10,
    name: "罕台川水文站",
    position: [109.943866, 40.240989]
  },
  {
    station: 11,
    name: "毛不拉孔兑覆沙区生态水文观测站",
    position: [109.188695, 39.982406]
  },
  {
    station: 12,
    name: "罕台川丘陵沟壑区生态水文观测站",
    position: [110.035243, 40.052032]
  },
  {
    station: 13,
    name: "乌兰布和入黄风沙观测站",
    position: [106.698189, 39.637422]
  },


]
let ZhuanxiangShiyanZhanOverlay = []

export default class Home extends PureComponent {
  // 生命周期函数时调用
  componentDidMount() {
    myMap = new Map({
      // 设置挂载点为map
      target: 'map',
      // 设置图层
      // layers: [
      //   new TileLayer({
      //     source: new OSM()
      //   })
      // ],
      layers: [new TileLayer({
        source: new XYZ({
          projection: gcj02Mecator,
          url: 'https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=6&x={x}&y={y}&z={z}',
          // url: 'https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
          // url:'https://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&size=1&scl=1&style=8&ltype=11',
        })
      })
      ],
      // 设置地图的可视区域，center为中心点，zoom为缩放的层级
      // view: new View({
      //   center: fromLonLat([114, 41]),
      //   zoom: 4
      // }),
      view: myView,
      //加载控件到地图容器中
      controls: control.defaults({
        zoom: false,
        rotate: false,
        attribution: false
      })
    });

    //矢量图层 获取geojson数据
    // var vector = new VectorSource({
    //   url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
    //   format: new GeoJSON()
    // });
    // let heatMap = new Heatmap({
    //   source: vector,
    //   // 透明度
    //   // opacity: [0, 0.8], 
    //   // 模糊大小
    //   blur: 5,
    //   // 半径大小（以像素为单位,默认8）
    //   radius: 5,
    //   // 阴影像素大小，默认250
    //   // shadow:250,
    //   // 矢量图层的渲染模式：
    //   // image:矢量图层呈现为图像。性能出色，但是点符号和文本始末始终随着视图一起旋转，像素在缩放动画期间缩放
    //   // vector:矢量图层呈现为矢量。即使在动画期间也能获得最准确的渲染，但是性能降低
    // });
    // myMap.addLayer(heatMap);


    // haidian
    // // let json = require('https://geo.datav.aliyun.com/areas_v3/bound/110108.json');
    // // let features = (new GeoJSON({ featureProjection: 'EPSG:3857' })).readFeatures(json)
    // var vectorSource = new VectorSource({
    //   url: 'https://geo.datav.aliyun.com/areas_v3/bound/110108.json',
    //   format: new GeoJSON({ featureProjection: 'EPSG:3857' })
    // });
    // let lineLayer = new VectorLayer({
    //   zIndex: 99,
    //   source: vectorSource,
    //   style: new Style({
    //     fill: new Fill({
    //       color: "rgb(100, 200, 255, 0)",
    //     }),
    //     stroke: new Stroke({  //边框
    //       color: "rgb(0, 200, 255, 0.8)",
    //       width: 5
    //     }),
    //   })
    // });
    // myMap.addLayer(lineLayer)  // 把图层添加到地图





    // let json = require('https://geo.datav.aliyun.com/areas_v3/bound/110108.json');
    // let features = (new GeoJSON({ featureProjection: 'EPSG:3857' })).readFeatures(json)
    // var vectorSource = new VectorSource({
    //   url: 'http://f0.0sm.com/node0/2023/02/863D940529C20444-979b6a51089f0823.txt',
    //   format: new GeoJSON({ featureProjection: 'EPSG:3857' })
    // });
    // let lineLayerTsinghua = new VectorLayer({
    //   // zIndex: 99,
    //   source: vectorSource,
    //   style: new Style({
    //     fill: new Fill({
    //       color: "rgb(200, 0, 0, 0.4)",
    //     }),
    //     stroke: new Stroke({  //边框
    //       color: "rgb(255, 0, 0, 0.8)",
    //       width: 5
    //     }),
    //   })
    // });
    // myMap.addLayer(lineLayerTsinghua)  // 把图层添加到地图


    // // point
    // // var point = new Point([20, 20]);
    // // var feature1 = new Feature(point);
    // let pointLayer = new VectorLayer({
    //   zIndex: 99,
    //   source: new VectorSource({
    //     features: [new Feature({
    //       geometry: new Point(fromLonLat([116.33468, 40.01560])),
    //       name: "obs_point"
    //     })]
    //   }),
    //   style: new Style({
    //     image: new Circle({
    //       radius: 9,// 圆的半径
    //       fill: new Fill({ color: 'green' }), // 填充颜色
    //       stroke: new Stroke({  //边框
    //         color: "rgb(255, 255, 255, 1)",
    //         width: 2
    //       }),
    //     })
    //   })
    // })
    // myMap.addLayer(pointLayer)

    // //拿到弹出框元素
    // var container = document.getElementById("popup");
    // //拿到弹出框内容元素
    // var content = document.getElementById("popup-content");

    // var overlay1 = new Overlay({
    //   //设置弹出框的容器
    //   element: container,
    //   //是否自动平移，即假如标记在屏幕边缘，弹出时自动平移地图使弹出框完全可见
    //   autoPan: true,
    //   autoPanAnimation: {
    //     duration: 250
    //     //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度.
    //   }
    // });

    // myMap.on('click', function (e) {
    //   var pixel = myMap.getEventPixel(e.originalEvent);
    //   var showSomething = false
    //   myMap.forEachFeatureAtPixel(pixel, function (feature) {

    //     var attr = feature.getProperties();
    //     var coodinate = e.coordinate;
    //     console.log(attr, coodinate, attr.name)
    //     // content.innerHTML = "<ul>" +
    //     //   '<li>设备名称: ' + attr.name + '</li>' +
    //     //   '<li>设备描述:' + attr.desc + '</li>' +
    //     //   "</ul>";

    //     if (attr.name === "obs_point") {
    //       showSomething = true
    //       overlay1.setPosition(coodinate);
    //       myMap.addOverlay(overlay1);
    //     }
    //   });
    //   if (!showSomething) {
    //     myMap.removeOverlay(overlay1)
    //   }
    // });

    ZhuanxiangShiyanZhanOverlay = ZhuanxiangShiyanZhanList.map(item => new Overlay({
      //设置弹出框的容器
      element: document.getElementById("popup-ZhuanxiangShiyanzhan" + item.station),
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    })
    );

  }
  render() {
    const london = fromLonLat([-0.12755, 51.507222]);
    const onClickButton = () => {
      // console.log('click A')
      myView.animate({
        center: london,
        duration: 2000,
        zoom: 10,
      });

    };
    const onGetCenter = () => {
      // console.log(myView.getCenter())
    }
    const onShowHaidian = () => {
      const haidian = fromLonLat([116.20845, 40]);
      myView.animate({
        center: haidian,
        duration: 2000,
        zoom: 11,
      });
    }

    const onShowTsinghua = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([116.32845, 40.008]);
        var vectorSource = new VectorSource({
          url: 'http://f0.0sm.com/node0/2023/02/863D940529C20444-979b6a51089f0823.txt',
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        lineLayerTsinghua = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(200, 0, 0, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 0, 0, 0.8)",
              width: 5
            }),
          })
        });
        myMap.addLayer(lineLayerTsinghua)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 15,
        });
      }
      else {
        myMap.removeLayer(lineLayerTsinghua)
      }

    }




    // new method



    const onShowHuangheLiuyu = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([107, 36.5]);
        var vectorSource = new VectorSource({
          url: fileToUrl.HuangheLiuyu,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        HuangheLiuyu = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(255, 200, 0, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 200, 0, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(HuangheLiuyu)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 3000,
          zoom: 5,
        });
      }
      else {
        myMap.removeLayer(HuangheLiuyu)
      }

    }
    const onShowHeliuShuixi = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSource1 = new VectorSource({
          url: fileToUrl.Heliu1,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        var vectorSource2 = new VectorSource({
          url: fileToUrl.Heliu2,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        var vectorSource3 = new VectorSource({
          url: fileToUrl.Heliu3,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        Heliu1 = new VectorLayer({
          // zIndex: 99,
          source: vectorSource1,
          style: new Style({
            fill: new Fill({
              color: "rgb(125, 200, 255, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(0, 145, 255, 0.8)",
              width: 2
            }),
          })
        });
        Heliu2 = new VectorLayer({
          // zIndex: 99,
          source: vectorSource2,
          style: new Style({
            fill: new Fill({
              color: "rgb(125, 200, 255, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(0, 145, 255, 0.8)",
              width: 2
            }),
          })
        });
        Heliu3 = new VectorLayer({
          // zIndex: 99,
          source: vectorSource3,
          style: new Style({
            fill: new Fill({
              color: "rgb(125, 200, 255, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(0, 145, 255, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(Heliu1)  // 把图层添加到地图
        myMap.addLayer(Heliu2)  // 把图层添加到地图
        myMap.addLayer(Heliu3)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(Heliu1)
        myMap.removeLayer(Heliu2)
        myMap.removeLayer(Heliu3)
      }

    }
    const onShowYanjiuQuyu = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSource = new VectorSource({
          url: fileToUrl.YanjiuQuyu,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        YanjiuQuyu = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(YanjiuQuyu)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(YanjiuQuyu)
      }

    }




    const onShowWurenjiFeixing = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSourceBaotou = new VectorSource({
          url: fileToUrl.WurenjiFeixingBaotou,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        var vectorSourceCaoyuansuo = new VectorSource({
          url: fileToUrl.WurenjiFeixingCaoyuansuo,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        var vectorSourceDaqi = new VectorSource({
          url: fileToUrl.WurenjiFeixingDaqi,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        var vectorSourceDaheihe = new VectorSource({
          url: fileToUrl.WurenjiFeixingDaheihe,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        var vectorSourceDengkou = new VectorSource({
          url: fileToUrl.WurenjiFeixingDengkou,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        var vectorSourceHangjinhouqi = new VectorSource({
          url: fileToUrl.WurenjiFeixingHangjinhouqi,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        var vectorSourceWuliangsuhaiXibu = new VectorSource({
          url: fileToUrl.WurenjiFeixingWuliangsuhaiXibu,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        })

        WurenjiFeixingBaotou = new VectorLayer({
          // zIndex: 99,
          source: vectorSourceBaotou,
          style: new Style({
            fill: new Fill({
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
              width: 2
            }),
            text: new Text({
              text: "包头", // 根据特征属性显示文字
              // offsetX: -30,
              // offsetY: -30,
              overflow: true,
              font: "20px sans-serif",
              fill: new Fill({
                color: 'white'
              })
            })
          })
          
        });
        WurenjiFeixingCaoyuansuo = new VectorLayer({
          // zIndex: 99,
          source: vectorSourceCaoyuansuo,
          style: new Style({
            fill: new Fill({
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
              width: 2
            }),
            text: new Text({
              text: "草原所", // 根据特征属性显示文字
              // offsetX: -30,
              // offsetY: -30,
              overflow: true,
              font: "20px sans-serif",
              fill: new Fill({
                color: 'white'
              })
            })
          })
        });
        WurenjiFeixingDaqi = new VectorLayer({
          // zIndex: 99,
          source: vectorSourceDaqi,
          style: new Style({
            fill: new Fill({
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
              width: 2
            }),
            text: new Text({
              text: "达旗", // 根据特征属性显示文字
              // offsetX: -30,
              // offsetY: -30,
              overflow: true,
              font: "20px sans-serif",
              fill: new Fill({
                color: 'white'
              })
            })
          })
        });
        WurenjiFeixingDaheihe = new VectorLayer({
          // zIndex: 99,
          source: vectorSourceDaheihe,
          style: new Style({
            fill: new Fill({
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
              width: 2
            }),
            text: new Text({
              text: "大黑河", // 根据特征属性显示文字
              // offsetX: -30,
              // offsetY: -30,
              overflow: true,
              font: "20px sans-serif",
              fill: new Fill({
                color: 'white'
              })
            })
          })
        });
        WurenjiFeixingDengkou = new VectorLayer({
          // zIndex: 99,
          source: vectorSourceDengkou,
          style: new Style({
            fill: new Fill({
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
              width: 2
            }),
            text: new Text({
              text: "磴口", // 根据特征属性显示文字
              // offsetX: -30,
              // offsetY: -30,
              overflow: true,
              font: "20px sans-serif",
              fill: new Fill({
                color: 'white'
              })
            })
          })
        });
        WurenjiFeixingHangjinhouqi = new VectorLayer({
          // zIndex: 99,
          source: vectorSourceHangjinhouqi,
          style: new Style({
            fill: new Fill({
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
              width: 2
            }),
            text: new Text({
              text: "杭锦后旗", // 根据特征属性显示文字
              // offsetX: -30,
              // offsetY: -30,
              overflow: true,
              font: "20px sans-serif",
              fill: new Fill({
                color: 'white'
              })
            })
          })
        });
        WurenjiFeixingWuliangsuhaiXibu = new VectorLayer({
          // zIndex: 99,
          source: vectorSourceWuliangsuhaiXibu,
          style: new Style({
            fill: new Fill({
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
              width: 2
            }),
            text: new Text({
              text: "乌梁素海西部", // 根据特征属性显示文字
              // offsetX: -30,
              // offsetY: -30,
              overflow: true,
              font: "20px sans-serif",
              fill: new Fill({
                color: 'white'
              })
            })
          })
        });

        myMap.addLayer(WurenjiFeixingBaotou)
        myMap.addLayer(WurenjiFeixingCaoyuansuo)
        myMap.addLayer(WurenjiFeixingDaqi)
        myMap.addLayer(WurenjiFeixingDaheihe)
        myMap.addLayer(WurenjiFeixingDengkou)
        myMap.addLayer(WurenjiFeixingHangjinhouqi)
        myMap.addLayer(WurenjiFeixingWuliangsuhaiXibu)

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(WurenjiFeixingBaotou)
        myMap.removeLayer(WurenjiFeixingCaoyuansuo)
        myMap.removeLayer(WurenjiFeixingDaqi)
        myMap.removeLayer(WurenjiFeixingDaheihe)
        myMap.removeLayer(WurenjiFeixingDengkou)
        myMap.removeLayer(WurenjiFeixingHangjinhouqi)
        myMap.removeLayer(WurenjiFeixingWuliangsuhaiXibu)
      }
    }
    const onShowHetaoGuanqu = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([107.90, 40.70]);
        var vectorSource = new VectorSource({
          url: fileToUrl.HetaoGuanqu,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        HetaoGuanqu = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(70, 255, 0, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(70, 255, 0, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(HetaoGuanqu)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 8,
        });
      }
      else {
        myMap.removeLayer(HetaoGuanqu)
      }

    }
    const onShowWuliangsuHai = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([108.85, 40.95]);
        var vectorSource = new VectorSource({
          url: fileToUrl.WuliangsuHai,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        WuliangsuHai = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(125, 200, 255, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(0, 145, 255, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(WuliangsuHai)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 10,
        });
      }
      else {
        myMap.removeLayer(WuliangsuHai)
      }

    }
    const onShowXiliuGou = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109.72, 40.145]);
        var vectorSource = new VectorSource({
          url: fileToUrl.XiliuGou,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        XiliuGou = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(125, 200, 255, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(0, 145, 255, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(XiliuGou)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 9.5,
        });
      }
      else {
        myMap.removeLayer(XiliuGou)
      }

    }
    const onShowWuliangsuDongbu = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109.54, 41.06]);
        var vectorSource = new VectorSource({
          url: fileToUrl.WuliangsuDongbu,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        WuliangsuDongbu = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(125, 200, 255, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(0, 145, 255, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(WuliangsuDongbu)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 9.5,
        });
      }
      else {
        myMap.removeLayer(WuliangsuDongbu)
      }

    }

    const onShowWurenjiRehongwai = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSource = new VectorSource({
          url: fileToUrl.WurenjiRehongwai,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        WurenjiRehongwai = new VectorLayer({
          zIndex: 98,
          source: vectorSource,
          style: function (feature) {
            const zoom = myMap.getView().getZoom();
            if (zoom < 10) { // 设定最小缩放级别为10
              return (
                new Style({
                  image:
                    // new Circle({
                    //   radius: 9,// 圆的半径
                    //   fill: new Fill({ color: 'orange' }), // 填充颜色
                    //   stroke: new Stroke({  //边框
                    //     color: "rgb(255, 255, 255, 1)",
                    //     width: 2
                    //   }),
                    // })
                    new RegularShape({
                      fill: new Fill({ color: 'red' }),
                      stroke: new Stroke({  //边框
                        color: "rgb(255, 255, 255, 1)",
                        width: 2
                      }),
                      points: 3,
                      radius: 10,
                      rotation: Math.PI / 4,
                      angle: 0,
                    }),
                })
              ); // 在小于10级别时不显示文字
            }
            else {
              return (new Style({
                image:
                  new RegularShape({
                    fill: new Fill({ color: 'red' }),
                    stroke: new Stroke({  //边框
                      color: "rgb(255, 255, 255, 1)",
                      width: 2
                    }),
                    points: 3,
                    radius: 10,
                    rotation: Math.PI / 4,
                    angle: 0,
                  }),
                text: new Text({
                  text: feature.get('name'), // 根据特征属性显示文字
                  offsetY: -25,
                  font: "20px sans-serif",
                  fill: new Fill({
                    color: 'white'
                  })
                })
              })
              )
            }
          }
        });
        myMap.addLayer(WurenjiRehongwai)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(WurenjiRehongwai)
      }

    }
    const KaochaDianList = ["阴山北麓国家野外站", "西黑岱流域油松林", "鄂尔多斯水土保持科技示范园", "淤地坝", "达拉特旗水土保持监测站", "乌梁素海", ""]
    const onShowWurenjiKejianguang = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSource = new VectorSource({
          url: fileToUrl.WurenjiKejianguang,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        WurenjiKejianguang = new VectorLayer({
          zIndex: 99,
          source: vectorSource,
          style: function (feature) {
            const zoom = myMap.getView().getZoom();
            if (zoom < 10) { // 设定最小缩放级别为10
              return (
                new Style({
                  image:
                    // new Circle({
                    //   radius: 9,// 圆的半径
                    //   fill: new Fill({ color: 'orange' }), // 填充颜色
                    //   stroke: new Stroke({  //边框
                    //     color: "rgb(255, 255, 255, 1)",
                    //     width: 2
                    //   }),
                    // })
                    new RegularShape({
                      fill: new Fill({ color: 'blue' }),
                      stroke: new Stroke({  //边框
                        color: "rgb(255, 255, 255, 1)",
                        width: 1
                      }),
                      points: 3,
                      radius: 6,
                      rotation: Math.PI / 4,
                      angle: 0,
                    }),
                })
              ); // 在小于10级别时不显示文字
            }
            else {
              return (new Style({
                image:
                  new RegularShape({
                    fill: new Fill({ color: 'blue' }),
                    stroke: new Stroke({  //边框
                      color: "rgb(255, 255, 255, 1)",
                      width: 1
                    }),
                    points: 3,
                    radius: 6,
                    rotation: Math.PI / 4,
                    angle: 0,
                  }),
                text: new Text({
                  text: feature.get('name'), // 根据特征属性显示文字
                  offsetY: -25,
                  font: "20px sans-serif",
                  fill: new Fill({
                    color: 'white'
                  })
                })
              })
              )
            }
          }
        });
        myMap.addLayer(WurenjiKejianguang)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(WurenjiKejianguang)
      }

    }
    const onShowKaochaDian = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSource = new VectorSource({
          url: fileToUrl.KaochaDian,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        KaochaDian = new VectorLayer({
          zIndex: 99,
          source: vectorSource,
          style: function (feature) {
            return (KaochaDianList.includes(feature.get('Name')) && new Style({
              image:
                new Circle({
                  radius: 6,// 圆的半径
                  fill: new Fill({ color: 'lime' }), // 填充颜色
                  stroke: new Stroke({  //边框
                    color: "rgb(255, 255, 255, 1)",
                    width: 2
                  }),
                }),
              text: new Text({
                text: feature.get('Name'), // 根据特征属性显示文字
                offsetY: -25,
                font: "20px sans-serif",
                fill: new Fill({
                  color: 'white'
                })
              })
            })
            )
          }
        });

        var vectorSource2 = new VectorSource({
          url: fileToUrl.KaochaLuxian,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        KaochaLuxian = new VectorLayer({
          zIndex: 98,
          source: vectorSource2,
          style: new Style({
            fill: new Fill({
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "lime",
              width: 4
            }),
          })
        });
        myMap.addLayer(KaochaDian)  // 把图层添加到地图
        myMap.addLayer(KaochaLuxian)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 8,
        });
      }
      else {
        myMap.removeLayer(KaochaDian)
        myMap.removeLayer(KaochaLuxian)
      }

    }



    const onShowZidongJianceXitong = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);

        var vectorSource = new VectorSource({
          url: fileToUrl.ZidongJianceXitong,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });

        ZidongJianceXitong = new VectorLayer({
          zIndex: 99,
          source: vectorSource,
          style: function (feature) {
            const zoom = myMap.getView().getZoom();
            if (zoom < 10) { // 设定最小缩放级别为10
              return (
                new Style({
                  image:
                    // new Circle({
                    //   radius: 9,// 圆的半径
                    //   fill: new Fill({ color: 'orange' }), // 填充颜色
                    //   stroke: new Stroke({  //边框
                    //     color: "rgb(255, 255, 255, 1)",
                    //     width: 2
                    //   }),
                    // })
                    new Circle({
                      radius: 9,// 圆的半径
                      fill: new Fill({ color: 'blue' }), // 填充颜色
                      stroke: new Stroke({  //边框
                        color: "rgb(255, 255, 255, 1)",
                        width: 2
                      }),
                    })
                })
              ); // 在小于10级别时不显示文字
            }
            else {
              return (new Style({
                image:
                  new Circle({
                    radius: 9,// 圆的半径
                    fill: new Fill({ color: 'blue' }), // 填充颜色
                    stroke: new Stroke({  //边框
                      color: "rgb(255, 255, 255, 1)",
                      width: 2
                    }),
                  }),
                text: new Text({
                  text: feature.get('气象站'), // 根据特征属性显示文字
                  offsetY: -25,
                  font: "20px sans-serif",
                  fill: new Fill({
                    color: 'white'
                  })
                })
              })
              )
            }
          }
        });
        myMap.addLayer(ZidongJianceXitong)

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(ZidongJianceXitong)
      }

    }
    const onShowChixuDiaochaDian = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);

        var vectorSource1 = new VectorSource({
          url: fileToUrl.ChixuDiaochaDian1,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });

        ChixuDiaochaDian1 = new VectorLayer({
          zIndex: 99,
          source: vectorSource1,
          style: function (feature) {
            const zoom = myMap.getView().getZoom();
            if (zoom < 10) { // 设定最小缩放级别为10
              return (
                new Style({
                  image:
                    // new Circle({
                    //   radius: 9,// 圆的半径
                    //   fill: new Fill({ color: 'orange' }), // 填充颜色
                    //   stroke: new Stroke({  //边框
                    //     color: "rgb(255, 255, 255, 1)",
                    //     width: 2
                    //   }),
                    // })
                    new Circle({
                      radius: 9,// 圆的半径
                      fill: new Fill({ color: 'orange' }), // 填充颜色
                      stroke: new Stroke({  //边框
                        color: "rgb(255, 255, 255, 1)",
                        width: 2
                      }),
                    })
                })
              ); // 在小于10级别时不显示文字
            }
            else {
              return (new Style({
                image:
                  new Circle({
                    radius: 9,// 圆的半径
                    fill: new Fill({ color: 'orange' }), // 填充颜色
                    stroke: new Stroke({  //边框
                      color: "rgb(255, 255, 255, 1)",
                      width: 2
                    }),
                  }),
                text: new Text({
                  text: feature.get('name'), // 根据特征属性显示文字
                  offsetY: -25,
                  font: "20px sans-serif",
                  fill: new Fill({
                    color: 'white'
                  })
                })
              })
              )
            }
          }
        });







        var vectorSource2 = new VectorSource({
          url: fileToUrl.ChixuDiaochaDian2,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });

        ChixuDiaochaDian2 = new VectorLayer({
          zIndex: 99,
          source: vectorSource1,
          style: new Style({
            image: new Circle({
              radius: 9,// 圆的半径
              fill: new Fill({ color: 'orange' }), // 填充颜色
              stroke: new Stroke({  //边框
                color: "rgb(255, 255, 255, 1)",
                width: 2
              }),
            })
          })
        })
        myMap.addLayer(ChixuDiaochaDian1)
        myMap.addLayer(ChixuDiaochaDian2)

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(ChixuDiaochaDian1)
        myMap.removeLayer(ChixuDiaochaDian2)
      }

    }
    const onShowCeliuDuanmianDian = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);

        var vectorSource = new VectorSource({
          url: fileToUrl.CeliuDuanmianDian,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });

        CeliuDuanmianDian = new VectorLayer({
          zIndex: 99,
          source: vectorSource,
          style: function (feature) {
            const zoom = myMap.getView().getZoom();
            if (zoom < 10) { // 设定最小缩放级别为10
              return (
                new Style({
                  image:
                    // new Circle({
                    //   radius: 9,// 圆的半径
                    //   fill: new Fill({ color: 'orange' }), // 填充颜色
                    //   stroke: new Stroke({  //边框
                    //     color: "rgb(255, 255, 255, 1)",
                    //     width: 2
                    //   }),
                    // })
                    new Circle({
                      radius: 9,// 圆的半径
                      fill: new Fill({ color: 'darkgreen' }), // 填充颜色
                      stroke: new Stroke({  //边框
                        color: "rgb(255, 255, 255, 1)",
                        width: 2
                      }),
                    })
                })
              ); // 在小于10级别时不显示文字
            }
            else {
              return (new Style({
                image:
                  new Circle({
                    radius: 9,// 圆的半径
                    fill: new Fill({ color: 'darkgreen' }), // 填充颜色
                    stroke: new Stroke({  //边框
                      color: "rgb(255, 255, 255, 1)",
                      width: 2
                    }),
                  }),
                text: new Text({
                  text: feature.get('name'), // 根据特征属性显示文字
                  offsetY: -25,
                  font: "20px sans-serif",
                  fill: new Fill({
                    color: 'white'
                  })
                })
              })
              )
            }
          }
        });

        myMap.addLayer(CeliuDuanmianDian)

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(CeliuDuanmianDian)
      }

    }
    const onShowZhuanxiangShiyanZhan = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);

        const vectorSource = new VectorSource();
        ZhuanxiangShiyanZhanList.forEach(function (station) {
          const pointFeature = new Feature({
            geometry: new Point(fromLonLat(station.position)), // 将经纬度坐标转换为地图的投影坐标
            name: "ZhuanxiangShiyanzhan." + station.station
          });
          vectorSource.addFeature(pointFeature);
        })

        ZhuanxiangShiyanZhan = new VectorLayer({
          zIndex: 99,
          source: vectorSource,
          style: new Style({
            image: new Circle({
              radius: 9,// 圆的半径
              fill: new Fill({ color: 'purple' }), // 填充颜色
              stroke: new Stroke({  //边框
                color: "rgb(255, 255, 255, 1)",
                width: 2
              }),
            })
          })
        })
        myMap.addLayer(ZhuanxiangShiyanZhan)

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });


        myMap.on('click', function (e) {
          var pixel = myMap.getEventPixel(e.originalEvent);
          var showSomething = false

          ZhuanxiangShiyanZhanOverlay.forEach(item => {
            // console.log("click",item)
            myMap.removeOverlay(item)
          });

          // console.log("click before loop", showSomething, ZhuanxiangShiyanZhanOverlay)

          myMap.forEachFeatureAtPixel(pixel, function (feature) {

            // console.log("click loop 1")
            var attr = feature.getProperties();
            var coodinate = e.coordinate;
            // console.log("click loop 2", attr.name, document.getElementById("popup-" + attr.name))

            if (attr.name && attr.name.startsWith("ZhuanxiangShiyanzhan")) {
              console.log(attr.name)

              showSomething = true
              // console.log("click loop 4")

              const index = attr.name.split(".")[1]
              // const index = attr.name.charAt(attr.name.length - 1)
              ZhuanxiangShiyanZhanOverlay[+index - 1].setPosition(coodinate);
              // console.log("click loop 6")
              // console.log("click loop 6", showSomething, ZhuanxiangShiyanZhanOverlay)
              myMap.addOverlay(ZhuanxiangShiyanZhanOverlay[+index - 1]);
              // console.log("click loop 7")

              return
              // console.log("click loop 8")
            }
          });
          // console.log("click after loop", showSomething, ZhuanxiangShiyanZhanOverlay)
          // if (!showSomething) {
          //   myMap.removeOverlay(ZhuanxiangShiyanZhanOverlay)
          // }
        });
      }
      else {
        myMap.removeLayer(ZhuanxiangShiyanZhan)
      }

    }
    const onShowZidongQixiangZhan = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);

        var vectorSource = new VectorSource({
          url: fileToUrl.ZidongQixiangZhan,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });

        ZidongQixiangZhan = new VectorLayer({
          zIndex: 99,
          source: vectorSource,
          style: function (feature) {
            const zoom = myMap.getView().getZoom();
            if (zoom < 10) { // 设定最小缩放级别为10
              return (
                new Style({
                  image:
                    // new Circle({
                    //   radius: 9,// 圆的半径
                    //   fill: new Fill({ color: 'orange' }), // 填充颜色
                    //   stroke: new Stroke({  //边框
                    //     color: "rgb(255, 255, 255, 1)",
                    //     width: 2
                    //   }),
                    // })
                    new Circle({
                      radius: 9,// 圆的半径
                      fill: new Fill({ color: 'skyblue' }), // 填充颜色
                      stroke: new Stroke({  //边框
                        color: "rgb(255, 255, 255, 1)",
                        width: 2
                      }),
                    })
                })
              ); // 在小于10级别时不显示文字
            }
            else {
              return (new Style({
                image:
                  new Circle({
                    radius: 9,// 圆的半径
                    fill: new Fill({ color: 'skyblue' }), // 填充颜色
                    stroke: new Stroke({  //边框
                      color: "rgb(255, 255, 255, 1)",
                      width: 2
                    }),
                  }),
                text: new Text({
                  text: feature.get('气象站'), // 根据特征属性显示文字
                  offsetY: -25,
                  font: "20px sans-serif",
                  fill: new Fill({
                    color: 'white'
                  })
                })
              })
              )
            }
          }
        });
        myMap.addLayer(ZidongQixiangZhan)

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(ZidongQixiangZhan)
      }

    }
    const onShowQixiangZhan = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);

        var vectorSource = new VectorSource({
          url: fileToUrl.QixiangZhan,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });

        QixiangZhan = new VectorLayer({
          zIndex: 99,
          source: vectorSource,
          style: function (feature) {
            const zoom = myMap.getView().getZoom();
            if (zoom < 10) { // 设定最小缩放级别为10
              return (
                new Style({
                  image:
                    // new Circle({
                    //   radius: 9,// 圆的半径
                    //   fill: new Fill({ color: 'orange' }), // 填充颜色
                    //   stroke: new Stroke({  //边框
                    //     color: "rgb(255, 255, 255, 1)",
                    //     width: 2
                    //   }),
                    // })
                    new Circle({
                      radius: 9,// 圆的半径
                      fill: new Fill({ color: 'mediumspringgreen' }), // 填充颜色
                      stroke: new Stroke({  //边框
                        color: "rgb(255, 255, 255, 1)",
                        width: 2
                      }),
                    })
                })
              ); // 在小于10级别时不显示文字
            }
            else {
              return (new Style({
                image:
                  new Circle({
                    radius: 9,// 圆的半径
                    fill: new Fill({ color: 'mediumspringgreen' }), // 填充颜色
                    stroke: new Stroke({  //边框
                      color: "rgb(255, 255, 255, 1)",
                      width: 2
                    }),
                  }),
                text: new Text({
                  text: feature.get('sheng') + feature.get('name') + feature.get('type'), // 根据特征属性显示文字
                  offsetY: -25,
                  font: "20px sans-serif",
                  fill: new Fill({
                    color: 'white'
                  })
                })
              })
              )
            }
          }
        });
        myMap.addLayer(QixiangZhan)

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(QixiangZhan)
      }

    }

    const onShowShuituWeishengtai = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);

        var vectorSource = new VectorSource({
          url: fileToUrl.ShuituWeishengtai,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });

        ShuituWeishengtai = new VectorLayer({
          zIndex: 99,
          source: vectorSource,
          style: function (feature) {
            const zoom = myMap.getView().getZoom();
            if (zoom < 10) { // 设定最小缩放级别为10
              return (
                new Style({
                  image:
                    // new Circle({
                    //   radius: 9,// 圆的半径
                    //   fill: new Fill({ color: 'orange' }), // 填充颜色
                    //   stroke: new Stroke({  //边框
                    //     color: "rgb(255, 255, 255, 1)",
                    //     width: 2
                    //   }),
                    // })
                    new Circle({
                      radius: 9,// 圆的半径
                      fill: new Fill({ color: 'black' }), // 填充颜色
                      stroke: new Stroke({  //边框
                        color: "rgb(255, 255, 255, 1)",
                        width: 2
                      }),
                    })
                })
              ); // 在小于10级别时不显示文字
            }
            else {
              return (new Style({
                image:
                  new Circle({
                    radius: 9,// 圆的半径
                    fill: new Fill({ color: 'black' }), // 填充颜色
                    stroke: new Stroke({  //边框
                      color: "rgb(255, 255, 255, 1)",
                      width: 2
                    }),
                  }),
                text: new Text({
                  text: feature.get('name'), // 根据特征属性显示文字
                  offsetY: -25,
                  font: "20px sans-serif",
                  fill: new Fill({
                    color: 'white'
                  })
                })
              })
              )
            }
          }
        });
        myMap.addLayer(ShuituWeishengtai)

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(ShuituWeishengtai)
      }

    }






    const onShowLandsat = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSource = new VectorSource({
          url: fileToUrl.Landsat,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        Landsat = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(125, 200, 255, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(0, 145, 255, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(Landsat)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(Landsat)
      }

    }
    const onShowMODIS1 = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSource = new VectorSource({
          url: fileToUrl.MODIS1,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        MODIS1 = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(125, 200, 255, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(0, 145, 255, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(MODIS1)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(MODIS1)
      }

    }
    const onShowMODIS = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSource = new VectorSource({
          url: fileToUrl.MODIS,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        MODIS = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(125, 200, 255, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(0, 145, 255, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(MODIS)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 5,
        });
      }
      else {
        myMap.removeLayer(MODIS)
      }

    }
    const onShowSentinel = (e) => {
      // console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSource = new VectorSource({
          url: fileToUrl.Sentinel,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        Sentinel = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "rgb(125, 200, 255, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(0, 145, 255, 0.8)",
              width: 2
            }),
          })
        });
        myMap.addLayer(Sentinel)  // 把图层添加到地图

        myView.animate({
          center: tsinghua,
          duration: 2000,
          zoom: 7.5,
        });
      }
      else {
        myMap.removeLayer(Sentinel)
      }

    }
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div id="map" className="map-container" style={{ width: '100%', height: "1000px" }} />
        {/*  地图的挂载点，可以设置大小，控制地图的大小 */}
        {/* <div id="map" style={{ width: '1920px', height: "1080px" }} /> */}
        <Card
          className='map-sample-card'
        >
          <div><span className='map-icon-triangle' style={{ borderTopColor: "red" }}></span>　无人机热红外观测点</div>
          <div><span className='map-icon-triangle' style={{ borderTopColor: "blue" }}></span>　可见光观测点</div>
          <div><span className='map-icon-circle' style={{ backgroundColor: "blue" }}></span>　自动气象-土壤环境监测系统</div>
          <div><span className='map-icon-circle' style={{ backgroundColor: "orange" }}></span>　植被生态-土壤连续调查点</div>
          <div><span className='map-icon-circle' style={{ backgroundColor: "darkgreen" }}></span>　测流断面点</div>
          <div><span className='map-icon-circle' style={{ backgroundColor: "purple" }}></span>　专项试验站</div>
          <div><span className='map-icon-circle' style={{ backgroundColor: "skyblue" }}></span>　自动气象站</div>
          <div><span className='map-icon-circle' style={{ backgroundColor: "mediumspringgreen" }}></span>　气象站</div>
          <div><span className='map-icon-circle' style={{ backgroundColor: "black" }}></span>　水土微生态监测</div>
        </Card>
        <Card
          className='map-option-card'
        // style={{
        //   width: 400,
        //   position: 'absolute',
        //   top: '100px',
        //   left: '100px',
        //   backgroundColor: 'rgba(255, 255, 255, 0.6)'
        // }}
        >
          {/* <Button onClick={onGetCenter}>GetCenter</Button>
          <Button onClick={onShowHaidian}>ShowHaidian</Button>
          <Button onClick={onClickButton}>A</Button>
          <Checkbox onChange={onShowTsinghua}>ShowTsinghua</Checkbox> */}

          <Row className='map-card-section'>
            <Col className='map-card-section-title' span={24}>区域边界</Col>
            <Col className='map-card-section-item' span={8}><Checkbox onChange={onShowHuangheLiuyu}>黄河流域</Checkbox></Col>
            <Col className='map-card-section-item' span={8}><Checkbox onChange={onShowYanjiuQuyu}>研究区域</Checkbox></Col>
            <Col className='map-card-section-item' span={8}><Checkbox onChange={onShowHeliuShuixi}>河流水系</Checkbox></Col>
          </Row>
          <Row className='map-card-section'>
            <Col className='map-card-section-title' span={24}>典型区域</Col>
            <Col className='map-card-section-item' span={8}><Checkbox onChange={onShowHetaoGuanqu}>河套灌区</Checkbox></Col>
            <Col className='map-card-section-item' span={8}><Checkbox onChange={onShowWuliangsuHai}>乌梁素海</Checkbox></Col>
            <Col className='map-card-section-item' span={8}><Checkbox onChange={onShowXiliuGou}>西柳沟流域</Checkbox></Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowWuliangsuDongbu}>乌梁素海东部流域</Checkbox></Col>
          </Row>
          <Row className='map-card-section'>
            <Col className='map-card-section-title' span={24}>区域/流域尺度卫星遥感对地观测</Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowLandsat}>Landsat对地观测 (30 m/16d)</Checkbox></Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowMODIS1}>MODIS对地观测 (500 m/d)</Checkbox></Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowMODIS}>MODIS对地观测 (1 km/d)</Checkbox></Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowSentinel}>Sentinel对地观测 (10 m/5d)</Checkbox></Col>
          </Row>
          <Row className='map-card-section'>
            <Col className='map-card-section-title' span={24}>中小尺度无人机观测</Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowWurenjiFeixing}>无人机飞行采样</Checkbox></Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowWurenjiRehongwai}>无人机热红外观测点</Checkbox></Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowWurenjiKejianguang}>可见光观测点</Checkbox></Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowKaochaDian}>地貌、植被类型野外考察路线</Checkbox></Col>
          </Row>
          <Row className='map-card-section'>
            <Col className='map-card-section-title' span={24}>地面站网观测</Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowZidongJianceXitong}>自动气象-土壤环境监测系统</Checkbox></Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowChixuDiaochaDian}>植被生态-土壤连续调查点</Checkbox></Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowCeliuDuanmianDian}>测流断面点</Checkbox></Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowZhuanxiangShiyanZhan}>专项试验站</Checkbox></Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowZidongQixiangZhan}>自动气象站</Checkbox></Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowQixiangZhan}>气象站</Checkbox></Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowShuituWeishengtai}>水土微生态监测</Checkbox></Col>
          </Row>
        </Card>

        {ZhuanxiangShiyanZhanList.map(item => (
          <Card
            key={item.station}
            id={"popup-ZhuanxiangShiyanzhan" + item.station}
            style={{
              width: 300,
            }}
            cover={
              <img
                alt=""
                src={"http://cloud.gutemorgan.com:18888/ads/huanghe/zhuanxiangzhan." + item.station + ".png"}
              />
            }
          >
            {item.name}
          </Card>
        ))}

        {/* <Card
          id='popup'
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://s1.ax1x.com/2023/02/01/pSDPgdx.jpg"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          C楼
        </Card> */}

      </div >
    );
  }
}
