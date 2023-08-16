import React from "react";
import { useState } from "react";
import { Crud } from "./Crud";

function Comment() {
  const [list, setList] = useState([]);
  const [newComment, setNewComment] = useState("");
  const handleChange = (event) => {
    setNewComment(event.target.value);
  };
  const addComment = () => {
    const comment = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      commentName: newComment,
      completed: false,
    };
    const newList = [...list, comment];
    setList(newList);
  };

  const deleteComment = (id) => {
    const deletedList = list.filter((comment) => comment.id !== id);
    setList(deletedList);
  };

  const completeComment = (id) => {
    setList(
      list.map((comment) =>
        comment.id === id ? { ...comment, completed: true } : comment
      )
    );
  };

  return (
    <div>
      <div>
        <input onChange={handleChange} />
        <button onClick={addComment}>Leave your Comment</button>
      </div>
      <div>
        {list.map((element) => {
          return (
            <Crud
              commentName={element.commentName}
              id={element.id}
              deleteComment={deleteComment}
              completed={element.completed}
              completeComment={completeComment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comment;
