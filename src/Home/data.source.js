import React from 'react';

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://s1.ax1x.com/2022/09/12/vXgva4.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '首页', href: '/' } },
      { name: 'item1', a: { children: '搜索', href: '/search' } },
      { name: 'item2', a: { children: '登录', href: '/login?source=/' } },
      { name: 'item3', a: { children: '注册', href: '/register' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'This is Title',
    // children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>dsdf</p>
        <p>aaaaa</p>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '特别鸣谢', className: 'title-h1' }],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2022
        {' '}
        <a href="https://andisionzhang.com">Andision Zhang</a>
        {' '}
        All Rights Reserved
      </span>
    ),
  },
};

export const Feature60DataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: { className: 'feature6-title-text', children: '服务指标' },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万' },
              toText: true,
              children: '116',
            },
            children: { className: 'feature6-text', children: '模型数据' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '1.17',
            },
            children: { className: 'feature6-text', children: '模型迭代数量' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '2.10',
            },
            children: { className: 'feature6-text', children: '训练样本数量' },
          },
        ],
      },
      {
        title: { className: 'feature6-title-text', children: '服务指标' },
        className: 'feature6-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            name: 'child0',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万' },
              toText: true,
              children: '116',
            },
            children: { className: 'feature6-text', children: '模型数据' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child1',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '1.17',
            },
            children: { className: 'feature6-text', children: '模型迭代数量' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child2',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '2.10',
            },
            children: { className: 'feature6-text', children: '训练样本数量' },
          },
        ],
      },
    ],
  },
};

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://s1.ax1x.com/2022/09/12/vXgva4.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'Coded by Andision Zhang ',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '产品更新记录' },
            { name: 'link1', href: '#', children: 'API文档' },
            { name: 'link2', href: '#', children: '快速入门' },
            { name: 'link3', href: '#', children: '参考指南' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: '联系我们' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '资源' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Andision' },
            { href: '#', name: 'link1', children: 'ZHANG' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2022
        {' '}
        <a href="https://andisionzhang.com">Andision Zhang</a>
        {' '}
        All Rights Reserved
      </span>
    ),
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  // img: {
  //   children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  // },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '黄河流域内蒙古段' },
  content: {
    className: 'content1-content',
    children:
      '内蒙古黄河流域（37°30′～41°50′N，106°～113°E）地处黄河几字湾的上半部分，总面积 15.10×104 km2，主要流经乌海市、巴彦淖尔市、鄂尔多斯市、包头市以及呼和浩特市五个行政区划，这一区域国土面积、常住人口分别占全区的 44%、50%，占整个黄河流域面积的 19%。该区海拔范围在718-3526 m，流域地貌类型多样，分布有沙漠、高原、丘陵、山地和平原，其中分布有腾格里沙漠、乌兰布和沙漠、库布其沙漠和毛乌素沙地，以及大面积有明显沙化趋势的土地。气候以温带大陆性气候为主，年均温约6.6 ℃，多年平均降水量为297.25 mm，空间分布上多年年均降水量介于120～450 mm之间，时间和空间上分布不均；土壤类型以黄绵土为主，土质疏松、脱水固结快、易侵蚀崩解，此外，还有褐土、黑垆土、风沙土、灰漠土等类型。该区水系干流上有“海勃湾”、三盛公、“万家寨”等重要枢纽工程，研究区包括“乌梁素海”和“哈素海”。',
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: { className: 'content2-title', children: '分布式中间件' },
  content: {
    className: 'content2-content',
    children:
      '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '黄河流域内蒙古段',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  img: {
    children: './assets/pic1.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '技术' },
        content: {
          className: 'content6-content',
          children:
            '内蒙古黄河流域（37°30′～41°50′N，106°～113°E）地处黄河几字湾的上半部分，总面积 15.10×104 km2，主要流经乌海市、巴彦淖尔市、鄂尔多斯市、包头市以及呼和浩特市五个行政区划，这一区域国土面积、常住人口分别占全区的 44%、50%，占整个黄河流域面积的 19%。该区海拔范围在718-3526 m，流域地貌类型多样，分布有沙漠、高原、丘陵、山地和平原，其中分布有腾格里沙漠、乌兰布和沙漠、库布其沙漠和毛乌素沙地，以及大面积有明显沙化趋势的土地。气候以温带大陆性气候为主，年均温约6.6 ℃，多年平均降水量为297.25 mm，空间分布上多年年均降水量介于120～450 mm之间，时间和空间上分布不均；土壤类型以黄绵土为主，土质疏松、脱水固结快、易侵蚀崩解，此外，还有褐土、黑垆土、风沙土、灰漠土等类型。该区水系干流上有“海勃湾”、三盛公、“万家寨”等重要枢纽工程，研究区包括“乌梁素海”和“哈素海”。',
        },
      },
      // {
      //   name: 'block1',
      //   img: {
      //     className: 'content6-icon',
      //     children:
      //       'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
      //   },
      //   title: { className: 'content6-title', children: '融合' },
      //   content: {
      //     className: 'content6-content',
      //     children:
      //       '解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。',
      //   },
      // },
      // {
      //   name: 'block2',
      //   img: {
      //     className: 'content6-icon',
      //     children:
      //       'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
      //   },
      //   title: { className: 'content6-title', children: '开发' },
      //   content: {
      //     className: 'content6-content',
      //     children:
      //       '符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
      //   },
      // },
    ],
  },
};
export const Feature41DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '黄河流域内蒙古段研究重点',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  img: {
    children: 'https://s1.ax1x.com/2022/09/07/vH5QhR.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '技术' },
        content: {
          className: 'content6-content',
          children:
            '黄河流域内蒙古段分布有平原农田、温带草原、山地森林与灌丛草地、沙漠等多种地貌植被景观，生态环境极其脆弱，不同类型区生态水文关系复杂多样。在气候变化和人类活动的双重影响下，流域生态及水文功能严重退化。对于不同生态系统，其生态格局与水文功能的适宜性存在显著差异，探明生态系统在不同时空尺度的环境因子影响机制、水文功能及其可持续性和适宜的生态修复模式等方面的研究还不充分。在气候变化和人类活动的双重影响下，流域生态水文协同退化，生态环境恶化加剧，水资源保障形势严峻。因此，黄河流域内蒙古段生态系统、水文功能协调恢复是个复杂的系统动力工程，需要空间协调、生态和水文协同。为解决上述问题，亟待建立示范区一体化综合观测试验平台和多尺度生态水文数据库，形成天-空-地交互的嵌套式多尺度生态水文一体化综合观测试验网络，揭示气象-土壤-环境多维要素的时空变化特征及其协同效应，解析气候变化和人类活动影响下，不同地貌类型区生态系统与水资源间互馈驱动机制，提出植被格局可持续性、水文功能与生态恢复模式适宜性评估方法，为机理分析、模型构建、模拟预测等研究提供坚实基础。',
        },
      },
      // {
      //   name: 'block1',
      //   img: {
      //     className: 'content6-icon',
      //     children:
      //       'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
      //   },
      //   title: { className: 'content6-title', children: '融合' },
      //   content: {
      //     className: 'content6-content',
      //     children:
      //       '解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。',
      //   },
      // },
      // {
      //   name: 'block2',
      //   img: {
      //     className: 'content6-icon',
      //     children:
      //       'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
      //   },
      //   title: { className: 'content6-title', children: '开发' },
      //   content: {
      //     className: 'content6-content',
      //     children:
      //       '符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
      //   },
      // },
    ],
  },
};
