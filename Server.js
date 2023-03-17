require('dotenv').config();
//require
const express = require('express')
const mongoose = require('mongoose')
const jsonwebtoken = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const cookieParser = require('cookie-parser')
const fs = require('fs')
const https = require('https')
const path = require('path')
mongoose.connect(process.env.MONGO_URL);
//app
let app = express();
 
//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"./client/build")));
//Schema

let user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true,
    },
    bio: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        // required: true
    },
    skillsBio: {
        type: String,
        // required: true
    },
    ProjectsBio: {
        type: Number,
        // required: true
    },
    ProjectsDesc: {
        type: String,
        // required: true
    },
    expereinceBio: {
        type: Number,
        // required: true
    },
    expereinceDesc: {
        type: String,
        // required: true
    },
},
    { timestamps: true }
)

user.methods.generateAuthToken = async function () {
    // console.log('token');
    let token = await jsonwebtoken.sign({ _id: this._id, isAdmin: this.isAdmin }, 'afuqhfqowfjqidokdpqockv ,avma,mfalfmwofqpofmqfm');
    this.token = token;
    // console.log('token', token);
    // this.save();
    return token;
}
let contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
},
    { timestamps: true }
)
let projectsSchema2 = new mongoose.Schema({
    pname: {
        type: String,
        // unique: true

    },
    img1: {
        type: String,
    },
    plink: {
        type: String,
    },
    ptag: {
        type: String,
    },
},
    { timestamps: true }
)
let servicesSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    img2: {
        type: String,
    },
    price: {
        type: String,
    },
    details: {
        type: String,
    },
},
    { timestamps: true }
)
let educationSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    date: {
        type: String,
    },
    platform: {
        type: String,
    },
},
    { timestamps: true }
)
let experienceSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    date: {
        type: String,
    },
    platform: {
        type: String,
    },
},
    { timestamps: true }
)
//models
let contactUsModel = new mongoose.model('contact', contactUsSchema);
let projectsModel = new mongoose.model('proj', projectsSchema2);
let servicesModel = new mongoose.model('services', servicesSchema);
let educationModel = new mongoose.model('education', educationSchema);
let experienceModel = new mongoose.model('experience', experienceSchema);
let userModel = new mongoose.model('user', user);
// let path=require("path")


//Authentication
let Auth = async (req, res, Next) => {
    try {
        // res.c
        console.log('req.,Auth');
        let headerToken;
        console.log('req.,Auth');
        if (req.headers.token) {
            headerToken = req.headers.token;
            console.log('req.heades.User', req.headers.token);
        }
        else if (req.cookies.User) {
            headerToken = req.cookies.User;
            console.log('req.cookies.User', req.cookies.User);
        }
        // console.log(req.coo)
        console.log('req.cookies.User', req.cookies.User);
        // else if (req.cookies.User) { 
        console.log('headerToken', headerToken);
        await jsonwebtoken.verify(headerToken, process.env.key, (err, user) => {
            if (err) {
                return res.status(403).send('Not authenticated');
            }
            req.user = user;
            console.log('req.user', req.user);
            Next();
        }
        )
    } catch (error) {
        res.status(404).send('error');
    }
}


