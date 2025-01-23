# Unhandled Promise Rejection in Node.js Express Server

This repository demonstrates a common, yet subtle, bug in Node.js Express servers: unhandled promise rejections causing apparent hangs.  The server starts, but requests may time out client-side due to long asynchronous operations without proper error handling.

## Bug
The `bug.js` file contains an Express server with a 5-second delay in the response.  If an error occurs during that delay (which isn't handled), the promise rejection won't be caught, potentially causing the server to appear unresponsive.

## Solution
The `bugSolution.js` file shows the corrected code. It uses a `try...catch` block to handle potential errors within the asynchronous operation and includes a `.catch()` method to handle promise rejections for more robust error handling.  This prevents the server from hanging and provides better logging for debugging.