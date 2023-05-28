import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Card, Container } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container className='my-5'>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header >
          What is an access token and refresh token? How do they work and where should we store them on the client-side?
        </Accordion.Header>
        
          <Accordion.Body>
            An access token is a string of characters that is used to authenticate and authorize a user to access certain resources or perform certain actions within an application. It is typically short-lived and can be refreshed periodically to maintain access.

            A refresh token is also a string of characters used for authentication but is used to obtain a new access token after the previous one has expired. Refresh tokens are typically long-lived and can be used multiple times.

            Access and refresh tokens are usually stored in a browser cookie or local storage on the client-side. However, it's important to keep in mind that storing sensitive information like access tokens in local storage can make your application vulnerable to cross-site scripting (XSS) attacks.
          </Accordion.Body>
        
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header  >
          Compare SQL and NoSQL databases?
        </Accordion.Header>
      
          <Accordion.Body>
            SQL databases use a structured schema to organize and store data in tables with predefined relationships between them. They are good for handling structured data and can provide powerful querying capabilities.

            NoSQL databases, on the other hand, use a non-relational approach to organizing data. They are more flexible and can handle unstructured or semi-structured data, making them a good choice for handling large amounts of data in real-time applications.

            The choice between SQL and NoSQL databases ultimately depends on the specific needs of the application and the type of data being stored.
          </Accordion.Body>
        
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header >
          What is express js? What is Nest JS?
        </Accordion.Header>
     
          <Accordion.Body>
            Express.js is a popular web framework for Node.js that simplifies the process of building server-side applications. It provides a number of features, including middleware support, routing, and error handling, to help developers build scalable and maintainable applications.

            NestJS is a newer web framework for Node.js that builds on top of the concepts and features of Express.js but adds a number of additional features, including dependency injection, modular architecture, and built-in support for TypeScript. This makes it an attractive option for building complex enterprise-level applications.
          </Accordion.Body>
        
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header >
          What is MongoDB aggregate and how does it work?
        </Accordion.Header>
          <Accordion.Body>
            MongoDB's aggregation framework is a powerful tool for performing complex queries and analysis on data stored in a MongoDB database. It allows you to perform a wide variety of operations, including filtering, sorting, grouping, and transforming data.

            Aggregation pipelines consist of stages, each of which performs a specific operation on the input data. Each stage can take one or more documents as input and produce one or more documents as output. The output of one stage becomes the input of the next stage, allowing you to build complex pipelines that can perform a wide variety of operations on your data.

            Overall, MongoDB's aggregation framework is a powerful tool for performing complex queries and analysis on data stored in a MongoDB database.
          </Accordion.Body>
        
      </Accordion.Item>
    </Accordion>
    </Container>
  );
};

export default Blog;
