import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// cleans house before running the next test
// no memory leaks
// rtl is just what we assigned the variable
afterEach(rtl.cleanup);

test('Render the heading', () => {
  const wrapper = rtl.render(<App />);
  // element is now our DOM element that we can test against
  const element = wrapper.getByText(/the dog website/i);
  expect(element).toBeVisible();
  // debug = will just run like console.logging it
  // wrapper.debug(wrapper.queryByPlaceholderText('Image Count'));
})

test('Render count input', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByPlaceholderText(/image count/i);
  expect(element).toHaveValue(1);
})