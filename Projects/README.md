# RUN the backend
- Java 9 is required to start the backend
- install Java 9 and make sure, that the environment variables are set correctly
- go to the folder Projects and execute the following command:
	java -jar iCareServer-0.0.1-SNAPSHOT.jar
- or execute start-server.bat when you're on a Windows Environment
# RUN the frontend
There are two ways to do that:

### Method 1 ) Use the python SimpleWebServer ( Recommended)
#### For Python 2.7
- go to the folder iCareFrontend and execute the following command:
    python -m SimpleHTTPServer 5001
- navigate in the browser to http://localhost:5001/

#### For Python 3
- go to the folder iCareFrontend and execute the following command:
    python -m http.server
- navigate in the browser to http://localhost:8000/

### Method 2) Use the java SimpleWebServer ( had problems with finding css files)
- go to the folder iCareFrontend and execute the following command:
    java -jar SimpleWebServer.jar
- navigate in the browser to http://localhost:80/

