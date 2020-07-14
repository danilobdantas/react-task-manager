import React from 'react';
import ReactDOM from 'react-dom';
import ListTasks from './list-tasks';

describe('teste listar tarefas', () => {
  it('renderizar sem erro', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListTasks />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
