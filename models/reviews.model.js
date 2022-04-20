// const getAll = () => {
//     return db.query('select * from reseñas')
// }
const create = ({ title, coment, iduser, val, idRoute }) => {
    return db.query('INSERT into reseñas (title, coment, iduser, val, idRoute) values(?,?,?,?,?);',
        [title, coment, iduser, val, idRoute]
    );
}
const getById = (idRoute) => {
    return db.query('select * from reseñas where idRoute=?', [idRoute])
}
module.exports = {
    create,
    getById,
}