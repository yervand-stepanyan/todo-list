import { useStore } from '../../store/use-store';

import TodoItem from '../TodoItem';
import { useStyles } from './Todolist.style';

function Todolist() {
  const classes = useStyles();
  const { handleTodoCheckedChange, todolist } = useStore();

  return (
    <div className={classes.todolistContainer}>
      {todolist.map(item => (
        <TodoItem
          handleTodoCheckedChange={handleTodoCheckedChange}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Todolist;
