import { useStore } from '../../store/use-store';

import TodoItem from '../TodoItem';

function Todolist() {
  const { todolist } = useStore();

  return (
    <div>
      {todolist.map(item => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Todolist;
