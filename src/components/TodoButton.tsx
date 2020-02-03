import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Textarea from 'react-textarea-autosize';

interface TodoButtonProps {
  title: boolean;
}

const TodoButton: React.FC<TodoButtonProps> = ({title}) => {
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
  const renderForm = () => {
    const placeholder = title ? "Enter list title..." : "Enter a title for this card";
    const buttonTitle = title ? "Add List" : "Add Card";

    return (
      <div>
        <Card style={{
          minHeight: 85,
          minWidth: 272,
          padding: "6px 8px 2px"
        }}
        >
          <Textarea
            placeholder={placeholder}
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
            variant="contained"
            style={{color: "white", backgroundColor: "#5aac44"}}
          >
            {buttonTitle}{""}
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
    const buttonText = title ? "Add another list" : "Add another card";
    const buttonTextOpacity = title ? 1 : 0.5;
    const buttonTextColor = title ? "white" : "inherit";
    const buttonTextBackground = title ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
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
    paddingLeft: 3
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  }
}

export default TodoButton;
