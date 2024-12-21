# Next.js 15: Slow API Call and UX Improvement

This repository demonstrates a common issue in Next.js applications involving slow API calls and how to improve the user experience.

## Problem

A Next.js 15 app makes an API call on the About page that takes 3 seconds to complete.  During this time, the user only sees a static 'Data loading...' message, leading to a poor user experience.

## Solution

The solution improves the user experience by:

1. Implementing a loading indicator to provide visual feedback during the API call.
2. Displaying the retrieved data after the API call completes.
3. Handling potential errors during the API call.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## Additional Notes

This example uses a simple loading indicator and error handling. For more advanced scenarios, you might want to consider using a more sophisticated state management library like Redux or Zustand.