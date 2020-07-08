import React from 'react';
import { render, screen, findByDisplayValue } from '@testing-library/react';
import TaskList from './TaskList';
import { WithPinnedTasks } from './TaskList.stories';

describe('TaskList component', () => {
    it('renders pinned tasks at the start of the list', async () => {
        render(<WithPinnedTasks />);
        // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
        const firstTask = screen.getByTestId('task-list').firstChild;
        const result = await findByDisplayValue(firstTask, 'Task 6 (pinned)');
        expect(result).not.toBeNull();
    });
})