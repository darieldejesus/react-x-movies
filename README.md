# React X-Movies

React X - Movies is a simple web app where you can see the details of your favorite movies.

 ### Getting started
 These are the instructions to install and run a copy locally for development and testing purposes.

 #### Pre-Requisites
 - Docker - https://www.docker.com/community-edition

 #### Install

After installing Docker on your local machine, you need to follow the next steps to clone the repository and run the project.

- Let's clone this repository to a local folder:
```sh
$ git clone git@github.com:darieldejesus/react-x-movies.git
$ cd react-x-movies/
```
- Then, let's run the **docker-compose** command:
```sh
$ docker-compose -d
```
This comment will download the images for NodeJS v8 and will automatically install the project dependencies specified in the *package.json* file.
Finally, you can access to the React app through http://localhost:3000/

#### Running the test
In order to run the tests, go to the root of the project and run the following command:
```sh
$ docker-compose exec web yarn test
```

 ### Specifications

 - ECMAScript http://es6-features.org/
 - ReactJS https://reactjs.org/
 - Styled-Components https://www.styled-components.com/
 - Redux https://redux.js.org/
 - The Movie Database API https://www.themoviedb.org/

### Roadmap
- Homepage
-- Most popular movies.
-- Top 6 rated movies.
- Most Popular
-- Infinite scroll with the most popular movies ordered descendant.
- Movie page.
-- Extra details about the movie like the creators and recommendations.

### Todos
This is a React app which is in progress and here the todo list of what I want to implement.
 - [ ] Verify responses on the **fetch** functions.
 - [ ] Track the requests on the infinity scroll to prevent unexpected behavior when reaching the limit of entries.
 - [ ] Complete the **tests** for all the components.
 - [ ] Fetch next bulk of movies before reach the bottom on the popular movies page.
 - [ ] Complete de article page.
 - [ ] Add the movie reviews page.
 - [ ] Improve **Redux** architecture (Actions & Reducers).
 - [ ] Add the functionality to search movies by name.

### Authors
**Dariel de Jesús**
