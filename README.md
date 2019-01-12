
Steps to run the application.

1. Clone the application or download the application zip file and unzip to your system.

2. Go to the project folder.

3. Import the application to any IDE or you can also do it from the command prompt in the project folder.

4. Run "npm install" so that it will install all the depended packages to the application class path.

5. Now the application is ready and you can run and test the application.

6. So to test your application

    i. You can build the application for production "npm run-script buildprod"
        Which will create a "dist" folder and it will build the application for production.

    ii. You can build the application for production "npm run-script buildprod"
        Which will create a "dist" folder and it will build the application for production.

    iii. The "dist" is ready to deploy based on the build script, either in development/production.
        You can run the command to deploy and run the application.

        http://localhost:5000/api/v1/greetings
            Result : {"greet":"Hello ","message":"Node js with Webpack integration success."}
        http://localhost:5000/home
            Which will render the index.html page.
            Result : 
                Node JS Application with Webpack
                Node JS With Webpack plgin Integration
        