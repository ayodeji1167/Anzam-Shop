const errorandler = (err,req,res,next)=>{
    const statusCode  = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode).send(err.message ?? 'Internal server error')
}

module.exports = errorandler;