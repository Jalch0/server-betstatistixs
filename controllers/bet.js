import {db} from "../db.js"
import jwt from "jsonwebtoken"


export const getBets = (req,res) =>{

    const q = "SELECT b.* FROM bets b INNER JOIN bankrolls br ON b.id_bankroll = br.id INNER JOIN users u ON u.id = br.id_user WHERE u.id = ?"

    const userId = req.params.id;

    db.query(q,[userId], (err,data) => {
        if(err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
}



export const getBet = (req,res) =>{
    const q = "SELECT  b.id, type , b.name, amount, bookmarker, sport, b.odd, date, state FROM bets b INNER JOIN bankrolls bs ON bs.id = b.id_bankroll WHERE bs.id = ?"

    db.query(q,[req.params.id], (err,data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}



export const addBet = (req,res) =>{

        const q = "INSERT INTO bets(`id_bankroll`, `type`, `name`, `amount`, `bookmarker`, `sport`, `odd`, `date`, `state`) VALUES (?)"

        const values = [
            req.body.id_bankroll,
            req.body.type,
            req.body.name,
            req.body.amount,
            req.body.bookmarker,
            req.body.sport,
            req.body.odd,
            req.body.date,
            req.body.state
        ]

        db.query(q,[values], (err,data) =>{
            if(err) return res.status(500).json(err);
            return res.json("Bet has been created!")
        })

}



export const deleteBet = (req,res) =>{

        const betId = req.params.id;
        const q = "DELETE FROM bets WHERE `id` = ?"

        db.query(q,[betId], (err,data)=> {
            if(err) return res.status(403).json("You can delete only your post!");

            return res.json("Bet has been deleted!");
        })


}



export const updateBet = (req,res) =>{

        const betId = req.params.id

        const q = "UPDATE bets SET `name`=?, `amount`=?, `bookmarker`=?, `sport`=?, `odd`=?, `date`=?, `state`=? WHERE `id` = ?"

        const values = [
            req.body.name,
            req.body.amount,
            req.body.bookmarker,
            req.body.sport,
            req.body.odd,
            req.body.date,
            req.body.state
        ];

        db.query(q,[...values, betId], (err,data) =>{
            if(err) return res.status(500).json(err);
            return res.json("Bet has been updated!")
        })

}
