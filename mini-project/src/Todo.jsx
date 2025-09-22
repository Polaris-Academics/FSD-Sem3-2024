import React, { Component } from 'react'

export default class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            heading:'',
            description:'',
            tasks:[]
        }
    }

    componentDidMount(){
        window.addEventListener('keydown',this.handleKeyPress)
    }
    componentWillUnMount(){
        window.removeEventListener('keydown',this.handleKeyPress)
    }

    handleKeyPress(e){
        if(e.key.toLowerCase() === 'a'){
            alert('Dont press A button!')
        }
    }

    add = () => {
        const updatedTasks = [...this.state.tasks,{heading:this.state.heading, description:this.state.description,completed:false}];
        this.setState({tasks:updatedTasks , heading:'', description:''});
    }
    delete = (index) => {
        const updatedTasks = this.state.tasks.filter((_,i) => i!==index);
        this.setState({tasks:updatedTasks});
    }
    toggleCheckbox = (index) => {
        const updatedTasks = this.state.tasks.map((task,i) => i===index ? {...task,completed:!task.completed} : task);
        this.setState({tasks:updatedTasks});
    }

  render() {
    return (
      <div>
        <input value={this.state.heading} onChange={(e) => this.setState({heading:e.target.value})} type="text" placeholder='Enter the heading..'/>
        <input value={this.state.description} onChange={(e) => this.setState({description:e.target.value})} type="text" placeholder='Enter the description'/>
        <button onClick={this.add}>Add</button>

        <div>
            {this.state.tasks.map((task, i) => {
                return(
                    <div key={i}>
                    <input type="checkbox" onChange={() => this.toggleCheckbox(i)}/>
                    <h2 style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.heading}</h2>
                    <h4 style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.description}</h4>
                    <button onClick={() => this.delete(i)}>Delete</button>
                </div>
                )
            })}
        </div>
      </div>
    )
  }
}
