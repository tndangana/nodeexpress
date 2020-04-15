exports.register = (app) => {


    app.use('/api/patient', require('./api/patient'))
    app.use('/api/user', require('./api/user'));
    app.use('/api/token', require('./api/token'))
    app.use('/api/symptom', require('./api/symptoms'));
    app.use('/api/covidtest', require('./api/covidtest'));
    app.use('/api/contact', require('./api/contacts'));
    app.use('/api/country', require('./api/country'));
    

}

