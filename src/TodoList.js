import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tdlist: [],
      inputValue: ''
    }
  }

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

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleBtnClick() {
    this.setState({
      tdlist: [...this.state.tdlist, this.state.inputValue],
      inputValue: ''
    })
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.tdlist.map((it, index) => {
              return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{it}</li>
            })
          }
        </ul>
      </div>
    );
  }

}

export default TodoList;