//user
// (post)
app.post('/register', async (req, res) => {
    console.log('trying');
    let val = await userModel(req.body);
    try {
        await val.generateAuthToken();
        console.log('trying');
        let e = await bcryptjs.hash(req.body.password, 10);
        val.password = e;
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.post('/login', async (req, res) => {
    let val = await userModel.findOne({ email: req.body.email });
    try {
        let e = await bcryptjs.compare(req.body.password, val.password);
        if (e) {
            console.log('trying');
            let token = await val.generateAuthToken();
            res.cookie('User', token);
            // console.log('val',val);
            // res.status(200).json(val);
            res.send(val);
        }
        else {
            res.status(403).send('Error! Incorrect username or password');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
// app.get('/secret',Auth,async(req,res)=>{
//     try {
//         if(req.user.isAdmin){
//         res.status(200).send(req.user._id);}
//         else
//         {
//             res.status(404).send('error');
//         }
//     } catch (error) {
//         res.status(404).send(error);
//     }
// })
app.post('/upload', Auth, async (req, res) => {
    try {
        if (req.user.isAdmin) {
            let val = await userModel(req.body);
            val.save();
            res.status(200).send('val');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
// (get)
app.get('/user/user/:email', Auth, async (req, res) => {
    console.log(req.params.email);

    try {
        let val = await userModel.findOne({ email: req.params.email })
        // console.log('running');
        // if (req.params.id === req.user._id || req.user.isAdmin) {
        //     console.log('running2');
        // let { password, ...others } = val_doc;
        //     res.status(200).send(others);
        // }
        // else {
        //     res.status(403).send('YOu can only view your content');
        // }
        // console.log(val);
        if (req.user.isAdmin) {
            console.log('req.user.isAdmin', req.user.isAdmin);
            res.status(200).send(val);
        }
        else {
            res.status(404).send('You are Not an admin ');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/user/:id', Auth, async (req, res) => {
    let val = await userModel.findOne({ _id: req.params.id })
    try {
        // console.log('running');
        if (req.params.id === req.user._id || req.user.isAdmin) {
            // console.log('running2');
            // let { password, ...others } = val_doc;
            res.status(200).send(val);
        }
        else {
            res.status(403).send('YOu can only view your content');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/users/:id', Auth, async (req, res) => {
    // console.log('users');
    let val = await userModel.findOne({ _id: req.user._id })
    try {
        // let { password, ...others } = val_doc;
        // console.log('req.params.id',req.params.id);
        // console.log('req.user._id',req.user._id);
        if (req.params.id === req.user._id || req.user.isAdmin) {
            res.status(200).send(val._id);
        }
        else {
            res.status(403).send('YOu can only view your content');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/user', Auth, async (req, res) => {
    let query = req.query.new;
    // console.log('I am user');
    let val = query ? await userModel.find().limit(5).sort({ _id: -1 }) : await userModel.find()
    try {
        // console.log('req.user.isAdmin', req.user.isAdmin);
        if (req.user.isAdmin) {
            // let {password,...others}=val_doc;
            res.status(200).send(val);
        }
        else {
            res.status(403).send('YOu can only view your content');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/user/stats/stats', Auth, async (req, res) => {
    // let query=req.query.new;
    // console.log('running');
    let date = new Date();
    let lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        if (req.user.isAdmin) {
            // console.log('req.user.isAdmin', req.user.isAdmin);
            let val = await userModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: lastYear
                        }
                    }
                },
                {
                    $project: {
                        month:
                        {
                            $month: "$createdAt"
                        }
                    }
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: 1 }
                    }
                }
            ])
            res.status(200).send(val);
        }
        else {
            res.status(403).send('YOu can only view your content');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
//(put)
app.put('/user/:id', Auth, async (req, res) => {
    let val = await userModel.findOneAndUpdate({ _id: req.params.id }, (req.body), {
        new: true
    })
    try {
        if (req.params.id === req.user._id || req.user.isAdmin) {
            res.status(200).send(val);
        }
        else {
            res.status(403).send('YOu can only view your content');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
//(delete)
app.delete('/user/:id', Auth, async (req, res) => {
    // console.log('deleting...');
    try {
        if (req.params.id === req.user._id || req.user.isAdmin) {
            let val = await userModel.findOneAndDelete({ _id: req.params.id })
            res.clearCookie('User');
            res.status(200).send('val');
        }
        else {
            res.status(403).send('YOu can only view your content');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
//Payment
app.post('/payment', async (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd"
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(404).send(stripeErr);
            }
            else {
                // console.log(stripeRes);
                // stripeRes.save()
                res.status(200).send(stripeRes);
            }
        }
    )
})

// //signout 
// app.get('/signout', Auth, async (req, res) => {
//     res.clearCookie("User");
//     try {
//         // val.save();
//         res.status(200).send(val);
//     } catch (error) {
//         res.status(404).send(error);
//     }
// })
////////////
//api
// //(education)
app.post('/education', Auth, async (req, res) => {
    console.log('val');
    let val = await educationModel(req.body);
    try {
        console.log(val);
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/education', async (req, res) => {
    let val = await educationModel.find();
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.patch('/education/:id', async (req, res) => {
    // console.log('val');
    let val = await educationModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    try {
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.delete('/education/:id', async (req, res) => {
    // console.log('val');
    let val = await educationModel.findOneAndDelete({ _id: req.params.id });
    try {
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})

//(projects)
app.post('/experience', Auth, async (req, res) => {
    // console.log('val');
    let val = await experienceModel(req.body);
    try {
        console.log(val);
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/experience', async (req, res) => {
    let val = await experienceModel.find();
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.patch('/experience/:id', async (req, res) => {
    // console.log('val');
    let val = await experienceModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    try {
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.delete('/experience/:id', async (req, res) => {
    // console.log('val');
    let val = await experienceModel.findOneAndDelete({ _id: req.params.id });
    try {
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.post('/services', Auth, async (req, res) => {
    console.log('val');
    let val = await servicesModel(req.body);
    try {
        console.log(val);
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/services', async (req, res) => {
    let val = await servicesModel.find();
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.patch('/services/:id', async (req, res) => {
    // console.log('val');
    let val = await servicesModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    try {
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.delete('/services/:id', async (req, res) => {
    // console.log('val');
    let val = await servicesModel.findOneAndDelete({ _id: req.params.id });
    try {
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
//(projects)
app.post('/projects', Auth, async (req, res) => {
    // console.log('val');
    let val = await projectsModel(req.body);
    try {
        console.log(val);
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/projects', async (req, res) => {
    let val = await projectsModel.find();
    // let val = await projectsModel.find().sort({ _id: -1 });
    try {
        let val2 = val.flat()
        res.status(200).send(val2);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/projects/:tag', async (req, res) => {
    let val;
    // if (req.params.tag === 'MERN') {
    // console.log('tag',req.params.tag);
    val = await projectsModel.find({ ptag: req.params.tag });
    // }
    // else {
    //     // let val2 = await projectsModel.find();
    //     val = await projectsModel.find({ tag: req.params.tag!="MERN" });
    // }
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.patch('/projects/:id', async (req, res) => {
    // console.log('val');
    let val = await projectsModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    try {
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.delete('/projects/:id', async (req, res) => {
    // console.log('val');
    let val = await projectsModel.findOneAndDelete({ _id: req.params.id });
    try {
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})

app.post('/contactUs', async (req, res) => {
    console.log('val');
    let val = await contactUsModel(req.body);
    try {
        console.log(val);
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/signout', Auth, async (req, res) => {
    try {
        // val.save();
        // res.clearCookie("User");
        res.clearCookie("User")
        console.log('signout val');
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/DownloadCv', Auth, async (req, res) => {
    try {
        
        // File URL
        // const url = `https://acquirebase.com/img/logo.png`
        // const url = `https://w7.pngwing.com/pngs/445/991/png-transparent-fawad-khan-cartoon-animation-character-character-hand-boy-cartoon.png`
        // const url = `https://drive.google.com/file/d/13s0ybLuapXOXsa9IrZzpFrSxpPa63hYH/view?usp=sharing`
        // const url = `https://www.canva.com/design/DAFdMpwMs-8/frbrlJfAgwiG8p0D2m6IwQ/watch?utm_content=DAFdMpwMs-8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`
        let filePath= path.resolve(__dirname,'../server/Fawad Rehman.pdf')
        fs.readFile(filePath,(err,file)=>{
            if (err) {
                console.log(err);
                return res.status(500).send(err)
            }
            res.setHeader('Content-Type','application/pdf')
            // res.setHeader('Content-Disposition','attachment;filename="Fawad_CV.pdf"')
            res.setHeader('Content-Disposition','attachment;filename="Fawad Rehman.pdf"')
            res.status(200).send(file)
        })


        // const url = `https://www.pc.gov.pk/uploads/vision2025/Pakistan-Vision-2025.pdf`

        // Download the file
        // https.get(url, res => {
        //     // Open file in local filesystem
        //     // const file = fs.createWriteStream(`logo.png`)
        //     const file = fs.createWriteStream(`FawadRehmanCV.pdf`)
        //     // Write data into local file
        //     res.pipe(file)
        //     // Close the file
        //     file.on('finish', () => {
        //         file.close()
        //         console.log(`File downloaded!`)
        //     })
        //     // res.status(200).send(file)
        // })
        //     .on('error', err => {
        //         console.log('Error: ', err.message)
        //     })
        } catch (error) {
        res.status(404).send(error)
    }
})

app.get("*",(req,res)=>{
    // res.sendFile(path.join(__dirname,"./client/build/index.html")),
    //  const index = path.join(__dirname,'client', 'build', 'index.html');
    //  console.log('index',index);
    res.sendFile(path.join(__dirname,'client', 'build', 'index.html')),
    function (err) {
        // console.log(err);
        res.status(500).send(err)
    }
})

//listen
let port =process.env.port || 8000;
app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})