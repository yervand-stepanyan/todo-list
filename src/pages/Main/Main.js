import { useState } from 'react';
import uuid from 'react-uuid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { FILTER_BUTTON_ITEM, TITLE } from '../../globals/constants';
import Filters from '../../components/Filters';
import Input from '../../components/Input';
import removeSpaces from '../../helpers/removeSpaces';
import StoreContext from '../../store/context';
import Title from '../../components/Title';
import Todolist from '../../components/Todolist';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [selectedFilter, setSelectedFilter] = useState(
    FILTER_BUTTON_ITEM.all.value
  );
  const [todolist, setTodolist] = useState([]);

  const handleTodoAdd = description => {
    const normalizedDescription = removeSpaces(description);

    const newTodo = {
      description: normalizedDescription,
      done: false,
      id: uuid(),
    };

    setTodolist([...todolist, newTodo]);
  };

  const handleTodoCheckedChange = id => {
    const updatedTodolist = todolist.map(todo =>
      todo.id === id
        ? {
            ...todo,
            done: !todo.done,
          }
        : todo
    );

    setTodolist(updatedTodolist);
  };

  const handleTodoEdit = ({ description, id }) => {
    const normalizedDescription = removeSpaces(description);

    const updatedTodolist = todolist.map(todo =>
      todo.id === id
        ? {
            ...todo,
            description: normalizedDescription,
          }
        : todo
    );

    setTodolist(updatedTodolist);
  };

  const handleTodoRemove = id => {
    const filteredTodolist = todolist.filter(todo => todo.id !== id);

    setTodolist(filteredTodolist);
  };

  const handleFilterSelect = text => {
    setSelectedFilter(text);
  };

  const handleClearAllCompleted = () => {
    const filteredTodolist = todolist.filter(todo => !todo.done);

    setTodolist(filteredTodolist);
  };

  return (
    <div className={classes.mainContainer}>
      <div>
        <Title text={TITLE} />
      </div>
      <div className={classes.contentContainer}>
        <Card className={classes.card}>
          <CardContent>
            <StoreContext.Provider
              value={{
                handleClearAllCompleted,
                handleFilterSelect,
                handleTodoAdd,
                handleTodoCheckedChange,
                handleTodoEdit,
                handleTodoRemove,
                selectedFilter,
                todolist,
              }}
            >
              <Input />
              <Todolist />
              <Filters />
            </StoreContext.Provider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Main;
