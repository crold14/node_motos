const getAll = () => {
    return db.query('select * from usuarios')
}




module.exports = {
    getAll,
}