Loader 加载器
===

用于页面和区块的加载中状态。

```jsx
import { Loader } from 'uiw';
```

### 基础实例

<!--DemoStart,bgWhite,codePen--> 
```js
import { Loader } from 'uiw';

ReactDOM.render(
  <div>
    <Loader size="small" />
    <Loader />
    <Loader size="large" />
  </div>,
  _mount_
);
```
<!--End-->


### 警告提示中加载

<!--DemoStart,bgWhite,codePen--> 
```js
import { Loader, Row, Col, Message } from 'uiw';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true
    }
  }
  render() {
    return (
      <div>
        <Row gutter={10}>
          <Col>
            <Button
              style={{ marginBottom: 10 }}
              size="small"
              onClick={()=>{
                this.setState({
                  loading: !this.state.loading,
                });
              }}
            >点击切换加载状态</Button>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col fixed>
            <Loader loading={this.state.loading}>
              <Message type="success" title="成功提示标题" description="这里是成功提示详情描述。" />
            </Loader>
          </Col>
          <Col fixed>
            <Loader loading={this.state.loading}>
              <Message type="warning" title="成功提示标题" description="这里是成功提示详情描述。" />
            </Loader>
          </Col>
        </Row>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 卡片加载中

<!--DemoStart,bgWhite,codePen--> 
```js
import { Loader, Card } from 'uiw';

ReactDOM.render(
  <Row gutter={10}>
    <Col fixed>
      <Card title="图标与文字一行显示" extra={<a href="#">更多</a>} style={{ width: 300 }}>
        <Loader color="red" tip="加载中..." style={{ width: '100%' }}>
          <div>
            卡片内容<br/>
            卡片内容<br/>
            卡片内容<br/>
          </div>
        </Loader>
      </Card>
    </Col>
    <Col>
      <Card title="图标与文字垂直显示" extra={<a href="#">更多</a>} style={{ width: 300 }}>
        <Loader tip="loading..." vertical style={{ width: '100%' }}>
          <div>
            卡片内容<br/>
            卡片内容<br/>
            卡片内容<br/>
          </div>
        </Loader>
      </Card>
    </Col>
  </Row>,
  _mount_
);
```
<!--End-->

### 自定义加载图标动画

<!--DemoStart,bgWhite,codePen--> 
```js
import { Loader, Card, Icon } from 'uiw';

ReactDOM.render(
  <div>
    <Card title="Card标题" extra={<a href="#">更多</a>} style={{ width: 300 }}>
      <Loader
        tip="加载中..."
        color="red"
        indicator={<Icon type="loading" spin={true} style={{ verticalAlign: 'text-top' }} />}
        style={{ width: '100%' }}
      >
        <div>
          卡片内容<br/>
          卡片内容<br/>
          卡片内容<br/>
        </div>
      </Loader>
    </Card>
  </div>,
  _mount_
);
```
<!--End-->

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| size | 尺寸 | Enum{`small`, `default`, `large`} | `default` |
| loading | 是否旋转 | Boolean | `true` |
| indicator | 加载指示符，可以加载一个 Icon 动画 | ReactNode | - |
| tip | 当作为包裹元素时，可以自定义描述文案 | String | - |
| color | 设置图标与文字的颜色 | String | - |
| vertical | 	图标与文字垂直显示 | Boolean | - |
