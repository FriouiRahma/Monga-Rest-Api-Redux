import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {connect}  from 'react-redux';
import {addMonga,updateMonga} from '../actions/mongaActions';



class ModalComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
      author: "",
      year: ""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleOperation=()=>{
    if (this.props.edit)
      this.props.updateMonga(this.state._id,{
         name: this.state.name,
         author:this.state.author,
         year:this.state.year
      })
      else
      this.props.addMonga({
        name:  this.state.name,
        author:this.state.author,
        year:this.state.year,
        
      })
      this.setState({show: false})
  }
  //si le props "edit" de ce modal true ;lorsque le render s'affiche les imput va ètre rempli
componentDidMount(){
    if (this.props.edit)
    this.setState({
        ... this.props.MongaToupdate
    })
   

}
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.editMode ? "Edit Manga" : "Add new manga"}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>name:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                />
              </div>
              <div>
                <label>author:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="author"
                  value={this.state.author}
                />
              </div>
              <div>
                <label>year:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="year"
                  value={this.state.year}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleOperation}>
              {this.props.edit ?"Edit" :"Addmovie"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default  connect(null,
    {addMonga,
    updateMonga}) (ModalComp);
