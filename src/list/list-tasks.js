import React from 'react';
import { A } from 'hookrouter';

function ListTasks() {
  return (
    <div>
    <a href="/new">teste fabrizio</a>
      <A href="/new"
        className="btn btn-success btn-sm">
        New Task</A>
    </div>
  );
}

export default ListTasks;
