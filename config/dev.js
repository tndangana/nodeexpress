let config = {

 
     
    port: process.env.PORT || 3000,
    mongo: {
        url: process.env.MONGO_LOCAL_CONN_URL

    
    }
}

module.exports = config;