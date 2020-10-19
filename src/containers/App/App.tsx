import React from "react";
import "./App.css";
import Todo from "../../components/Todo";
import TodoForm from "../../components/TodoForm";
import TodoFooter from "../../components/TodoFooter";
import { connect } from "react-redux";
import { setFilter } from '../../store/ducks/activeFilter';
import { VIEW_FILTERS } from '../../constants';
import { addTodo, deleteTodo, editTodo, toggleTodoCompletion, toggleTodoDeletion } from "../../store/ducks/todos";

function App(props: any) {

  const {todos, activeFilter, setActiveFilter, addTodo, deleteTodo, editTodo, toggleTodoCompletion, toggleTodoDeletion } = props;

  const displayTodo = (index: number): boolean => {
    if (activeFilter === VIEW_FILTERS.ALL) {
      return true;
    }
    if (
      activeFilter === VIEW_FILTERS.ACTIVE &&
      !todos[index].isCompleted &&
      !todos[index].isDeleted
    ) {
      return true;
    }
    if (
      activeFilter === VIEW_FILTERS.COMPLETED &&
      todos[index].isCompleted &&
      !todos[index].isDeleted
    ) {
      return true;
    }
    if (todos[index].isDeleted && activeFilter === VIEW_FILTERS.DELETED) {
      return true;
    }
    return false;
  };

  console.log(props.todos);

  return (
    <div className="app">
      <div className="todo-list card">
        <TodoForm addTodo={addTodo} />
        <div className="todo-list-items">
          {todos.map((todo: any, index: number) =>
            displayTodo(index) ? (
              <Todo
                key={index}
                index={index}
                lastModified={todo.lastModified}
                todo={todo}
                toggleTodoCompletion={toggleTodoCompletion}
                toggleTodoDeletion={toggleTodoDeletion}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            ) : null
          )}
        </div>
        <TodoFooter
          changeViewFilter={setActiveFilter}
          activeFilter={activeFilter}
          todosLeftCount={
            todos.length - todos.filter((todo: any) => todo.isCompleted).length
          }
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  todos: state.todos,
  activeFilter: state.activeFilter,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    setActiveFilter: (filter: string) => dispatch(setFilter(filter)),
    addTodo: (text: string) => dispatch(addTodo(text)),
    deleteTodo: (index: number) => dispatch(deleteTodo(index)),
    editTodo: (index: number, text: string) => dispatch(editTodo(index, text)),
    toggleTodoCompletion: (index: number) => dispatch(toggleTodoCompletion(index)),
    toggleTodoDeletion: (index: number) => dispatch(toggleTodoDeletion(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
