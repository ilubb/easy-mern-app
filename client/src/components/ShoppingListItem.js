import React, { Component } from "react";
import { ListGroupItem, Button } from "reactstrap";

class ShoppingListItem extends Component {
  render() {
    return (
      <ListGroupItem>
        <Button
          color="danger"
          size="sm"
          className="mr-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          &times;
        </Button>
        {this.props.name}
      </ListGroupItem>
    );
  }
}

export default ShoppingListItem;
