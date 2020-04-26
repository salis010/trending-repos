# Trending Repos

![](src/images/screenshot.png)

## Intro

An app which shows the most popular repos from github, ranked in descending order according to the number of awarded stars.

## Run

- Clone https://github.com/salis010/trending-repos
- Install packages `npm i`
- Run server: npm run start
- In the browser go to http://localhost:3000/

## Tech

- React
- Redux
- Styled Components
- Jest

## How it Works

In `./srccomponents/app/index.js`, a React hook:
- fetches data from GitHub's api
- unnecessary data is trimmed
- properties such as 'starred' are added
- `localStorage` is checked to see if any stored items with respect to starring is present, in which case the data is updated accordingly
- the data is save to a Redux Store 

## Features

### Starring

When pressing a repo's star, the repo gets starred/de-starred. The star count increments/decrements accordingly.

This app does not post the 'star' vote to github.

Instead it records all the 'starred' repos in `localStorage`

It has to be ascertained that `localStorage` is updated only after the starring is successful, i.e., it has reached the store.

To achieve this, a `useEffect` monitors a property stored in state which changes when a repo is starred / de-starred:

```
useEffect(() => {
	...
			
    localStorage.setItem('starred', starred)
    }				
}, [starringChanged])
```

When the app loads or the browser is refreshed, 'localStorage' is checked for any stored starred repos, the respective repos data gets updated with a 'starred' flag, and the number of stars get incremented.

Starred repos can be filtered by pressing the star at the top-right.

### Repo Languages

Repos can be filtered by programming language.

However, the languages had to be mocked, since github limits api queries for unauthenticated users to 60 per hour, and fetching the languages per repo, 30 in all, requires a seperate query each.

Thus to get the languages for 30 repos requires 31 api calls. Therefore, using github's api, obtaining the languages per repo can only be run once per hour.

Therefore languages are mocked by assigning three random languages to each repo.
