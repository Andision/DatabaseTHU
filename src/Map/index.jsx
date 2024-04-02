import React, { PureComponent } from 'react';
import { Card, Button, Checkbox, Row, Col } from 'antd';
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

let ZidongJianceXitong = new VectorLayer()
// let lineLayerTsinghua = new VectorLayer()
// let lineLayerTsinghua = new VectorLayer()
// let lineLayerTsinghua = new VectorLayer()

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
        // zoom: false,
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

    //拿到弹出框元素
    var container = document.getElementById("popup");
    //拿到弹出框内容元素
    var content = document.getElementById("popup-content");

    var overlay1 = new Overlay({
      //设置弹出框的容器
      element: container,
      //是否自动平移，即假如标记在屏幕边缘，弹出时自动平移地图使弹出框完全可见
      autoPan: true,
      autoPanAnimation: {
        duration: 250
        //当Popup超出地图边界时，为了Popup全部可见，地图移动的速度.
      }
    });

    myMap.on('click', function (e) {
      var pixel = myMap.getEventPixel(e.originalEvent);
      myMap.forEachFeatureAtPixel(pixel, function (feature) {

        var attr = feature.getProperties();
        var coodinate = e.coordinate;
        console.log(attr, coodinate, attr.name)
        // content.innerHTML = "<ul>" +
        //   '<li>设备名称: ' + attr.name + '</li>' +
        //   '<li>设备描述:' + attr.desc + '</li>' +
        //   "</ul>";

        if (attr.name === "obs_point") {

          overlay1.setPosition(coodinate);
          myMap.addOverlay(overlay1);
        }

      });
    });

  }
  render() {
    const london = fromLonLat([-0.12755, 51.507222]);
    const onClickButton = () => {
      console.log('click A')
      myView.animate({
        center: london,
        duration: 2000,
        zoom: 10,
      });

    };
    const onGetCenter = () => {
      console.log(myView.getCenter())
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
      console.log(`checked = ${e.target.checked}`);

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
      console.log(`checked = ${e.target.checked}`);

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
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
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
      console.log(`checked = ${e.target.checked}`);

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
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
              width: 2
            }),
          })
        });
        Heliu2 = new VectorLayer({
          // zIndex: 99,
          source: vectorSource2,
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
        Heliu3 = new VectorLayer({
          // zIndex: 99,
          source: vectorSource3,
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
      console.log(`checked = ${e.target.checked}`);

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





    const onShowHetaoGuanqu = (e) => {
      console.log(`checked = ${e.target.checked}`);

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
              color: "rgb(255, 140, 200, 0.4)",
            }),
            stroke: new Stroke({  //边框
              color: "rgb(255, 40, 160, 0.8)",
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
      console.log(`checked = ${e.target.checked}`);

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
      console.log(`checked = ${e.target.checked}`);

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
      console.log(`checked = ${e.target.checked}`);

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
      console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);
        var vectorSource = new VectorSource({
          url: fileToUrl.WurenjiRehongwai,
          format: new GeoJSON({ featureProjection: 'EPSG:3857' })
        });
        WurenjiRehongwai = new VectorLayer({
          // zIndex: 99,
          source: vectorSource,
          style: new Style({
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






    const onShowZidongJianceXitong = (e) => {
      console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);

        ZidongJianceXitong = new VectorLayer({
          zIndex: 99,
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(fromLonLat([109, 40.5])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([108, 40.75])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([110.9197, 40.5727])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([108.1044, 40.5891])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([108.9011, 41.5201])),
                name: "ZidongJianceXitong1"
              }),
            ]
          }),
          style: new Style({
            image: new Circle({
              radius: 9,// 圆的半径
              fill: new Fill({ color: 'blue' }), // 填充颜色
              stroke: new Stroke({  //边框
                color: "rgb(255, 255, 255, 1)",
                width: 2
              }),
            })
          })
        })
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
      console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);

        ZidongJianceXitong = new VectorLayer({
          zIndex: 99,
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(fromLonLat([1110, 40.5])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([107.15, 40.75])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([110.9197, 40.985])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([112.0844, 40.468])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([111.5428, 39.85201])),
                name: "ZidongJianceXitong1"
              }),
            ]
          }),
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
    const onShowZhuanxiangShiyanZhan = (e) => {
      console.log(`checked = ${e.target.checked}`);

      if (e.target.checked) {
        const tsinghua = fromLonLat([109, 40.5]);

        ZidongJianceXitong = new VectorLayer({
          zIndex: 99,
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(fromLonLat([108.25698, 40.347])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([110.15, 40.697])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([107.9567, 40.146])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([109.0845, 40.444])),
                name: "ZidongJianceXitong1"
              }),
              new Feature({
                geometry: new Point(fromLonLat([112.2128, 39.99])),
                name: "ZidongJianceXitong1"
              }),
            ]
          }),
          style: new Style({
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
        })
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
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div id="map" style={{ width: '100%', height: "700px" }} />
        {/*  地图的挂载点，可以设置大小，控制地图的大小 */}
        {/* <div id="map" style={{ width: '1920px', height: "1080px" }} /> */}
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
            <Col className='map-card-section-title' span={24}>中小尺度无人机观测</Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowHetaoGuanqu}>无人机飞行采样</Checkbox></Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowWurenjiRehongwai}>无人机热红外观测点</Checkbox></Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowXiliuGou}>可见光观测点</Checkbox></Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowWuliangsuDongbu}>地貌、植被类型野外考察路线</Checkbox></Col>
          </Row>
          <Row className='map-card-section'>
            <Col className='map-card-section-title' span={24}>典型区域</Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowZidongJianceXitong}>自动气象-土壤环境监测系统</Checkbox></Col>
            <Col className='map-card-section-item' span={24}><Checkbox onChange={onShowChixuDiaochaDian}>土壤-植被生态连续调查点</Checkbox></Col>
            {/* <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowXiliuGou}>热红外试验点</Checkbox></Col>
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowWuliangsuDongbu}>可见光试验点</Checkbox></Col> */}
            <Col className='map-card-section-item' span={12}><Checkbox onChange={onShowZhuanxiangShiyanZhan}>专项试验站</Checkbox></Col>
          </Row>
        </Card>
        <Card
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
        </Card>
      </div>
    );
  }
}
