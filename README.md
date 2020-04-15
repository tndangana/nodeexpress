# nodeexpress
# A crud application with JWT security implementation

This is a basic nodeJs crud server appplication which will be using mongoose as an ODM and swagger to test all available APIS.User created is responsible for patient data capturing.

Steps taken to run the server
cd into to project after cloning.
 # Create .env file //touch .env 
 # Add the following params.All field are mandatory 
 Use  // crypto.randomBytes(64).toString('hex'); to generate a TOKEN_SECRET
# PORT=
# DBNAME=
# DBHOST=localhost
# DBPORT=27017
# MONGO_LOCAL_CONN_URL=mongodb://localhost:27017/covid
# TOKEN_SECRET=  
# EMAIL=
# EMAILPASSWORD=


# (1) npm install (to install dependencies) // This project has been created using node version 10
# (2) npm run dev
# (3) click using chosen port to see the list of all available apis: http://localhost:{port}/api-docs.
# (4) Register and verify a user.
# (5) Have fun.
# (6) click https://myaccount.google.com/lesssecureapps to allow your email to be used to send out emails.
# NB* Make sure you turn of less secure apps after you are done

