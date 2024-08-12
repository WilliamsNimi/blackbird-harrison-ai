import { render, screen } from '@testing-library/react';
import LoginForm from '.';
import { validation } from './validation';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

test('Correct Combination', () => {
  expect(validation('williamson.nimi@gmail.com', 'Will@s1990')).toBe(true);
  expect(validation('williamson.nimi@gmail.com', '12345')).toBe(false);
  expect(validation('williamson.nimi@gmail.com', 'Willas1990')).toBe(false);
  expect(validation('williamson.nimi@gmail.com', 'Will@s')).toBe(false);
  expect(validation('williamson.nimi@', 'Will@s1990')).toBe(false);
});

// TODO: Add More Tests realted to UI testing. Ran into Jest Errors at the time