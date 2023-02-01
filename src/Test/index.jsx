import React, { PureComponent } from 'react';
import { Card, Button, Checkbox } from 'antd';
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
import { Stroke, Style, Icon, Text, Fill, Circle } from "ol/style";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const control = require('ol/control');
let myView = new View({
  center: fromLonLat([110, 40]),
  zoom: 4
})

let myMap = new Map()

let lineLayerTsinghua = new VectorLayer()

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



    // let json = require('https://geo.datav.aliyun.com/areas_v3/bound/110108.json');
    // let features = (new GeoJSON({ featureProjection: 'EPSG:3857' })).readFeatures(json)
    var vectorSource = new VectorSource({
      url: 'https://geo.datav.aliyun.com/areas_v3/bound/110108.json',
      format: new GeoJSON({ featureProjection: 'EPSG:3857' })
    });
    let lineLayer = new VectorLayer({
      zIndex: 99,
      source: vectorSource,
      style: new Style({
        fill: new Fill({
          color: "rgb(100, 200, 255, 0)",
        }),
        stroke: new Stroke({  //边框
          color: "rgb(0, 200, 255, 0.8)",
          width: 5
        }),
      })
    });
    myMap.addLayer(lineLayer)  // 把图层添加到地图





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


    // point
    // var point = new Point([20, 20]);
    // var feature1 = new Feature(point);
    let pointLayer = new VectorLayer({
      zIndex: 99,
      source: new VectorSource({
        features: [new Feature({
          geometry: new Point(fromLonLat([116.33468, 40.01560])),
          name: "obs_point"
        })]
      }),
      style: new Style({
        image: new Circle({
          radius: 9,// 圆的半径
          fill: new Fill({ color: 'green' }), // 填充颜色
          stroke: new Stroke({  //边框
            color: "rgb(255, 255, 255, 1)",
            width: 2
          }),
        })
      })
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
    myMap.addLayer(pointLayer)




    // overlayForm = new Overlay({  // 创建一个图层
    //   element: this.$refs.msgForm.$el,   // 图层绑定我们上边的弹窗
    //   autoPan: true,
    //   autoPanAnimation: {
    //     duration: 250,
    //   }
    // })
    // overlayForm.setPosition(undefined)   // 设置弹窗位置，刚开始我们不让他显示，就是undefined就行
    // map.addOverlay(overlayForm)  // 然后把弹窗的图层加载到地图上

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

        if(attr.name==="obs_point"){

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
          duration: 3000,
          zoom: 15,
        });
      }
      else {
        myMap.removeLayer(lineLayerTsinghua)
      }

    }
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div id="map" style={{ width: '100%', height: "700px" }} />
        {/*  地图的挂载点，可以设置大小，控制地图的大小 */}
        {/* <div id="map" style={{ width: '1920px', height: "1080px" }} /> */}
        <Card
          style={{
            width: 300,
            position: 'absolute',
            top: '100px',
            left: '100px'
          }}
        >
          <Button onClick={onGetCenter}>GetCenter</Button>
          <Button onClick={onShowHaidian}>ShowHaidian</Button>
          <Button onClick={onClickButton}>A</Button>
          <Checkbox onChange={onShowTsinghua}>ShowTsinghua</Checkbox>
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
