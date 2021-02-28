import { useEffect, useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import API from '../../fetchAPI';
import { FILTER_BUTTON_ITEM, LOADER, TITLE } from '../../globals/constants';
import Filters from '../../components/Filters';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import removeSpaces from '../../helpers/removeSpaces';
import StoreContext from '../../store/context';
import Title from '../../components/Title';
import Todolist from '../../components/Todolist';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [iconToLoad, setIconToLoad] = useState('');
  const [isAddButtonLoading, setIsAddButtonLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isRemoveIconLoading, setIsRemoveIconLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(
    FILTER_BUTTON_ITEM.all.value
  );
  const [todolist, setTodolist] = useState([]);

  const getData = async () => {
    try {
      const response = await API.getTodos();

      setTodolist(response);
    } catch (e) {
      setIsPageLoading(false);
    } finally {
      setIsPageLoading(false);
    }
  };

  const addData = async newTodo => {
    try {
      setIsAddButtonLoading(true);

      const response = await API.addTodo(newTodo);

      setTodolist([...todolist, response]);
    } catch (e) {
      setIsAddButtonLoading(false);
    } finally {
      setIsAddButtonLoading(false);
    }
  };

  const updateData = async todo => {
    const { id } = todo;

    try {
      await API.updateTodo(todo, id);
    } catch (e) {
      console.error(e);
    }
  };

  const removeData = async id => {
    try {
      await API.removeTodo(id);
    } catch (e) {
      setIsRemoveIconLoading(false);
    } finally {
      setIsRemoveIconLoading(false);
    }
  };

  useEffect(() => {
    setIsPageLoading(true);

    getData();
  }, []);

  const handleTodoAdd = async description => {
    const normalizedDescription = removeSpaces(description);

    const newTodo = {
      description: normalizedDescription,
      done: false,
    };

    await addData(newTodo);
  };

  const handleTodoCheckedChange = async id => {
    const todoToUpdate = todolist.find(todo => todo.id === id);
    todoToUpdate.done = !todoToUpdate.done;

    await updateData(todoToUpdate);

    await getData();
  };

  const handleTodoEdit = async ({ description, id }) => {
    const normalizedDescription = removeSpaces(description);
    const todoToUpdate = todolist.find(todo => todo.id === id);

    todoToUpdate.description = normalizedDescription;

    await updateData(todoToUpdate);
  };

  const handleTodoRemove = async id => {
    setIconToLoad(id);

    setIsRemoveIconLoading(true);

    await removeData(id);

    const filteredTodolist = todolist.filter(todo => todo.id !== id);

    setTodolist(filteredTodolist);
  };

  const handleFilterSelect = text => {
    setSelectedFilter(text);
  };

  const handleClearAllCompleted = async () => {
    const completedTodos = todolist.filter(todo => todo.done);
    const filteredTodolist = todolist.filter(todo => !todo.done);

    await completedTodos.forEach(({ id }) => removeData(id));

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
                iconToLoad,
                isAddButtonLoading,
                isRemoveIconLoading,
                selectedFilter,
                todolist,
              }}
            >
              <Input />
              {isPageLoading ? (
                <Loader type={LOADER.page.type} />
              ) : (
                <div>
                  <Todolist />
                  <Filters />
                </div>
              )}
            </StoreContext.Provider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Main;
