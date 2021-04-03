import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { connect } from "react-redux";
import * as actionTypes from "../store/action";

const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});

const TodoList = ({ todoList, setTitle, setItem, setEdit, deleteItem }) => {
  const classes = useStyles();

  const handleEdit=(item)=>{
    setTitle(item.value);
    setEdit();
    setItem(item);
  }
  const handleDelete=(item)=>{
    setItem(item);
    deleteItem();
  }
  const renderItem = (item) => {
    return (
      <ListItem key={item.id} button>
        <ListItemIcon>
          <CheckCircleIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={item.value} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => handleEdit(item)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(item)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  };
  return (
    <Container className={classes.container} maxWidth="md">
      <List>
        {todoList.map((item) => {
          return renderItem(item);
        })}
      </List>
    </Container>
  );
};
const mapStateToProps = (state) => {
    console.log(state.items)
  return {
    todoList: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(actionTypes.setTitle(title)),
    setItem: (item) => dispatch(actionTypes.setItem(item)),
    deleteItem: (item) => dispatch(actionTypes.deleteItem(item)),
    setEdit: () => dispatch(actionTypes.setEdit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
