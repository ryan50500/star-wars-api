Project can be view at https://ryan50500.github.io/star-wars-api/

## SWAPI Data Fetching App
This is a simple React application build with Typescript that fetches data from the Star Wars API (SWAPI) and displays it based on user input. The app allows users to search for and retrieve information about films, starships, and vehicles from the Star Wars universe.


## My Thought Process
I deciced to use React Query which is ideal for caching. If this was a larger project, React Queries caching would allow users to revisit the results page and instantly access previously fetched API data without the need for a slower and redundant fetch operation. We also initially pre-fetch the data so the user should have access to the results quicker.

I put the data fetching logic into a custom hook of useDataFetching. This makes it easy to access the data in other parts of the app if we wanted to expand the project later.

I tried to utilize components as much as possible for reusuability throughout the task.

Having all the sorting logic in one Sorting component would allow a developer to add more sorting or filtering to the results in the future, without stuffing the Sorting logic in the ResultsPage component and bloating it.

I would have considered using Context API to share data between components instead of prop  drilling, but since this app is quite small i did not feel it necessary.

If this project was any larger I would have built it using Redux Toolkit. By centralizing application logic, it allows the code to be much more structured and organized by using 'slices' to managing specific parts of the application's state.

Pagination has also been added to fetch all the data for Starships and Vehicles.


## Features
Search: Users can enter search terms to find specific data, such as films, starships, or vehicles.
Sorting: The app provides sorting functionality to order the retrieved data.
Pagination: Users can select different pages to fetch data.


## Usage
Enter a search term (e.g., "starships," "films," "vehicles") in the search bar.
The app will dynamically fetch and display the relevant data based on your search term.
You can sort the data by clicking on the sorting buttons, and see all data available by clicking previous or next.


## Technology Stack
React
TypeScript 
React Query: A library for managing and caching API data in React applications.



## To run this application locally, follow these steps:

Clone this repository to your local machine:
https://github.com/your-username/swapi-data-fetching-app.git

Navigate to the project directory:
cd swapi-data-fetching-app

Install dependencies:
npm install

Start the development server:
npm start