const getAll = () => {
    return db.query('SELECT e.*, u.name, u.city, u.nickname FROM eventos e, usuarios u where e.idUser = u.id; ')
}


const create = ({ title, description, iduser }) => {
    return db.query('INSERT into eventos (title, description,iduser) values(?,?,?);',
        [title, description, iduser]
    );
}
const inscribe = ({ idUser, idEvent, }) => {
    return db.query('INSERT into evento_usuario (idUser,idEvent) values(?,?);',
        [idUser, idEvent]
    );
}

const asistencia = (idEvent) => {
    return db.query('SELECT eu.idEvent, u.name FROM evento_usuario eu, usuarios u where eu.idEvent = ? and eu.idUser = u.id; ', [idEvent])
}

const getById = (id) => {
    return db.query('select * from eventos where id=?', [id])
}

module.exports = {
    getAll,
    create,
    inscribe,
    asistencia,
    getById
}