# IMAGEIQ
<img width="1313" alt="ImageIQ" src="https://github.com/Vbeni/imageIQ_frontend/assets/123101303/605d0eb3-9ddd-4d8e-8354-21bef24e853e">

https://trello.com/b/U2NN9TsL/imageiq

## Technologies Used: 
* React
* HTML/CSS
* JSX
* Netlify
* JSON Web Tokens

## User Story 
As a user, I want a clean and responsive UI. Initially a clear home page that prompts account creation. Once an account is created there will be an option to drag and drop an image onto the screen. API will return information on what is in the image. The User will have the option to upload another image and begin a new search or access their user upload history

## Wireframe 

https://www.figma.com/file/FshAl0InJYldVWJjpVFqat/IMAGEIQ?type=design&node-id=705971%3A520&t=iSQjAqOgR77Ncpgp-1

- frontend
    - public
        - index.html
    - src
        - assets
            - images
            - styles
        - components
            - Auth
                - Login.js
                - Signup.js
            - UserProfile
                - Profile.js
                - UploadImage.js
                - ImageHistory.js
        - services
            - api.js
            - auth.js
        - App.js
        - index.js
    - package.json
