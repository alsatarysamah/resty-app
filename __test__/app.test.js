import '@testing-library/jest-dom';
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Search from "../src/components/Search";


describe('Search component', () => {
  it('renders search input and button', () => {
    render(<Search />);
    const input = screen.queryByPlaceholderText('Enter a URL');
    expect(input).toBeTruthy();

    const button = screen.getByText('GO');
    expect(button).toBeTruthy();
  });

 
//   it('calls the submitHandler function when the "GO" button is clicked', () => {
//     const handleSubmit = jest.fn();
//     const handleUrlChange = jest.fn();
//     render(<Search onSubmit={handleSubmit} onUrlChange={handleUrlChange} />);
    
//     const input = screen.getByPlaceholderText('Enter a URL');
//     const button = screen.getByText('GO');
    
//     fireEvent.change(input, { target: { value: 'https://example.com' } });
//     fireEvent.click(button);
    
//     expect(handleUrlChange).toHaveBeenCalledWith('https://example.com');
//     expect(handleSubmit).toHaveBeenCalledWith('https://example.com');
//   });
});
