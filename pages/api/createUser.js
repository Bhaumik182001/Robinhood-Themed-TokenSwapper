

import  { client } from "../../lib/sanityClient";

const createUser = async (req, res)=>{
       
    try{
        console.log("Creating User")
        console.log("->"+req.body.walletAddress)
        const userDoc = {
            _type: 'users',
            _id: req.body.walletAddress,
            userName: 'Unnamed3',
            address: req.body.walletAddress,
        }
        
        await client.createIfNotExists(userDoc)
        res.status(201).send({message: "sucess"})
    }catch(error){
        console.log('Something went Wrong')
        res.status(500).send({ message: 'error', data: error.message})
    }
}

export default createUser