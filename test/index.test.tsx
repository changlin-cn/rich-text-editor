import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Editor } from '../src/index';
import { DEFAULT_PLACEHOLDER } from '../src/consts/placeholder';

afterEach(cleanup);

test('Editor default', () => {
  render(<Editor />);
  expect(screen.queryByText(DEFAULT_PLACEHOLDER)).toBeTruthy();
});
test('Editor with placeholder', () => {
  const p = 'ppp';
  render(<Editor placeholder={p} />);
  expect(screen.queryByText(p)).toBeTruthy();
});

// fireEvent 无selectionChange 事件类型 无法测试onChange
// test('Editor:onChange', () => {
//   const fn = jest.fn();
//   render(<Editor onChange={fn} />);
//   // console.log(screen.queryByRole('textbox'));
//   fireEvent.focus(screen.queryByRole('textbox') as HTMLElement);
//   expect(fn).toHaveBeenCalled();
// });
