const getAll = () => {
    return db.query('select * from mapas')
}




module.exports = {
    getAll,
}