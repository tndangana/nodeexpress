
const patientService = require('../services/patient.service');
const userService = require('../user/user.service');



exports.Ussd = (req, res) => {
    console.log(`qqqqqqqqqqqqqqqqq${JSON.stringify(req.body)}`)
    let message = "";
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    const length = text.split('*').length;
    const txt = text.split('*');
    console.log(txt)

    if (text === '') {
        message = 'CON Welcome to abn  \n';
        message += '1: register patient \n';
        message += '2: create account\n';
        message += '3: enter your symptoms\n';
    }
    //register patient
    else if (text === '1') {
        message = 'CON Enter first Name';
    }
    else if (length === 2 && txt[0] === '1') {
        message = 'CON Enter last name';
    }
    else if (length === 3 && txt[0] === '1') {
        message = 'CON Enter gender \n';
        message += 'eg. Male or Female';
    }
    else if (length === 4 && txt[0] === '1') {
        message = 'CON Enter date of birth \n';
        message += 'eg. 2020-07-29';
    }
    
    else if (length === 5 && txt[0] === '1') {
        // commit to db
        message = 'END Patient registered';
        var options = text.split('*');
    
        let patient = {
            firstName: options[1],
            lastName: options[2],
            gender: options[3],
            dateOfBirth:options[4]
        }
        patientService.create(patient)

    }

    // enter user
    else if (text === '2') {
        // check is user is agent
        message = 'CON  enter first name\n';  //1
    }
    else if (length === 2 && txt[0] === '2') {//2
        message = 'CON Enter last name\n';
    }
    else if (length === 3 && txt[0] === '2') {//3
        message = 'CON Enter email\n';
    }

    else if (length === 4 && txt[0] === '2') {//4
        message = 'CON Enter pin\n';
    }

    else if (length === 5 && txt[0] === '2') {//5
        message = 'CON Re Enter pin \n';
    }
    else if (length === 6 && txt[0] === '2') {//7
        var options = text.split('*');

        let user = {
            firstName: options[1],
            lastName: options[2],
            email: options[3],
            password: options[4]
        }

        if (options[4] === options[5]) {
            user.password = options[4];
            user.mobileNumber = req.body.phoneNumber;
            userService.create(user)
            message = 'END User registered';
        }
        else {

            message = 'END Pin not the same';
        }

    }
  // Print the response onto the page so that our SDK can read it
  res.set("Content-Type: text/plain");
  res.send(message);

}

exports.registerUser = () => {

}