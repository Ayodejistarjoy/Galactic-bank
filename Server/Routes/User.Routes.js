const express = require('express');
const {Register, Signin, GetUser,verifyEmail, Dahboard, UpLoad, intraTransfer, transactionValidator, receiverValidator, test} = require("../Controller/User.Controler");
const router = express.Router();





router.post('/register', Register)
router.post('/signin', Signin)
router.get('/user',GetUser)
router.get('/page_auth',Dahboard)
router.get('/verify',verifyEmail)
router.post('/upload',UpLoad)
router.post('/intra-transfer', intraTransfer)
router.post('/intra-transfer/transac', transactionValidator)
router.post('/intra-transfer/receiver', receiverValidator)
router.post('/test',test)








module.exports = router; 