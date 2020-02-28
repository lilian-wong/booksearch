import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div)
  ReactDOM.unmountComponentAtNode(div);
});
