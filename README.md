# 👓 Reid It Web App
[Reid It Application hosted by Netlify](https://reidit.netlify.app/)


## ⚠️ Important Notes 

**API Limitations** I have used the .JSON call without OAuth

 - The API will only return **25** posts at one time
 - The API can only display a limited number of comments and replies
 - The API can only display a limited number of communities
 
## 🎯 Functionality 

This app allows you to:  

- View the top 25 "best of Reddit" post  
- Search "best of Reddit" posts by title
- Navigate to the top 25 communities and view the newest 25 posts 
- Click on an article to view more information and comments  
- Upvote and downvote posts and comments (this is restricted to visual only)

## 💻 Technology
- **React**
- **React-Router**
- **React-Redux**
- **HTML**
- **CSS**
- **JS**

## 🔍 React Features
- `article.jsx` renders the individual article when clicked
- `comments.jsx` renders the comments from the article fetch
- `communities.jsx` renders the communities and renders the communities sidebar
- `posts.jsx` renders the top 25 "best of Reddit" posts
- `search.jsx` reposible for rendering the search bar and filtering posts by search term


## 📂 Components
- `PostMedia.jsx` determines what time of media the post has and how to render it
- `Spinner.jsx` renders the spinner when fetching from the API
- `Vote.jsx` renders the upvote, downvote container with functionality logic



### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.