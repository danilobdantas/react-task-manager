import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import TaskManager from './task-manager';

describe('testes atualiza', () => {

  it('renderizar de boa', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TaskManager />, div);
    ReactDOM.unmountComponentAtNode(div);

  });

});
