import PropTypes from 'prop-types';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li className="flex items-center justify-between p-3 bg-white rounded shadow hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id, todo.completed)}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
        {todo.title}
      </span>
    </div>
    <button
      onClick={() => onDelete(todo.id)}
      className="text-red-500 hover:text-red-700 focus:outline-none"
      aria-label="Delete todo"
    >
      Delete
    </button>
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;