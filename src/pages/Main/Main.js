import { useState } from 'react';
import uuid from 'react-uuid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Input from '../../components/Input';
import StoreContext from '../../store/context';
import Title from '../../components/Title';
import { TITLE } from '../../globals/constants';
import Todolist from '../../components/Todolist';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [todolist, setTodolist] = useState([]);

  const handleAddTodo = description => {
    const newTodo = {
      description,
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
    const updatedTodolist = todolist.map(todo =>
      todo.id === id
        ? {
            ...todo,
            description,
          }
        : todo
    );

    setTodolist(updatedTodolist);
  };

  const handleTodoRemove = id => {
    const filteredTodolist = todolist.filter(todo => todo.id !== id);

    setTodolist(filteredTodolist);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <Title text={TITLE} />
      </div>
      <div className={classes.contentContainer}>
        <Card className={classes.card}>
          <CardContent>
            <StoreContext.Provider
              value={{
                handleAddTodo,
                handleTodoCheckedChange,
                handleTodoEdit,
                handleTodoRemove,
                todolist,
              }}
            >
              <div>
                <Input />
              </div>
              <div>
                <Todolist />
              </div>
            </StoreContext.Provider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Main;
