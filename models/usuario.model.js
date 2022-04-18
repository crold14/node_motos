const getAll = () => {
    return db.query('select * from usuarios')
}
const create = ({ name, nickname, city, password, description, email, age, img }) => {
    return db.query('INSERT into usuarios (name, nickname, city, password, description, email, age, img) values(?,?,?,?,?,?,?,?);',
        [name, nickname, city, password, description, email, age, img]
    );
}

const getByEmail = (pEmail) => {
    return db.query('select * from usuarios where email = ?', [pEmail])
}
const deleteById = (usuarioId) => {
    return db.query('DELETE FROM usuarios WHERE id = ?', [usuarioId])

}
const getById = (usuarioId) => {
    return db.query('select * from usuarios where id=?', [usuarioId])
}





module.exports = {
    getAll,
    create,
    getByEmail,
    deleteById,
    getById,
}