import React from 'react';
import './task-manager.css';
import { useRoutes } from 'hookrouter';
import ListTasks from './list/list-tasks';
import NewTask from './new/new-task';
import UpdateTask from './update/update-task';

const routes = {
  '/': () => <ListTasks />,
  '/new': () => <NewTask />//,
  //'/update/:id': ({id}) => <UpdateTask id={id} />
};

function TaskManager() {
  return useRoutes(routes);
}

export default TaskManager;
