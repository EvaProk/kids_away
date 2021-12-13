# KidsAway. 
KidsAway is a web app that helps parents to find a babysitter for a short period of time (a few hours). It is a flexible platform, where people with police check, first aid certificates can contribute their free time to help parents with their children and also make additional money. 

## Screenshots & Multimedia
KidsAway has 2 roles. A person can log in as a parent and as a babysitter. The main page:

!["main page"](https://github.com/PolinaSkrobot/kids_away/blob/main/public/images/main.jpeg)

We designed our app so that babysitters can form their own schedule depending on the availability during the week in the schedule tab. 
After filling in the form, the babysitter will appear in search results for parents who are looking for help during the time that fits both.

!["Schedule setting"](https://github.com/PolinaSkrobot/kids_away/blob/main/public/images/schedule.gif)

Here is how the search page looks . We believe additional info such as 'hours with kids', 'how many families came back' helps parents to find the perfect match. We count those numbers according to the info from the previous orders that is stored in our database.

!["Search"](https://github.com/PolinaSkrobot/kids_away/blob/main/public/images/search.jpeg)

To make the search even faster, we decided to implement a dynamic search component, which filters profiles as user types in the inputs. 

!["Search"](https://github.com/PolinaSkrobot/kids_away/blob/main/public/images/search.gif)

In the babysitter profile there is an average rating count based on the rating from previous orders. Also there is additional info about the prices and services this particular babysitter provides. On the bottom of the page there are reviews of parents, who have previously worked with this babysitter. After the parent decides to invite the babysitter and fills some of the additional information in the form, the babysitter will receive the SMS notification about the new order. To implement this we are using Twillio API.     

!["Profile"](https://github.com/PolinaSkrobot/kids_away/blob/main/public/images/Sitter-profile%20and%20invitation.gif)

After the babysitter logs in to the account, there is a '+1 new order' notification. As the babysitter reviews the order details he or she can either confirm or reject a new order. If the order is confirmed the parent will receive a SMS confirmation notification.

!["Sitter_confirmation"](https://github.com/PolinaSkrobot/kids_away/blob/main/public/images/Sitter_confirmation.gif)

After the order is completed, the parent can close the order and leave the review about the babysitter and rate the experience with this person:

!["Sitter_review"](https://github.com/PolinaSkrobot/kids_away/blob/main/public/images/Sitter_review.gif)

After the order is completed, the parent can close the order and leave the review about the babysitter and rate the experience with this person:

!["History"](https://github.com/PolinaSkrobot/kids_away/blob/main/public/images/Order%20history.gif)

### Tech Stack
-  JavaScript, React , React Router, Material-UI, Axios, SASS for the Front-End
-  Node.js, Express for the Beck-End
-  Twilio API for messaging

### Database
PostgreSQL
### Getting Sterted 

- Clone this and the backend repositories  
- Install dependencies in the server folder and in the Front-End folder:
### `npm i`
- Navigate to the express server directory and run a database reset.

- In the project directories run:
### `npm start`

## Dependencies
    "@emotion/react": "^11.5.0",
    "@emotion/styled": "^11.3.0",
    "@mui/icons-material": "^5.0.4",
    "@mui/lab": "^5.0.0-alpha.51",
    "@mui/material": "^5.0.4",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.24.0",
    "date-fns": "^2.25.0",
    "devextreme": "^21.1.6",
    "devextreme-react": "21.1.6",
    "node-sass": "^6.0.1",
    "react": "^17.0.2",
    "react-big-calendar": "^0.38.0",
    "react-cookie": "^4.1.1",
    "react-datepicker": "^4.3.0",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "react-scroll": "^1.8.4",
    "web-vitals": "^1.1.2"

## Credit
 Licensed illustrations purchased from Envato Elements.



