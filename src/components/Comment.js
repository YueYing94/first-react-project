import React from "react";
import { useState } from "react";

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
            <div
              style={{ backgroundColor: element.completed ? "green" : "#282c34" }}
            >
              <h4>
                {element.commentName}{" "}
                <button onClick={() => deleteComment(element.id)}>x</button>
                {!element.completed && (
                  <button onClick={() => completeComment(element.id)}>√</button>
                )}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comment;
