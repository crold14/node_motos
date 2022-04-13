const getAll = () => {
    return db.query('select * from mapas')
}

const getById = (rutaId) => {
    return db.query('select * from mapas where id=?', [rutaId])
}



module.exports = {
    getAll,
    getById,
}