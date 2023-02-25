# RESTy

A browser based API testing tool


# Demo

<video width="320" height="240" controls>
  <source src="./www_screencapture_com_2023-2-20_21_24.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

## Business Requirements

Our application will be an API testing tool that can be run in any browser, allowing a user to easily interact with APIs in a familiar interface.



The core requirements and functionality are as follows:

- Simple, intuitive user interface
  - A form where a user:
    - Enters a REST API Endpoint (URI)
    - Selects the REST Method to use (`get`, `post`, `put`, `delete`)
    - For `put` and `post`, allow the user to enter JSON to be used as the body for the request
    - A button to initiate the request
    - Basic Auth (to send `username` and `password`) with the request header
    - Bearer to send `token` with the request.
  - An output section which:
    - Displays a spinner to indicate a request is in process
    - Once a request is complete:
      - Hide the spinner
      - Display a well formatted view of the API response .
  - A history screen which:
    - Shows a list of all unique, successful requests
    - Allows a user to douole click to select one to re-populate the form so they can show the result in that time
  - An all user screen to show all users of the App for admin only .

## Technical Requirements

The application will be created with the following overall architecture and methodologies

1. React
1. ES6 Classes
1. Shared Component State
1. session Storage for storing request history
1. Axios for performing API Requests
1. Bootstrap for styling
   - Global Theme
   - Component specific CSS where possible

