import { render, screen } from '@testing-library/react';
import LoginForm from '.';
import userEvent  from '@testing-library/user-event';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

it('matches Regex', () => {
  const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,}$/;
  const password = 'Will@s1990'; 
  expect (password).toMatch(regex);
});

// TODO: Add More Tests realted to UI testing. Ran into Jest Errors at the time