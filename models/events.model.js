const getAll = () => {
    return db.query('SELECT e.*, u.name, u.city, u.nickname FROM eventos e, usuarios u where e.idUser = u.id; ')
}

const create = ({ title, description, iduser }) => {
    return db.query('INSERT into eventos (title, description,iduser) values(?,?,?);',
        [title, description, iduser]
    );
}


module.exports = {
    getAll,
    create,
}