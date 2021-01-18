# Travel From Home (Travel Remotely)

Static web application that lets you travel by foot, car, or train in cities around the world while listening to local radio.

## Requirements

- Node / npm
- [Netlify CLI](https://cli.netlify.com/) (deployment only)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches a test suite. Notably, this also includes a suite of video stability checks, making sure that all videos in the catalogue exist and that each city has at least one video of each type needed to run the site. Use this after adding new cities to the catalogue to prevent issues on the site.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

When you're ready to deploy your local changes to netlify, follow these steps:

- `npm run build`
- `netlify deploy` (when prompted for the build folder, enter 'build')
- Check website draft URL to visually verify changes
- If everything looks good: `netlify deploy --prod`
- If something is wrong, fix the code and start this process over.
