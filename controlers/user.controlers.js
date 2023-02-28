const db = require("../bd");


class userControllers{
    async createUser( req, res ){
        const {name,surename} = req.body
        console.log(name,surename)
        await db.query(`INSERT INTO person (name, surename) values ($1, $2) RETURNING *`,[name, surename])

    }
    async getUsers(req,res){
        const users = await db.query(`SELECT * FROM person`)
        res.send(users.rows)

    }
    async getOneUser(req,res){
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person where id = $1`,[id])
        res.send(user.rows[0])
        
    }
    async updateUser(req,res){
        const {id,name,surename} = req.body
        const user = await db.query(`UPDATE person set name $1, surname = $2 where id = $3`,[name,surename,id])
        res.send(user.rows[0])
        
    }
    async deleteUser(req,res){
        const id = req.params.id
        const user = await db.query(`DELETE * FROM person where id = $1`,[id])
        res.send(user.rows[0])
    }

}

module.exports = new userControllers();