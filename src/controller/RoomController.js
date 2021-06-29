module.exports = {
    create(req, res){
        let roomId= 188888

        res.redirect(`/room/${roomId}`)
    }
}