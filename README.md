# Lab 28:

## Result:
![Alt text](image.png)

## Documentation:
### whats the difference if i use (use effect) or not in the code ?

The useEffect hook in React is used to perform side effects in your components. Side effects can include data fetching, subscribing to data sources, manually changing the DOM, and more. Its primary purpose is to help manage the lifecycle of a component and ensure that certain actions are taken at the right times.

In your specific code, the useEffect hook is crucial for sending API requests and updating the response based on user input. Let's examine the difference between using useEffect and not using it:

In this scenario(without useEffect), you would be sending the API request directly inside the handleFormSubmit function. This approach couples the API request with the form submission logic, and the request would be sent every time the form is submitted. This might not be ideal if you only want to send requests in certain conditions or want to manage the lifecycle of the request more precisely.


In this versio(with useEffect), the useEffect hook listens to changes in the request state. Whenever the request changes (typically when the form is submitted), the effect is triggered, and it sends the API request and updates the response. This decouples the form submission logic from the API request logic and provides better control over when requests are sent.

So, the key difference is that using useEffect allows you to manage the timing and conditions for sending API requests more effectively, while without it, the API requests would be sent directly inside the form submission logic.

### testing:
I write a test file for each unit ,but i faced these errors :

- SyntaxError: JSX not enabled: This error occurs because JSX (JavaScript XML) syntax is not enabled in your Jest test file. JSX is a syntax extension for writing HTML-like code within JavaScript. To fix this, you need to ensure that your test file supports JSX. In your package.json file, make sure you have configured Jest's transform option to transform files with .jsx extension using babel-jest.

- ReferenceError: document is not defined: This error happens when you try to use the render function from the @testing-library/react library, which relies on the document object. However, the document object is not available in the Node.js environment where your tests are running. To solve this, you need to configure Jest to use a browser-like environment (jsdom) where the document object is available. In your package.json file, add "testEnvironment": "jsdom" to your Jest configuration.

i searched on (chatgpt/stck over flow/geeks for qeeks) to slove the errors,but all solutions didnt solve the problem.





