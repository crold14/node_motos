const getAll = () => {
    return db.query('select * from reseñas')
}
const create = ({ title, coment, iduser, val, }) => {
    return db.query('INSERT into reseñas (title, coment, iduser, val) values(?,?,?,?);',
        [title, coment, iduser, val]
    );
}
const getById = (reviewsId) => {
    return db.query('select * from reseñas where id=?', [reviewsId])
}
module.exports = {
    getAll,
    create,
    getById,
}