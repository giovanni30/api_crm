exports.crearUsuario = (req, res) => {

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        // console.log(req.body)
        conn.query('INSERT INTO clientes SET ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            // res.json(rows)
            res.send('Cliente registrado!')
        })
    })
}

exports.listarUsuario = (req, res) => {

    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM clientes', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
}
exports.listarunUsuario = (req, res) => {

    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM clientes ? WHERE id = ?', [req.body,req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
}
exports.actualizarUsuario = (req, res) => {

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        // console.log(req.body)
        conn.query('UPDATE clientes SET ? WHERE id = ?', [req.body,req.params.id], (err, rows) => {
            if (err) return res.send(err)
            // res.json(rows)
            res.send('Cliente actualizado!')
        })
    })
}
exports.eliminarUsuario = (req, res) => {

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        // console.log(req.body)
        conn.query('DELETE FROM clientes WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)
            // res.json(rows)
            res.send('Cliente eliminado!')
        })
    })
}