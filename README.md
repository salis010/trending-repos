# Trending Repos

NEXT: in root-reducer, create a `case SET_STAR:` that toggles on/off the starred status of the repo bearing the provided id

- Filter by stars
- Filter by language
- Store starring in localStorage. Is the best place to execute this a useEffect inside Star? Would deep nesting be an issue?
- The starred repositories, should be visible either through a filter or in a different tab
- Some basic info of the repo should be displayed, such as: repo name, link to GitHub, description and number of stars
- mobile responsive
- Jest tests
- Cypress tests
- prop types

Focus on:
- concise and clean code
- use of semantic HTML
- CSS naming
- conventions
- unit tests

## Features

A rank number shows the actual ranking of the repo based on the numebr of stars received.

When pressing the star, the repo gets starred/destarred. The star count changes accordingly.

The arrow at the top-right of each repo toggles the display of futher information.

## Notes

Redux is overkill here, a simple `useState` hook would have been more efficient.

### Languages

github's api has a limit of 60 requests per hour. Fetching the languages per repo requires an additional api query per repo.

Thus to get the information for 30 repos requires 31 api calls. Therefore only one call per hour is possible.

As such the languages data was mocked.

### The 'getUpdatedRepos' Function

`src/utils/update-repos.js`

This function changes the 'starred' or 'expanded' status of the repo with the specified id.

Very importantly it does not change the original array, since this would be equivalent of changing the state directly, and infringing the immutability principle.

If the field being changed is the 'starred' flag, the number of stars are incremented/decremented accordingly.

## Conventions

Files are named in kebab-case and no default exports are used.

