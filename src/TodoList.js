import React from 'react';

class TodoList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      tdlist : []
    }
  }


  handleBtnClick(){
    this.setState = ({
      tdlist : [...this.state.tdlist,'hello world']
    })
  }

  render() {
    return (
      <div>
        <div>
          <input />
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.tdlist.map((it,index) => {
              return <li key={index}>{it}</li>
            })
          }
        </ul>
      </div>
    );
  }
 
}

export default TodoList;
 