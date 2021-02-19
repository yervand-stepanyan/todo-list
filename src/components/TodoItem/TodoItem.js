import PropTypes from 'prop-types';

function TodoItem({ item }) {
  const { description } = item;

  return <div>{description}</div>;
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TodoItem;
