import React, { PureComponent } from 'react';
import { Map, View } from 'ol';
import { Tile as TileLayer, Heatmap, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource, XYZ } from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import { fromLonLat } from 'ol/proj';
import ScaleLine from 'ol/control/ScaleLine';
import ZoomSlider from 'ol/control/ZoomSlider';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { Stroke, Style, Icon, Text, Fill } from "ol/style";

const control = require('ol/control');

export default class Home extends PureComponent {
  // 生命周期函数时调用
  componentDidMount() {
    let map = new Map({
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
          url: 'https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=6&x={x}&y={y}&z={z}',
          // url: 'https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
          // url:'https://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&size=1&scl=1&style=8&ltype=11',
        })
      })
      ],
      // 设置地图的可视区域，center为中心点，zoom为缩放的层级
      view: new View({
        center: fromLonLat([114, 41]),
        zoom: 4
      }),
      //加载控件到地图容器中
      controls: control.defaults({
        // zoom: false,
        rotate: false,
        attribution: false
      }).extend([
        new ScaleLine(),
        new ZoomSlider()
      ])
    });

    //矢量图层 获取geojson数据
    var vector = new VectorSource({
      url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
      format: new GeoJSON()
    });
    let heatMap = new Heatmap({
      source: vector,
      // 透明度
      // opacity: [0, 0.8], 
      // 模糊大小
      blur: 5,
      // 半径大小（以像素为单位,默认8）
      radius: 5,
      // 阴影像素大小，默认250
      // shadow:250,
      // 矢量图层的渲染模式：
      // image:矢量图层呈现为图像。性能出色，但是点符号和文本始末始终随着视图一起旋转，像素在缩放动画期间缩放
      // vector:矢量图层呈现为矢量。即使在动画期间也能获得最准确的渲染，但是性能降低
    });
    map.addLayer(heatMap);



    // let json = require('https://geo.datav.aliyun.com/areas_v3/bound/110108.json');
    // let features = (new GeoJSON({ featureProjection: 'EPSG:3857' })).readFeatures(json)
    var vectorSource = new VectorSource({
      url: 'https://geo.datav.aliyun.com/areas_v3/bound/110108.json',
      format: new GeoJSON({ featureProjection: 'EPSG:3857' })
    });
    let lineLayer = new VectorLayer({
      zIndex: 99,
      source: vectorSource,
    });
    map.addLayer(lineLayer)  // 把图层添加到地图


    // var point = new Point([20, 20]);
    // var feature1 = new Feature(point);
    let pointLayer = new VectorLayer({
      source: new VectorSource({
        features: [new Feature({
          geometry: new Point(fromLonLat([116.3965069, 39.9141120]))
        })]
      }),
      // style: new Style({
      //   text: new Text({ // 设置字体
      //     fill: new Fill({ // 字体颜色
      //       color: "rgba(255,0,255)",
      //     }),
      //     font: "20px sans-serif", // 字体样式
      //     text: "让我再看你一眼，从南到北", // 字体内容
      //     backgroundStroke: new Stroke({ // 字体外框颜色
      //       width: .1,
      //     }),
      //     // backgroundFill: new Fill({
      //     //   color: "rgba(0, 0,0,0.5)",
      //     // }),
      //     scale: [0.7, 0.7],
      //     // padding: [1, 11, 11, 1],
      //     // offsetY: 15,
      //     // offsetX: -10,
      //   }),
      // })
    })
    map.addLayer(pointLayer)
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div id="map" style={{ width: '100%', height: "930px" }} />
        {/*  地图的挂载点，可以设置大小，控制地图的大小 */}
        {/* <div id="map" style={{ width: '1920px', height: "1080px" }} /> */}
      </div>
    );
  }
}
