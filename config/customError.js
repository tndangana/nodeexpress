

const handleError = (err, res) => {
    const { statusCode , message } = err;
    console.log(`iioioioioioioioioioi--->`,statusCode)
    res.status(statusCode||500).json({
      status: "error",
      statusCode,
      message
    });
  };

module.exports={handleError:handleError}