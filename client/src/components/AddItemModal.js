import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader
} from "reactstrap";
class AddItemModal extends Component {
  state = {
    isModalOpened: false,
    name: ""
  };

  toggle = () => {
    this.setState({ isModalOpened: !this.state.isModalOpened });
  };

  onChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.name);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="primary" className="mb-3" onClick={this.toggle}>
          Добавить
        </Button>
        <Modal isOpen={this.state.isModalOpened} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Добавить в список</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="addItemInput"></Label>
                <Input
                  type="text"
                  name="name"
                  id="addItemInput"
                  placeholder="Введите название"
                  onChange={this.onChange}
                />
                <Button color="dark" className="mt-3" block>
                  Добавить
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddItemModal;
