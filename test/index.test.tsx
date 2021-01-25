import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Editor } from '../src/index';
import { DEFAULT_PLACEHOLDER } from '../src/consts/placeholder';

afterEach(cleanup);

test('Editor default', () => {
  render(<Editor />);
  expect(screen.queryByText(DEFAULT_PLACEHOLDER)).toBeTruthy();
});
