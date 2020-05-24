(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[643],{1987:function(n,e,t){"use strict";t.r(e),e.default="List\u5217\u8868\n===\n\n\u5217\u8868\u7ec4\u4ef6\n\n```jsx\nimport { List } from 'uiw';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  '\"X\u6218\u8b66\u65b0\u53d8\u79cd\u4eba\"\u9996\u66dd\u6d77\u62a5\u7279\u5199\u8be1\u5f02\u4eba\u8138',\n  '\u516d\u5927\u53d8\u4e94\u5927\uff1f\u4f20\u8fea\u58eb\u5c3c600\u4ebf\u6536\u8d2d\u798f\u65af',\n  '\u5feb\u8dd1!\u300a\u4f8f\u7f57\u7eaa\u4e16\u754c2\u300b\u6b63\u5f0f\u9884\u544a\u8981\u6765\u4e86',\n];\nconst Demo = () => (\n  <div>\n    <List header={<div>\u5217\u8868\u5934\u90e8</div>} footer={<div>\u5217\u8868\u5c3e\u90e8</div>}>\n      <List.Item>\"X\u6218\u8b66\u65b0\u53d8\u79cd\u4eba\"\u9996\u66dd\u6d77\u62a5\u7279\u5199\u8be1\u5f02\u4eba\u8138</List.Item>\n      <List.Item>\u516d\u5927\u53d8\u4e94\u5927\uff1f\u4f20\u8fea\u58eb\u5c3c600\u4ebf\u6536\u8d2d\u798f\u65af</List.Item>\n      <List.Item>\u5feb\u8dd1!\u300a\u4f8f\u7f57\u7eaa\u4e16\u754c2\u300b\u6b63\u5f0f\u9884\u544a\u8981\u6765\u4e86</List.Item>\n    </List>\n    <h4 style={{ margin: '16px 10px' }}>\u9ed8\u8ba4\u5c3a\u5bf8\uff0c\u6ca1\u6709\u5934\u90e8\u548c\u5c3e\u90e8</h4>\n    <List\n      dataSource={data}\n      noHover\n      renderItem={item => (<List.Item>{item}</List.Item>)}\n    />\n    <h4 style={{ margin: '16px 10px' }}>\u5c0f\u5c3a\u5bf8</h4>\n    <List\n      size=\"small\"\n      header={<div>\u5217\u8868\u5934\u90e8</div>} \n      footer={<div>\u5217\u8868\u5c3e\u90e8</div>}\n      dataSource={data}\n      renderItem={item => (<List.Item>{item}</List.Item>)}\n    />\n    <h4 style={{ margin: '16px 10px' }}>\u5927\u5c3a\u5bf8</h4>\n    <List\n      size=\"large\"\n      header={<div>\u5217\u8868\u5934\u90e8</div>} \n      footer={<div>\u5217\u8868\u5c3e\u90e8</div>}\n      dataSource={data}\n      renderItem={item => (<List.Item>{item}</List.Item>)}\n    />\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u7279\u6b8a\u65b9\u6cd5\n\n\u901a\u8fc7`dataSource`\u548c`renderItem`\u6765\u521b\u5efa\u5217\u8868\uff0c\u8fd9\u4e24\u4e2a\u5c5e\u6027\u662f\u4e00\u8d77\u4f7f\u7528\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  '\"X\u6218\u8b66\u65b0\u53d8\u79cd\u4eba\"\u9996\u66dd\u6d77\u62a5\u7279\u5199\u8be1\u5f02\u4eba\u8138',\n  '\u516d\u5927\u53d8\u4e94\u5927\uff1f\u4f20\u8fea\u58eb\u5c3c600\u4ebf\u6536\u8d2d\u798f\u65af',\n  <span>\u5feb\u8dd1!\u300a\u4f8f\u7f57\u7eaa\u4e16\u754c2\u300b\u6b63\u5f0f\u9884\u544a\u8981\u6765\u4e86</span>,\n];\nconst Demo = () => (\n  <List\n    header={<div>\u5217\u8868\u5934\u90e8</div>}\n    footer={<div>\u5217\u8868\u5c3e\u90e8</div>}\n    dataSource={data}\n    renderItem={item => {\n      return (<List.Item>{item}</List.Item>);\n    }}\n  />\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u7981\u7528\u884c\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  {\n    'content': '\"X\u6218\u8b66\u65b0\u53d8\u79cd\u4eba\"\u9996\u66dd\u6d77\u62a5\u7279\u5199\u8be1\u5f02\u4eba\u8138'\n  },\n  {\n    'content': '\u516d\u5927\u53d8\u4e94\u5927\uff1f\u4f20\u8fea\u58eb\u5c3c600\u4ebf\u6536\u8d2d\u798f\u65af'\n  },\n  {\n    'disabled': true,\n    'content': '\u5feb\u8dd1!\u300a\u4f8f\u7f57\u7eaa\u4e16\u754c2\u300b\u6b63\u5f0f\u9884\u544a\u8981\u6765\u4e86'\n  },\n];\nclass Demo extends React.Component {\n  onClick(item,index,e){\n    e.stopPropagation();\n    console.log('item',item,e);\n  }\n  render() {\n    return (\n      <List\n        header={<div>\u5217\u8868\u5934\u90e8</div>}\n        footer={<div>\u5217\u8868\u5c3e\u90e8</div>}\n        dataSource={data}\n        renderItem={(item,index) => {\n          return (\n            <List.Item onClick={this.onClick.bind(this, item, index)} disabled={item.disabled}>\n              {item.content}\n            </List.Item>\n          );\n        }}\n      />\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u884c\u6fc0\u6d3b\n\n`List.Item` \u8bbe\u7f6e `active` \u5c5e\u6027\u5373\u53ef\u8bbe\u7f6e\u8fd9\u5f20\u88ab\u6fc0\u6d3b\u7684\u6837\u5f0f\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst Demo = () => (\n  <List size=\"small\" header={<div>\u5217\u8868\u5934\u90e8</div>} footer={<div>\u5217\u8868\u5c3e\u90e8</div>}>\n    <List.Item active>\"X\u6218\u8b66\u65b0\u53d8\u79cd\u4eba\"\u9996\u66dd\u6d77\u62a5\u7279\u5199\u8be1\u5f02\u4eba\u8138</List.Item>\n    <List.Item>\u516d\u5927\u53d8\u4e94\u5927\uff1f\u4f20\u8fea\u58eb\u5c3c600\u4ebf\u6536\u8d2d\u798f\u65af</List.Item>\n    <List.Item>\u5feb\u8dd1!\u300a\u4f8f\u7f57\u7eaa\u4e16\u754c2\u300b\u6b63\u5f0f\u9884\u544a\u8981\u6765\u4e86</List.Item>\n  </List>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u6591\u9a6c\u7ebf\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  '\u4eba\u603b\u662f\u5728\u63a5\u8fd1\u5e78\u798f\u65f6\u500d\u611f\u5e78\u798f\uff0c\u5728\u5e78\u798f\u8fdb\u884c\u65f6\u5374\u60a3\u5f97\u60a3\u5931\u3002',\n  '\u56e0\u4e3a\u7231\u8fc7\uff0c\u6240\u4ee5\u6148\u60b2\uff1b\u56e0\u4e3a\u61c2\u5f97\uff0c\u6240\u4ee5\u5bbd\u5bb9\u3002',\n  '\u4f60\u5982\u679c\u8ba4\u8bc6\u4ece\u524d\u7684\u6211\uff0c\u4e5f\u8bb8\u4f60\u4f1a\u539f\u8c05\u73b0\u5728\u7684\u6211\u3002',\n  <span>\u4f60\u8fd8\u4e0d\u6765\uff0c\u6211\u600e\u6562\u8001\u53bb\u3002</span>,\n];\nconst Demo = () => (\n  <List\n    dataSource={data}\n    striped={true}\n    size=\"small\"\n    renderItem={item => {\n      return (<List.Item>{item}</List.Item>);\n    }}\n  />\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u5217\u8868\u4e3a\u8d85\u94fe\u63a5\n\n`List.Item` \u8bbe\u7f6e\u4e86 `href`\uff0c`List.Item`\u5c31\u53ef\u4ee5\u8bbe\u7f6e\u6807\u7b7e`<a>`\u7684\u6240\u6709\u5c5e\u6027\u4e86\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  {\n    'href':'#/cn/list',\n    'content': '\"X\u6218\u8b66\u65b0\u53d8\u79cd\u4eba\"\u9996\u66dd\u6d77\u62a5\u7279\u5199\u8be1\u5f02\u4eba\u8138'\n  },\n  {\n    'target':'_blank',\n    'href':'https://uiw-react.github.io/icons/',\n    'content': '\u4eceuiw\u7ec4\u4ef6\u5e93\u4e2d\u62bd\u79bb\u51fa\u6765\u7684\uff0c\u56fe\u6807\u5b57\u4f53 uiw-iconfont \u53d1\u5e03'\n  },\n  {\n    'href':'#/cn/list',\n    'disabled': true,\n    'content': '\u5feb\u8dd1!\u300a\u4f8f\u7f57\u7eaa\u4e16\u754c2\u300b\u6b63\u5f0f\u9884\u544a\u8981\u6765\u4e86'\n  },\n];\nconst Demo = () => (\n  <List\n    header={<div>\u5217\u8868\u5934\u90e8</div>}\n    footer={<div>\u5217\u8868\u5c3e\u90e8</div>}\n    dataSource={data}\n    renderItem={(item, index) => {\n      return (\n        <List.Item {...item}>\n          {item.content}\n        </List.Item>\n      );\n    }}\n  />\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u5c55\u793a\u989d\u5916\u5185\u5bb9\n\n`List.Item` \u8bbe\u7f6e\u4e86 `extra`\uff0c`List.Item` \u5c31\u53ef\u4ee5\u8bbe\u7f6e\u53f3\u4fa7\u5185\u5bb9\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  {\n    'extra': '\u5185\u5bb9',\n    'content': '\"X\u6218\u8b66\u65b0\u53d8\u79cd\u4eba\"\u9996\u66dd\u6d77\u62a5\u7279\u5199\u8be1\u5f02\u4eba\u8138'\n  },\n  {\n    'extra': '\u5185\u5bb9',\n    'content': '\u4eceuiw\u7ec4\u4ef6\u5e93\u4e2d\u62bd\u79bb\u51fa\u6765\u7684\uff0c\u56fe\u6807\u5b57\u4f53 uiw-iconfont \u53d1\u5e03'\n  },\n  {\n    'href':'#/cn/list',\n    'disabled': true,\n    'extra': '\u5185\u5bb9',\n    'content': '\u5feb\u8dd1!\u300a\u4f8f\u7f57\u7eaa\u4e16\u754c2\u300b\u6b63\u5f0f\u9884\u544a\u8981\u6765\u4e86'\n  },\n];\nconst Demo = () => (\n  <List\n    header={<div>\u5217\u8868\u5934\u90e8</div>}\n    footer={<div>\u5217\u8868\u5c3e\u90e8</div>}\n    dataSource={data}\n    renderItem={(item, index) => {\n      return (\n        <List.Item {...item}>\n          {item.content}\n        </List.Item>\n      );\n    }}\n  />\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## List\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| size | \u8bbe\u7f6e\u884c\u5c3a\u5bf8\uff0c\u5206\u522b\u5927\u3001\u4e2d\u3001\u5c0f\u4e09\u79cd\u5c3a\u5bf8 | Enum{`small`,`default`,`large`} | `default` |\n| bordered | \u662f\u5426\u5c55\u793a\u8fb9\u6846 | Boolean | `true` |\n| noHover | \u53d6\u6d88\u9f20\u6807\u79fb\u8fc7\u65f6\u8fb9\u6846\u9634\u5f71 | Boolean | `false` |\n| active | \u6fc0\u6d3b\u5217\u8868\uff0c\u9f20\u6807\u7ecf\u8fc7\u8fb9\u6846\u9634\u5f71\u6548\u679c | Boolean | `false` |\n| striped | \u6591\u9a6c\u7ebf\u6548\u679c | Boolean | `false` |\n| footer | \u5217\u8868\u5e95\u90e8 | String/ReactNode | - |\n| header | \u5217\u8868\u5934\u90e8 | String/ReactNode | - |\n| dataSource | \u662f\u5426\u5c55\u793a\u8fb9\u6846 | Boolean | - |\n| renderItem | \u901a\u8fc7\u6bc1\u6389\u51fd\u6570\u8fd4\u56deDome\uff0c\u6e32\u67d3\u5217\u8868\u6bcf\u4e2a\u884c | Function(item,index) | - |\n\n## List.Item\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| --------- | -------- | --------- | -------- |\n| active | \u6fc0\u6d3b | Boolean | `false` |\n| extra | \u989d\u5916\u5185\u5bb9\uff0c\u5c55\u793a\u53f3\u4fa7\u5185\u5bb9 | React.ReactNode | - |\n| disabled | \u7981\u7528 | Boolean | `false` |\n| href | \u89c4\u5b9a\u94fe\u63a5\u7684\u76ee\u6807\uff0c`true` \u7684\u65f6\u5019\u662f\u4e2a\u8d85\u94fe\u63a5\uff0c\u503c\u4e3a`String`\u7684\u65f6\u5019\uff0c\u5728\u8d85\u94fe\u63a5\u4e0a\u52a0 `href` \u7684\u503c\u5c31\u662f\u4f60\u4f20\u8fdb\u6765\u7684 `href`\u503c\uff0c\u6b64\u65f6\u5c06\u53ef\u4ee5\u8bbe\u7f6e\u6807\u7b7e`<a>`\u7684\u6240\u6709\u5c5e\u6027\u3002  | Boolean/String | `false` |\n\n"}}]);