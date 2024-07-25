# Personal Website (Windows 98 Styled React App)

This project is a React.js application styled to emulate the look and feel of Windows 98. The application includes features such as a Windows 98-style startup sound (removed as of 7/24/24), a desktop with taskbar, modals for applications like Notepad and Paint, and responsive design for mobile devices. The web app is hosted on [jaisara](https://www.jaisara.org/) and deployed using Github Pages and a CI/CD pipeline. 

## Getting Started

To get started with this project, you need to have Node.js and npm installed on your computer. Follow the steps below to set up and run the application locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.x recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/windows-98-react-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd windows-98-react-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Building for Production

To create a production build of the application, use the following command:
```bash
npm run build
```
This will create an optimized production build in the `build` folder. The build is minified, and the filenames include the hashes. Your app is ready to be deployed.

### Testing

To launch the test runner in interactive watch mode, use the following command:
```bash
npm test
```
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Ejecting

**Note:** This is a one-way operation. Once you `eject`, you can't go back. If you are not satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

To eject, run:
```bash
npm run eject
```
This will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project, giving you full control over them. All the commands except `eject` will still work, but they will point to the copied scripts, so you can tweak them. At this point, you're on your own.

### Deployment

This project includes a CI/CD pipeline for deployment using GitHub Actions. The configuration is in the `.github/workflows` directory.

#### GitHub Actions CI/CD Pipeline

The pipeline is defined in a YAML file as follows:

```yaml
name: CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
      - name: Install Node 20
        uses: actions/setup-node@v4
        with:
          node-version: 20.x
      - name: Install NPM Dependencies
        run: npm i
      - name: Build Project
        run: npm run build
      - name: Upload Artifact
        uses: actions/upload-artifact@v4
        with:
          name: production-files
          path: ./build

  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Download Artifact
        uses: actions/download-artifact@v4
        with:
          name: production-files
          path: ./build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GH_ACCESS_TOKEN }}
          publish_dir: ./build
```

## Resources

### Icons and Fonts

- Icons: [Old Windows Icons](https://oldwindowsicons.tumblr.com/tagged/windows%2098)
- Screenshots: [Guidebook Gallery](https://guidebookgallery.org/screenshots/win98)
- Fonts: [MS Sans Serif](https://fontstruct.com/fontstructions/show/2096359/ms-sans-serif-1-1)

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Troubleshooting

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Feel free to reach out if you have any questions or need further assistance!