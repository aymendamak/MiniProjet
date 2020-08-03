import React from "react";
import shortid from "shortid";
import './TodoForm.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default class TodoForm extends React.Component {
  state = {
    title: "",
    description: "",
    status:"",
    open: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    
    event.preventDefault();
    if (this.state.title !== "") {
      this.props.onSubmit({
      id: shortid.generate(),
      title: this.state.title,
      description: this.state.description,
      status: this.state.status
    });
    this.setState({
      title: "",
      description: "",
      status:""
    });
    }
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <Modal id='modal' open={this.state.open} onClose={this.onCloseModal} center>
          To Do
           <br />
           <br/>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="todo..."
          />
          <hr/>
          <br/>
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="description..."
          />
          <hr/>
          <br/>
          <label>
            <input name='status' type="radio" value="To Do" onChange={this.handleChange} />
            To Do
          </label>

          <label>
            <input name='status' type="radio" value="in Progress" onChange={this.handleChange} />
            in Progress
          </label>

          <label>
            <input name='status' type="radio" value="Done" onChange={this.handleChange} />
            Done
          </label>

          <br />
          <br/>
          <button id='addButton' onClick={this.handleSubmit}>Add</button>
          <button id='cancleButton' onClick={this.onCloseModal}>Cancle</button>
        </Modal>
        <button id='addButton1' onClick={this.onOpenModal}>Add</button>
      </form>
    );
  }
}
