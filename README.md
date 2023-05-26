# Paytring Node.js SDK Documentation
The Paytring Node.js SDK provides a convenient way to interact with the Paytring API using Node.js applications. This documentation guide will walk you through the usage and available methods of the SDK.

# Installation
To install the Paytring Node.js SDK, you can use npm (Node Package Manager) by running the following  command:

```bash
npm install paytring
```
## Getting Started
To get started with the Paytring SDK, you will need your API key and API secret. If you don't have these credentials, please sign up on the Paytring platform to obtain them.

## Importing the SDK
To use the Paytring SDK in your Node.js application, you need to import it. Here's an example:

```js
const Paytring = require('paytring');
```

## Initializing the SDK
To initialize the Paytring SDK, create an instance of the Paytring class by passing your API key and API secret as parameters. Here's an example:

```js
const paytring = new Paytring('YOUR_API_KEY', 'YOUR_API_SECRET');
```
## Available Functions
Once you have initialized the Paytring SDK, you can access the following public functions:
```js
order.create(orderData)
```
This function allows you to create an order. It takes an orderData object as a parameter, containing the necessary details for creating the order. Here's an example:

```js
const orderData = {
  // Provide the required order details
};

paytring.order.create(orderData)
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle the error
  });
order.fetch(orderId)
```

This function allows you to fetch the details of an order. It takes the orderId as a parameter, which is the unique identifier of the order. Here's an example:

```js
const orderId = 'YOUR_ORDER_ID';

paytring.order.fetch(orderId)
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle the error
  });
upi.vpa.validate(vpa)
```
This function allows you to validate a UPI Virtual Payment Address (VPA). It takes the vpa as a parameter, which is the UPI VPA you want to validate. Here's an example:

```js
const vpa = 'example@upi';

paytring.upi.vpa.validate(vpa)
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle the error
  });
hash.verify(hashData)
```

This function allows you to verify a hash. It takes the hashData object as a parameter, containing the necessary data for hash verification. Here's an example:

```js
const hashData = {
  // Provide the required hash verification data
};

paytring.hash.verify(hashData)
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle the error
  });
  ```
## Conclusion
Congratulations! You have successfully installed and learned how to use the Paytring Node.js SDK. You can now integrate Paytring's features and functionalities into your Node.js applications with ease.

For more detailed information about the available functions and their parameters, please refer to the SDK's source code or the official Paytring API documentation.

If you encounter any issues or need further assistance, please don't hesitate to reach out to the Paytring support team.