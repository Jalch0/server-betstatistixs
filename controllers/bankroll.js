import {db} from "../db.js"




export const getBankroll = (req,res) =>{
    const q = "SELECT  b.id, name, capital, odd, currency FROM bankrolls b INNER JOIN users u ON u.id = b.id_user WHERE u.id = ?"

    db.query(q,[req.params.id], (err,data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}



export const addBankroll = (req,res) =>{

        const q = "INSERT INTO bankrolls(`name`, `capital`, `odd`, `currency`, `id_user`) VALUES (?)"

        const values = [
            req.body.name,
            req.body.capital,
            req.body.odd,
            req.body.currency,
            req.body.id_user
        ]

        db.query(q,[values], (err,data) =>{
            if(err) return res.status(500).json(err);
            return res.json("Bankroll has been created!")
        })

}



export const deleteBankroll = (req,res) =>{

        const bankrollId = req.params.id;
        const q = "DELETE FROM bankrolls WHERE `id` = ?"

        db.query(q,[bankrollId], (err,data)=> {
            if(err) return res.status(403).json("an error occurred");

            return res.json("Bankroll has been deleted!");
        })

}



export const updateBankroll = (req,res) =>{

        const bankrollId = req.params.id

        const q = "UPDATE bankrolls SET `name`=?, `capital`=? WHERE `id` = ?"

        const values = [
            req.body.name,
            req.body.capital,
        ];

        db.query(q,[...values, bankrollId], (err,data) =>{
            if(err) return res.status(500).json(err);
            return res.json("Bankroll has been updated!")
        })

}