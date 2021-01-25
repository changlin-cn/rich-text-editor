import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { Editor } from '../src/index';

afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const { queryByLabelText, getByLabelText } = render(<Editor />);

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
