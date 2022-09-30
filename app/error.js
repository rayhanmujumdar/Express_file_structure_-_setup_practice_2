const notFoundHandler = (_req,_res,next) => {
    let error = new Error('ReSource Not found')
    error.status = 404
    next(error)
}

const errorHandler = (error,_req,res,_next) => {
    if(error.status){
       return res.status(error.status).json({
            message: error.message
        })
    }
    res.status(500).json({
        message: 'Something was wrong'
    })
}

module.exports = {
    notFoundHandler,
    errorHandler
}