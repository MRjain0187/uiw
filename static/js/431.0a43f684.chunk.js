(this.webpackJsonpuiw=this.webpackJsonpuiw||[]).push([[431],{1353:function(t,n,o){"use strict";o.r(n),n.default='Tooltip \u6587\u5b57\u63d0\u793a\n===\n\n\u7b80\u5355\u7684\u6587\u5b57\u63d0\u793a\u6c14\u6ce1\u6846\u3002\n\n```jsx\nimport { Tooltip } from \'uiw\';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tooltip, Button } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tooltip placement="right" content="\u53f3\u8fb9\u6587\u5b57\u63d0\u793a">\n      <Button>\u53f3\u8fb9\u6587\u5b57\u63d0\u793a(right)</Button>\n    </Tooltip>\n    <Tooltip placement="top" content="\u4e0a\u8fb9\u6587\u5b57\u63d0\u793a">\n      <Button>\u4e0a\u8fb9\u6587\u5b57\u63d0\u793a(top)</Button>\n    </Tooltip>\n    <Tooltip placement="left" content="\u5de6\u8fb9\u6587\u5b57\u63d0\u793a">\n      <Button>\u5de6\u8fb9\u6587\u5b57\u63d0\u793a(left)</Button>\n    </Tooltip>\n    <Tooltip placement="bottom" content="\u4e0b\u8fb9\u6587\u5b57\u63d0\u793a">\n      <Button>\u4e0b\u8fb9\u6587\u5b57\u63d0\u793a(bottom)</Button>\n    </Tooltip>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u4f4d\u7f6e\n\n\u4f4d\u7f6e\u6709 `12` \u4e2a\u65b9\u5411\uff0c\u6839\u636e `placement` \u53c2\u6570\u6765\u8bbe\u7f6e\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tooltip, Button, Divider } from \'uiw\';\n\nconst btnStl = {position: \'relative\', width: 70 }\nconst Demo = () => (\n  <div>\n    <Tooltip placement="left" content={<strong>Hello uiw!</strong>}>\n      <Button type="primary">\u5de6\u8fb9\u6587\u5b57\u63d0\u793a(left)</Button>\n    </Tooltip>\n\n    <Tooltip placement="top" content={<strong>Hello uiw!</strong>}>\n      <Button type="primary">\u4e0a\u8fb9\u6587\u5b57\u63d0\u793a(top)</Button>\n    </Tooltip>\n\n    <Tooltip placement="bottom" content={<strong>Hello uiw!</strong>}>\n      <Button type="primary">\u4e0b\u8fb9\u6587\u5b57\u63d0\u793a(bottom)</Button>\n    </Tooltip>\n\n    <Tooltip placement="right" content={<strong>Hello uiw!</strong>}>\n      <Button type="primary">\u53f3\u8fb9\u6587\u5b57\u63d0\u793a(right)</Button>\n    </Tooltip>\n\n    <Divider />\n    <div style={{ position: \'relative\' }}>\n      <Tooltip placement="topLeft" content={<strong>Hello uiw!</strong>}>\n        <Button style={{ ...btnStl, left: 70 }}>TL</Button>\n      </Tooltip>\n      <Tooltip placement="top" content={<strong>Hello uiw!</strong>}>\n        <Button style={{ ...btnStl, left: 70}}>Top</Button>\n      </Tooltip>\n      <Tooltip placement="topRight" content={<strong>Hello uiw!</strong>}>\n        <Button style={{ ...btnStl, left: 70 }}>TR</Button>\n      </Tooltip>\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n      <Tooltip placement="leftTop" content={<span><strong>Hello uiw!</strong> \u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\uff0c\u6839\u636e placement \u53c2\u6570\u6765\u8bbe\u7f6e\u3002</span>}>\n        <Button style={{ ...btnStl }}>LT</Button>\n      </Tooltip>\n      <Tooltip placement="rightTop" content={<span><strong>Hello uiw!</strong> \u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\uff0c\u6839\u636e placement \u53c2\u6570\u6765\u8bbe\u7f6e\u3002</span>}>\n        <Button style={{ ...btnStl, left: 216 }}>RT</Button>\n      </Tooltip>\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n      <Tooltip placement="left" content={<span><strong>Hello uiw!</strong> \u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\uff0c\u6839\u636e placement \u53c2\u6570\u6765\u8bbe\u7f6e\u3002</span>}>\n        <Button style={{ ...btnStl }}>Left</Button>\n      </Tooltip>\n      <Tooltip placement="right" content={<span><strong>Hello uiw!</strong> \u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\uff0c\u6839\u636e placement \u53c2\u6570\u6765\u8bbe\u7f6e\u3002</span>}>\n        <Button style={{ ...btnStl, left: 216 }}>Right</Button>\n      </Tooltip>\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n      <Tooltip placement="leftBottom" content={<span><strong>Hello uiw!</strong> \u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\uff0c\u6839\u636e placement \u53c2\u6570\u6765\u8bbe\u7f6e\u3002</span>}>\n        <Button style={{ ...btnStl }}>LB</Button>\n      </Tooltip>\n      <Tooltip placement="rightBottom" content={<span><strong>Hello uiw!</strong> \u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\uff0c\u6839\u636e placement \u53c2\u6570\u6765\u8bbe\u7f6e\u3002</span>}>\n        <Button style={{ ...btnStl, left: 216 }}>RB</Button>\n      </Tooltip>\n    </div>\n    <div style={{ position: \'relative\', paddingTop: 10 }}>\n      <Tooltip placement="bottomLeft" content={<span><strong>Hello uiw!</strong> \u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\uff0c\u6839\u636e placement \u53c2\u6570\u6765\u8bbe\u7f6e\u3002</span>}>\n        <Button style={{ ...btnStl, left: 70 }}>BL</Button>\n      </Tooltip>\n      <Tooltip placement="bottom" content={<span><strong>Hello uiw!</strong> \u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\uff0c\u6839\u636e placement \u53c2\u6570\u6765\u8bbe\u7f6e\u3002</span>}>\n        <Button style={{ ...btnStl, left: 70 }}>Bottom</Button>\n      </Tooltip>\n      <Tooltip placement="bottomRight" content={<span><strong>Hello uiw!</strong> \u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\uff0c\u6839\u636e placement \u53c2\u6570\u6765\u8bbe\u7f6e\u3002</span>}>\n        <Button style={{ ...btnStl, left: 70 }}>BR</Button>\n      </Tooltip>\n    </div>\n\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u4e8b\u4ef6\n\n\u6587\u5b57\u63d0\u793a\u7ec4\u4ef6 `<Tooltip />`\uff0c\u901a\u8fc7\u8bbe\u7f6e\u5c5e\u6027 `trigger` \u53ef\u4ee5\u6587\u5b57\u63d0\u793a\u64cd\u4f5c\u65b9\u5f0f\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tooltip, Button } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n\n    <Tooltip trigger="hover" placement="top" content="Hello uiw!">\n      <Button type="primary">\u60ac\u6d6e\u5f39\u51fa\u6587\u5b57\u63d0\u793a(top)</Button>\n    </Tooltip>\n    <Tooltip trigger="click" placement="top" content="Hello uiw!">\n      <Button type="success">\u70b9\u51fb\u5f39\u51fa\u63d0\u793a(top)</Button>\n    </Tooltip>\n\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u6587\u5b57\u63d0\u793a\u6846\u4e0d\u663e\u793a\u7bad\u5934\n\n\u901a\u8fc7\u8bbe\u7f6e\u5c5e\u6027 `visibleArrow` \u53ef\u4ee5\u6587\u5b57\u63d0\u793a\u6846\u4e0d\u663e\u793a\u7bad\u5934\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tooltip, Button } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n\n    <Tooltip visibleArrow={false} trigger="hover" placement="top" content="Hello uiw!">\n      <Button type="primary">\u60ac\u6d6e\u5f39\u51fa\u6587\u5b57\u63d0\u793a(top)</Button>\n    </Tooltip>\n    <Tooltip visibleArrow={false} trigger="click" placement="right" content="Hello uiw!">\n      <Button type="success">\u70b9\u51fb\u5f39\u51fa\u63d0\u793a(right)</Button>\n    </Tooltip>\n\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u53d7\u63a7\u7ec4\u4ef6\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tooltip, Switch, Divider } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      isOpen: false,\n    }\n  }\n  onChange(e) {\n    this.setState({ isOpen: e.target.checked });\n  }\n  onVisibleChange(isOpen) {\n    this.setState({ isOpen });\n  }\n  render() {\n    return (\n      <div>\n        <Tooltip\n          visible={this.state.isOpen}\n          onVisibleChange={this.onVisibleChange.bind(this)}\n          placement="top"\n          content="Hello uiw!"\n        >\n          <span>\u9f20\u6807\u79fb\u52a8\u5230\u6b64\u5904\uff0c\u663e\u793a\u548c\u6d88\u5931\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 Switch \u7ec4\u4ef6\u6765\u63a7\u5236</span>\n        </Tooltip>\n        <Divider />\n        <Switch checked={this.state.isOpen} onChange={this.onChange.bind(this)} />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| content | \u663e\u793a\u7684\u5185\u5bb9 | String,React.ReactNode | - |\n| placement | \u6c14\u6ce1\u6846\u4f4d\u7f6e\uff0c\u53ef\u73b0\u5b9e\u7bad\u5934\u5728\u4e0d\u901a\u7684\u65b9\u4f4d | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | `top` |\n| visibleArrow | \u662f\u5426\u663e\u793a Tooltip \u7bad\u5934 | Boolean | `true` |\n| delay | \u5ef6\u8fdf\u8fdb\u5165\u548c\u6d88\u5931\uff0c`{ show: 2000, hide: 4000 }` \u6216\u8005\u76f4\u63a5\u8bbe\u7f6e `2000`\uff0c\u53ea\u5bf9 `trigger=hover` \u6709\u6548\uff0c\u7ee7\u627f `<OverlayTrigger />` \u7ec4\u4ef6\u5c5e\u6027 | Object/Number | - |\n| trigger | \u60ac\u505c/\u70b9\u51fb\u5f39\u51fa\u7a97\u53e3\uff0c\u7ee7\u627f `<OverlayTrigger />` \u7ec4\u4ef6\u5c5e\u6027 | Enum{`hover`, `click`} | `hover` |\n| disabled | \u662f\u5426\u7981\u7528\u5f39\u51fa\u76ee\u6807 | Boolean | `false` |\n| isOpen | \u9ed8\u8ba4\u662f\u5426\u663e\u793a\u5f39\u7a97\uff0c\u7ee7\u627f `<OverlayTrigger />` \u7ec4\u4ef6\u5c5e\u6027 | Boolean | `false` |\n| autoAdjustOverflow | \u5f39\u51fa\u5c42\u88ab\u906e\u6321\u65f6\u81ea\u52a8\u8c03\u6574\u4f4d\u7f6e\uff0c\u7ee7\u627f `<OverlayTrigger />` \u7ec4\u4ef6\u5c5e\u6027 | Boolean | `false` |\n| onVisibleChange | \u663e\u793a\u9690\u85cf\u7684\u56de\u8c03\uff0c\u7ee7\u627f `<OverlayTrigger />` \u7ec4\u4ef6\u5c5e\u6027 | Function(isVisible:bool) | - |\n\n\u66f4\u591a\u5c5e\u6027\u8bf7\u53c2\u8003 [OverlayTrigger](#/components/overlay-trigger)\u3002\n'}}]);