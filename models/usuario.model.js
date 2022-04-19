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


const update = (id, { name, nickname, city, password, description, email, age, img }) => {
    let sql = "UPDATE usuarios "
    let arr = []

    if (name) {
        sql += ' set name=?,'
        arr.push(name)
    }
    if (nickname) {
        sql += ' set nickname=?,'
        arr.push(nickname)
    }
    if (city) {
        sql += ' set city=?,'
        arr.push(city)
    }
    if (password) {
        sql += ' set password=?,'
        arr.push(password)
    }
    if (description) {
        sql += ' set description=?,'
        arr.push(description)
    }
    if (email) {
        sql += ' set email=?,'
        arr.push(email)
    }
    if (age) {
        sql += ' set age=?,'
        arr.push(age)
    }
    if (img) {
        sql += ' set img=?,'
        arr.push(img)
    }

    let sqlFin = sql.slice(0, -1)
    console.log(sqlFin);
    console.log(sql);
    sqlFin += ' WHERE id = ?'

    console.log(sqlFin);
    console.log(id);
    arr.push(id)

    return db.query(sqlFin, arr)
}




module.exports = {
    getAll,
    create,
    getByEmail,
    deleteById,
    getById,
    update
}