// import { render, fireEvent } from '@testing-library/react';
// import Search from './Search';

// describe('Search', () => {
//   test('submitHandler should be called when the form is submitted', () => {
//     const mockSubmitHandler = jest.fn();
//     const { getByPlaceholderText, getByText } = render(
//       <Search submitHandler={mockSubmitHandler} btnName="Search" />
//     );
//     const input = getByPlaceholderText('Enter a URL');
//     const submitButton = getByText('Search');

//     fireEvent.change(input, { target: { value: 'https://example.com' } });
//     fireEvent.click(submitButton);

//     expect(mockSubmitHandler).toHaveBeenCalled();
//   });

//   test('urlSetting should be called when input is changed', () => {
//     const mockUrlSetting = jest.fn();
//     const { getByPlaceholderText } = render(
//       <Search urlSetting={mockUrlSetting} btnName="Go" />
//     );
//     const input = getByPlaceholderText('Enter a URL');

//     fireEvent.change(input, { target: { value: 'https://example.com' } });

//     expect(mockUrlSetting).toHaveBeenCalledWith('https://example.com');
//   });
// });
