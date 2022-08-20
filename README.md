<p align="center">
  <img width="100" src="https://vitejs.dev/logo.svg" alt="Vite logo">
</p>
<p align="center">
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196" alt="Conventional Commits"></a>
  <a href="https://github.com/fwaxin/vite-starter/releases"><img src="https://img.shields.io/github/release/fwaxin/vite-starter.svg" alt="GitHub release"></a>
</p>

# Vite project starter

:wave:

This repo has been primarily created to find ways to efficiently and quickly start new internal frontend projects in the company I work ... and also to try some new things I am not aware of for now ! :smiley:

## Installation

If you want to use this starter project, you can just grab the code as it is right now and modify the `package.json` file to put your project name you want.

> :warning:
>
> If you want to use the semantic release alongside [conventionnal commit](https://www.conventionalcommits.org/en/v1.0.0/), you have some step to do in your repo **_(only in GitHub for now)_** :
>
> - Only allow _squash merging_ in your repo's general settings
> - Add a GitHub application to your repo to check for your Pull Request's title (which is used to determine the version bump to proceed). I personally use [**_Semantic PRs_**](https://github.com/marketplace/semantic-prs)
> - **Don't touch the _package.json_ `version` key !**
> - The project also has a GitHub action which proceeds to the actual version bump based on the merge commit (which is in our case, the Pull Request's title validated by the GitHub app)

## Dependencies

Obviously, there are some dependencies in this project. I try to use as few of them as possible. Juste the bare minimum for the purpose of this starter which are :

- [x] Authentication
- [x] Routing
- [x] Testing

Here are all the dependencies the project relies on :

- React 18
- React DOM
- React Router (v6)

## Dev Dependencies

- ESLint
- Prettier
- Typescript
- Vite 3
