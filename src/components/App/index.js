// react
import React from 'react';

// components
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../Footer';

// test component
import ErrorDialog from '../ErrorDialog';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <ErrorDialog />
  </div>
);

export default App;