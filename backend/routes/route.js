const express = require('express')
const router = express.Router();
const loginTemplate = require('../models/Login_model')
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client('337693724676-nh17c3ruc08dbqb646vs8hobl5oq2n1i.apps.googleusercontent.com')

router.post('/login', async (req,res) => {
    
    const token = req.body.tokenId;
    //console.log("token is " + token);
    client.verifyIdToken({idToken:token,audience:"337693724676-nh17c3ruc08dbqb646vs8hobl5oq2n1i.apps.googleusercontent.com"})
    .then((response) => {
        const {email_verified,name,email,picture} = response.payload
        //console.log("payload " + JSON.stringify(response.payload,null,2));
        if (email_verified) {
            loginTemplate.findOne({email})
            .exec((err,user) => {
                if (err) {
                    console.log("error in login " + err);
                    return res.status(404).json(err);
                }else{
                    if (user) {
                        console.log("login success");
                        return res.status(201).json(user);
                    }else{
                        const newUser = new loginTemplate({
                            
                            name : name,
                            picture : picture,
                            email : email
                        })
                        newUser.save()
                        .then(data => {
                            return res.status(200).json(data)
                        })
                        .catch(err => {
                            console.log("err in newUser.save " + err);
                            return res.status(404).json(err);
                        })
                    }
                }
            })
        }
        
    })
    
    
})

module.exports = router;