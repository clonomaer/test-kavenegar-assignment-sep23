# Ticketing System Challenge

This repository contains my solution for the Ticketing System Challenge, a task presented by Kavenegar HR Team to assess my React application development skills and overall programming proficiency.

## Introduction

The goal of this assignment is to evaluate my ability to develop a React application and structure it effectively. The focus is on understanding and implementing functional requirements while demonstrating clean code practices. While the UI aesthetics are not a priority, the code should reflect a production-ready front-end.

## Time Consideration

To respect your time constraints, I have aimed to complete the task within the suggested timeframe of 7 hours. I've prioritized functionality over appearance, and any comments in the code indicate areas for improvement or suggestions that could not be implemented within the given timeframe.  
detailed info made possible by WakaTime on [this repository's dashboard](https://wakatime.com/@clonomaer/projects/zpgtcjvrqx?start=2023-09-24&end=2023-09-30).
[![wakatime](https://wakatime.com/badge/user/5e4f5ed0-dd2e-4204-b88b-ee84d3aad996/project/63def576-bc76-4d7d-873f-a08b7e3a0e56.svg)](https://wakatime.com/badge/user/5e4f5ed0-dd2e-4204-b88b-ee84d3aad996/project/63def576-bc76-4d7d-873f-a08b7e3a0e56)

## Delivery

The project is fully version-controlled using GitHub.  
You can access the repository through the following link: [test-kavenegar-assignment-sep23.git](https://github.com/clonomaer/test-kavenegar-assignment-sep23.git)  
You can also access the latest deployment made possible by Vercel through [this link](https://test-kavenegar-assignment-sep23.vercel.app/)

## Functional Requirements

### 1. Create a Ticket

- Implemented a ticket creation form allowing users to input a title and message.
- Added validation to ensure users cannot create an empty ticket.
- Save button triggers the creation of a ticket.

### 2. List of Tickets

- All tickets are listed and sorted on the page from new to old.
- Each ticket has a link to view its details.

### 3. Details of a Ticket

- Clicking on a ticket navigates to the ticket details page.
- Details page includes a list of answers and a form to respond to the ticket.
- Added a button to close the ticket.

### Ticket Structure

```json
{
  "id": 7,
  "received": "2021-08-31 18:09:35",
  "title": "some title",
  "message": "some message",
  "status": "pending" // "pending", "answered", or "closed"
}
```

### Response Structure

```json
{
  "id": 7,
  "message": "some message"
}
```

## Technical Requirements

- Over-engineered aspects to showcase experience in building large-scale SPAs.
- Used TypeScript for static typing.
- Implemented forms using React Hook Form.
- Utilized React Query for efficient data fetching.
- For API mocking, [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter) was employed.

Feel free to explore the codebase and provide feedback. I appreciate the opportunity to demonstrate my skills, and I look forward to any further discussions.

Best regards,

Leila Ilkhani
