const knex = require('../database');

module.exports = {
    async create(req, res, next) {
        try {
            const { idade, nome, cargo } = req.body;
            await knex('funcionario').insert({ idade, nome, cargo });
            return res.json('Funcionario Cadastrado');
        } catch (err) {
            next(err)
        }
    },

    async index(req, res) {
        const Funcionarios = await knex('funcionario');
        return res.json(Funcionarios);
    },

    async show(req, res) {
        const { id } = req.params;
        const Funcionario = await knex('funcionario').where('id', id);
        return res.json({ Funcionario });
    },

    async update(req, res, next) {
        try {
            const { idade, nome, cargo } = req.body;
            const { id } = req.params;
            await knex('funcionario')
                .update({ idade, nome, cargo })
                .where({ id })
            return res.json('Funcionario Atualizado!')
        } catch (err) {
            next(err)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            await knex('funcionario')
                .where({ id })
                .del()
            return res.json('Funcionario Deletado do Banco de Dados.')
        } catch (err) {
            next(err)
        }
    }
}