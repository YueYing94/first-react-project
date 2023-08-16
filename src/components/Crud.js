export const Crud = (props) => {
  return (
    <div style={{ backgroundColor: props.completed ? "green" : "#282c34" }}>
      <h4>
        {props.commentName}{" "}
        <button onClick={() => props.deleteComment(props.id)}>x</button>
        {!props.completed && (
          <button onClick={() => props.completeComment(props.id)}>√</button>
        )}
      </h4>
    </div>
  );
};
