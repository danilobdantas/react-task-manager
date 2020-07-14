import React from 'react';
import ReactDOM from 'react-dom';
import NewTask from './new-task';

describe('teste nova tarfa', () => {

  it('renderizar sem erro',() => {
      const div = document.createElement('div');
      ReactDOM.render(<NewTask />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

});
