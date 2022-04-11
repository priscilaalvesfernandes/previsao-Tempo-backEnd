const { response } = require('express')
const res = require('express/lib/response')
const pool = require('../db')
const queries = require('./queries')

const getTemperatura = (req, res) => {
    pool.query(queries.getTemperatura, (error, results) => {
        if (error) throw error //caso houver erro com o comando
        res.status(200).json(results.rows)
    })
}
const getTemperaturaCod = (req, res) => {
    const cod = parseInt(req.params.cod)
    pool.query(queries.getTemperaturaCod, [cod], (error, results) => {
        if (error) throw error //caso houver erro com o comando
        res.status(200).json(results.rows)
    })
}

const addTemperatura = (req, res) => {
    const { clima, temperatura, humidade } = req.body //contrutor do proprio js

    //checando dados existente
    pool.query(queries.checkClimaExists, [clima], (error, results) => {
        if (results.rows.length) {
            res.send("Dado existentes!!!")
        }
    })
}

const updtTemperatura = (req, resp) => {
    const cod = parseInt(req.params.cod)
    const { clima } = req.body

    pool.query(queries.getTemperaturaCod, [cod], (error, results) => {
        const noClima = !results.rows.length
        if (noClima) {
            res.send("Dado nao encontrado!!")
        }
        pool.query(queries.getTemperaturaCod, [clima, cod], (error, results) => {
            if (error) throw error
            results.status(200).send("Alterado com sucesso!!")
        })
    })
}

module.exports = {
    getTemperatura,
    getTemperaturaCod,
    addTemperatura,
    updtTemperatura,
}