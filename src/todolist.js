import { Component } from "react";
import cooking from './cooking.png'
import listening from './listeing.png'

export class List extends Component{
    state = {
    userInput: "",
    todoList: []
    }

checkInput(e){
this.setState({userInput: e})
}

createArray(e){
let listarray = this.state.todoList;
listarray.push(e)
this.setState({todoList: listarray, userInput: ""})
}
deleteList(){
    let listarray = this.state.todoList;
    listarray = [];
    this.setState({todoList: listarray})
}
crossedDeal(e){
    const word = e.target;
    word.classList.toggle('crossed');
    }

    submitForm(e){
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>
            <div className="enter">
                <input type="text" placeholder="your plan ..." className="input"
                onChange={(e) => {this.checkInput(e.target.value)}}
                value={this.state.userInput}
                />
                <button className="btn add" onClick={() =>{this.createArray(this.state.userInput)}}> ADD </button>
            </div>
            <ul>
                {this.state.todoList.map((item,index) => (<li onClick={this.crossedDeal} key={index}> {item} </li>  ))}
            </ul>
            <div className='footer'>
            <img src={cooking} alt="cookingicon" width="60px" className="image"/>
            <button className="delete btn" onClick={() => this.deleteList()}> DELETE LIST </button>
            <img src={listening} alt="listeningicon" width="60px" className="image"/>
            </div> 
            </form>
            </div>
        )
    }
}