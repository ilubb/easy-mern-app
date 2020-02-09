import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import uuid from "uuid";
import ShoppingListItem from "./ShoppingListItem";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Name1" },
      { id: uuid(), name: "Name2" },
      { id: uuid(), name: "Name3" },
      { id: uuid(), name: "Name4" },
      { id: uuid(), name: "Name5" },
      { id: uuid(), name: "Name6" }
    ]
  };

  handleDeleteItem = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          className="m-3"
          onClick={() => {
            const name = prompt("Введите название");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Добавить
        </Button>

        <ListGroup>
          {items.map(({ id, name }) => (
            <ShoppingListItem
              key={id}
              id={id}
              name={name}
              onDelete={this.handleDeleteItem}
            />
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;
