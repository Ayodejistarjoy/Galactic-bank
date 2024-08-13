const userModel = require("../Model/User.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET;
const nodemailer = require('nodemailer');
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

const welcomeEmailTemplete = (firstname) => {
            let template = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome Email</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
                <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    <div style="background-color: #4CAF50; color: #ffffff; text-align: center; padding: 10px 0; border-radius: 8px 8px 0 0;">
                        <h1 style="margin: 0; font-size: 24px;">Welcome to Our Service!</h1>
                    </div>
                    <div style="padding: 20px;">
                        <h2 style="color: #333333;">Hello ${firstname},</h2>
                        <p style="color: #666666; line-height: 1.6;">We're excited to have you on board. Thank you for signing up for our service. We're committed to providing you with the best experience possible.</p>
                        <p style="color: #666666; line-height: 1.6;">Feel free to explore and make the most out of our features. If you have any questions or need assistance, don't hesitate to reach out to our support team.</p>
                        <p style="color: #666666; line-height: 1.6;">To get started, click the button below:</p>
                        <a href="#" style="display: inline-block; padding: 10px 20px; margin: 20px 0; background-color: #4CAF50; color: #ffffff; text-decoration: none; border-radius: 4px;">Get Started</a>
                        <p style="color: #666666; line-height: 1.6;">Thank you,<br>The Galactic Bank Team</p>
                    </div>
                    <div style="text-align: center; padding: 10px 0; background-color: #f4f4f4; border-radius: 0 0 8px 8px; color: #999999; font-size: 12px;">
                        <p>&copy; 2024 Galactic. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>`

            return template
}

const Register = (req, res) => {
    const accountNo = Math.floor(1000000000 + Math.random() * 9000000000);

    const { firstname, lastname, email, password,phone  } = req.body;
    const saltRound = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRound);
    console.log(hashedPassword);
    const newUser = new userModel({ firstname,
         lastname, 
          emailInfo: {email},
          phone, 
          password: hashedPassword, 
          accountNo 
        });
    newUser.save()
        .then(() => {
            console.log("User registered successfully");
            console.log(req.body);
            sendEmail(email, "Welcome to our website", welcomeEmailTemplete(`${firstname} ${lastname}`) );
            res.status(201).json({ message: "User registered successfully" });

        })
        .catch((err) => {
            console.error("Error registering user:", err);
            res.status(500).json({ message: "Failed to register user" });
        });
};

const Signin = async (req, res) => {
    const { email , password } = req.body;
    try {
        let user = await userModel.findOne({ "emailInfo.email": email });
        if (!user) {
            return res.status(400).json({ Message: "User not found. Please sign up" });
        }
        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) {
            return res.status(400).json({ Message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "10h" });
        res.status(200).json({
            Message: "Login successful",
            token: token,
            user: user
        });
        console.log("Login successful");
    } catch (error) {
        console.error("Error occur when logging in:", error);
        res.status(500).json({ Message: "Internal server error" });
    }
};
  const GetUser = (req, res) => {
      const foundUser = user.find(user => user.accountNo === req.user.accountNo);
      if (!foundUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({
        name: foundUser.firstName + ' ' + foundUser.lastName,
        accountNo: foundUser.accountNo,email: foundUser.email, phone:foundUser.phone,
      });
    };
    const verifyEmail = async (theEmail) => {
        try {
            let User = await userModel.findOne({ "emailInfo.email": theEmail });
            let toEmail = User.emailInfo.email;
            if (User) {
                
            }
            else {
                res.status(404).json({
                    message: "User not found"
                });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Internal server error",
                data: error
            });
        }
    }

    const sendEmail = (email, subject, message) => {
        console.log(email, subject, message);
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            port: 25,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            html: message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        }
        );
    }

    const Dahboard = async (req, res) => {
        let token = req.headers.authorization.split(" ")[1]
        console.log(token);
        jwt.verify(token, secretKey, (err, result) => {
            if (err) {
                console.log(err);
                res.send({ status: false, message: "Token is not valid", result })
            }
            else {
                console.log(result);
                userModel.findById(result.id)
                .then(user => {
                    res.send({ status: true, message: "Welcome", user })
                })
            }
        }
        )

    }
    const UpLoad = async (req, res) => {
        let Thefile = req.body.file;
        let Email = req.body.email;

        console.log(Email);
        
        cloudinary.uploader.upload(Thefile, (error, result)=>{
            if(result){
                console.log(result);
                let user = userModel.findOne({ "emailInfo.email": Email })
                .then((user) => {
                    console.log("User   " + user);
                    user.profile_url = result.url;
                    user.save()
                    .then((data) => {
                        console.log(result);
                        res.status(200).json({ message: "Image uploaded successfully", result, data })
                    })
                })
            }
            else {
                console.log(error);
                res.status(400).json({message: "Image not uploaded", error })
            }
        })
    }

    const creditUser = async (userEmail, theAmount) => {
        let user = await userModel.findOne({ 'emailInfo.email': userEmail })
        return new Promise((resolve, reject) => {
            if (user) {
                const oldBalance = Number(user.accountBal)
                const toCredit = Number(theAmount)
                const newBalance = oldBalance + toCredit
                user.accountBal = newBalance
                user.save()
                    .then((saved) => {
                        resolve({ mgs: "Credited" })
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                reject({ mgs: "No user found" })
            }
        })
    }
    
    const debitUser = async (userEmail, theAmount) => {
        let user = await userModel.findOne({ 'emailInfo.email': userEmail })
        return new Promise((resolve, reject) => {
            if (user) {
                const oldBalance = Number(user.accountBal)
                const toDebit = Number(theAmount)
                const newBalance = oldBalance - toDebit
                user.accountBal = newBalance
                user.save()
                    .then((saved) => {
                        resolve({ mgs: "Debited" })
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                reject(new Error({ mgs: "No user found" }))
            }
        })
    }

    const intraTransfer = async (req, res) => {
        const { sender, receiver, amount } = req.body
        let user = await userModel.findOne({ 'emailInfo.email': sender })
        let transacFee = 10
        if (user) {
            let userBalance = Number(user.accountBal)
            let sendAmount = Number(amount)
            let amountToDebit = transacFee + sendAmount
    
            if (sender === receiver) {
                res.status(400).json({ mgs: "You can't send money to your own account." })
            } else if (amountToDebit > userBalance) {
                res.status(400).json({ mgs: "Insuficent fund", userBalance, transacFee })
            } else {
                debitUser(user.emailInfo.email, amountToDebit)
                    .then((response) => {
                        if (response) {
                            creditUser(receiver, amount)
                                .then((credit) => {
                                    res.status(200).json({ mgs: "Transaction Successful", response, credit })
                                })
                                .catch((error) => {
                                    res.status(400).json({ mgs: "Transaction unSuccessful", error })
                                })
                        }
                    })
                    .catch((err) => {
                        res.status(400).json({ mgs: "Transaction unSuccessful", err })
                    })
            }
    
        } else {
            res.status(500).json({ mgs: "No user found" })
        }
    }

    const transactionValidator = async (req, res) => {
        const { sender, amount } = req.body
        let user = await userModel.findOne({ 'emailInfo.email': sender })
        let transacFee = 10
        if (user) {
            let userBalance = Number(user.accountBal)
            let sendAmount = Number(amount)
            let amountToDebit =  Number(sendAmount) + Number(transacFee)
    
            if (amountToDebit > userBalance) {
                res.status(400).json({ mgs: "Insuficent fund" })
            } else {
                res.status(200).json({ mgs: "Valid Transaction", totalCharge: amountToDebit })
            }
        } else {
            res.status(500).json({ mgs: "No user found" })
        }
    }

    const receiverValidator = async (req, res) => {
        const { accountNo } = req.body
        let user = await userModel.findOne({ accountNo: accountNo })
        if (user) {
            res.status(200).json({ mgs: "User found", name: `${user.firstname} ${user.lastname}`, userEmail: user.emailInfo.email })
        } else {
            res.status(400).json({ mgs: "No user found!" })
        }
    }

    const test = (req, res) => {
        const { email, amount } = req.body
        creditUser(email, amount)
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }


module.exports = { Register, Signin,GetUser,verifyEmail, Dahboard, sendEmail,UpLoad, intraTransfer, transactionValidator, receiverValidator, test};
