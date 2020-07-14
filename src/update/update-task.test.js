import React from 'react';
import ReactDOM from 'react-dom';
import UpdateTask from './update-task';

describe('testes atualiza', () => {

  it('renderizar de boa', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UpdateTask id={1} />, div);
    ReactDOM.unmountComponentAtNode(div);

  });

});
