import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Textarea from 'react-textarea-autosize';

interface TodoButtonProps {
  id: string;
  createCard: (id: string, text: string) => void
}

const TodoButton: React.FC<TodoButtonProps> = ({createCard, id}) => {
  const [form, setForm] = useState(false);
  const [text, setText] = useState("");

  const openForm = () => {
    setForm(true);
  }
  const closeForm = () => {
    setForm(false);
  }
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }
  const handleAddCard = () => {
    if(text) {
      createCard(id, text)
    }
  }
  const renderForm = () => {
    return (
      <div>
        <Card style={{
          minHeight: 80,
          minWidth: 272,
          padding: "6px 8px 2px"
        }}
        >
          <Textarea
            placeholder="Add card"
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleChangeText}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "hidden"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={handleAddCard}
            variant="contained"
            style={{color: "white", backgroundColor: "#5aac44"}}
          >
            Add Card
          </Button>
          <Icon
            style={{
              marginLeft: 8, cursor: "pointer" }}
          >
            close
          </Icon>
        </div>
      </div>
    )
  }

  const renderAddButton = () => {
    return (
      <div
        onClick={openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: 1,
          color: "white",
          backgroundColor: "rgba(0,0,0,.15)"
        }}
      >
        <Icon>add</Icon>
        <p>Add another card</p>
      </div>
    )
  }

  return (
    form ? renderForm() : renderAddButton()
  );
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    width: 272,
    height: 36,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  }
}

export default TodoButton;
