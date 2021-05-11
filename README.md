# Getting Started with Create React App

![image](https://user-images.githubusercontent.com/5769233/117894090-768d8700-b270-11eb-8083-5aad4e0b9bf6.png)


Prerequisites

Node 16.1.0 https://nodejs.org/en/


Check that you have node and npm installed
To check if you have Node.js installed, run this command in your terminal:

node -v
To confirm that you have npm installed you can run this command in your terminal:

npm -v



# ShippingEcommerceUI
 Shipping Api Interview Question React UI 


# Commerce UI

## Prerequisites

* [Node 16.1.0](https://nodejs.org/en/)

## Getting Started

The following commands will generate a and run web application. Before this is done make sure that API is running and cofigured correctly. Api url is hardcoded in productSertcices  axios.defaults.baseURL = "http://localhost:3005/api" should be moved to env, this value should be updated based on api

yarn build 
yarn start 

![image](https://user-images.githubusercontent.com/5769233/117893180-ce2af300-b26e-11eb-8a6f-3fbc2509cf1a.png)

![image](https://user-images.githubusercontent.com/5769233/117893198-d97e1e80-b26e-11eb-9e49-b319e67e3464.png)


Or using npm 
npm i
npm start


Default url => http://localhost:3000/
 Api url is hardcoded in productSertcices  axios.defaults.baseURL = "http://localhost:3005/api" should be moved to env, this value should be updated based on api

## UI 
Order date defaults to todays date, and can be updated. 
We check for weekends if weekend flag is enabled and holidays. 
![image](https://user-images.githubusercontent.com/5769233/117893271-f6b2ed00-b26e-11eb-9956-11f1d6108df8.png)

