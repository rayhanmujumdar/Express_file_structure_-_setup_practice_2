const nameMatch = (req,res,next) => {
    const name = req.query.name
    if(name === 'rayhan'){
        next()
    }else{
        res.json({
            message: 'name not match'
        })
    }
}

module.exports = {
    nameMatch
}