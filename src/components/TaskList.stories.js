import React from 'react';
import TaskList from './TaskList';
import { action } from '@storybook/addon-actions';
import { taskData, actionsData } from './Task.stories';

export default {
    component: TaskList,
    title: 'TaskList',
    /*
    Decorators are a way to provide arbitrary wrappers to stories. In this case we’re using a decorator `key` 
    on the default export to add some `padding` around the rendered component. They can also be used to wrap 
    stories in “providers” –i.e. library components that set React context.
    */
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

// Mock props
export const defaultTasksData = [
    // Spread taskData object (copy), then override id and title properties
    { ...taskData, id: '1', title: 'Task 1' },
    { ...taskData, id: '2', title: 'Task 2' },
    { ...taskData, id: '3', title: 'Task 3' },
    { ...taskData, id: '4', title: 'Task 4' },
    { ...taskData, id: '5', title: 'Task 5' },
    { ...taskData, id: '6', title: 'Task 6' },
];

// Make the last element 'pinned'
export const withPinnedTasksData = [
    ...defaultTasksData.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];


// Stories
export const Loading = () => <TaskList isLoading />;

export const Empty = () => <TaskList tasks={[]} {...actionsData} />;

export const Default = () => <TaskList tasks={defaultTasksData} {...actionsData} />

export const WithPinnedTasks = () => <TaskList tasks={withPinnedTasksData} {...actionsData} />;
