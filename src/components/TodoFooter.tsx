import React from 'react';
import { VIEW_FILTERS } from '../constants';

interface TodoFooterProps {
  activeFilter: number;
  changeViewFilter: (selectedFilter: any) => void;
  todosLeftCount: number;
}

function TodoFooter({activeFilter, changeViewFilter, todosLeftCount}:TodoFooterProps) {
  return (
    <div className="todo-footer">
      <div className="items-left">
        {todosLeftCount>1 ? `${todosLeftCount} items left` : ''}
        {todosLeftCount===1 ? `${todosLeftCount} item left` : ''}
      </div>
      <div className="pill-container">
        <div className={`pill ${(activeFilter===1)?'pill-active':''}`} onClick={() => changeViewFilter(VIEW_FILTERS.ALL)}>All</div>
        <div className={`pill ${(activeFilter===2)?'pill-active':''}`} onClick={() => changeViewFilter(VIEW_FILTERS.ACTIVE)}>Active</div>
        <div className={`pill ${(activeFilter===3)?'pill-active':''}`} onClick={() => changeViewFilter(VIEW_FILTERS.COMPLETED)}>Completed</div>
        <div className={`pill ${(activeFilter===4)?'pill-deleted':''}`} onClick={() => changeViewFilter(VIEW_FILTERS.DELETED)}>Deleted</div>
      </div>
    </div>
  )
}

export default React.memo(TodoFooter);
