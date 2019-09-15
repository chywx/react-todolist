
## 跟随慕课网学习

[学习地址](https://www.imooc.com/learn/1023)

## 差异性

1. 并没有class extends，估计默认实现
1. 

## 运行方式

`npm start`

## 踩坑

1. ### setState
`this.setState({`写成了`this.setState = ({`

## 建议

```
  handleItemClick(index){
    // 不推荐
    // this.state.tdlist.splice(index,1);
    // this.setState({
    //   tdlist : this.state.tdlist
    // })
    // 推荐copy副本的方式
    const list = [...this.state.tdlist];
    list.splice(index,1);
    this.setState({
      tdlist:list
    })
  }
```
