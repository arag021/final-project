const mongoose = require('mongoose');
const User = require('../models/user');


const dbName = 'tamid-babson'
mongoose.connect(`mongodb://localhost/${dbName}`);

const usersArray = [
    {
		email : "bshokouhi1@babson.edu",
		password: "",
		name: "Brigitte Shokouhi",
		position : "President",
		gradDate: 2021,
		phoneNum: 5164480069,
		role: "admin",
		resume: "",
		profilePic: ""
		},
		{
		email : "carolinakassin@gmail.com",
		password: "",
		name: "Carolina Kassin",
		position : "Consulting",
		gradDate: 2021,
		phoneNum: 6173198423,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "shamway2@babson.edu",
		password: "",
		name: "Sam Hamway ",
		position : "Investing",
		gradDate: 2021,
		phoneNum: 9172705120,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "ikatz1@babson.edu",
		password: "",
		name: "Isi Katz ",
		position : "Consulting",
		gradDate: 2021,
		phoneNum: 3055273868,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "malvesgarcia1@babson.edu",
		password: "",
		name: "Totoia Alves Garcia",
		position : "Vice President",
		gradDate: 2021,
		phoneNum: 7869859542,
		role: "admin",
		resume: "",
		profilePic: ""
		},
		{
		email : "gchehebar1@babson.edu",
		password: "",
		name: "Gabriella Chehebar",
		position : "Consulting",
		gradDate: 2021,
		phoneNum: 3057219405,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "agonzalezrubiosaab1@babson.edu",
		password: "",
		name: "Alejandra Gonzalez Rubio",
		position : "Consulting",
		gradDate: 2021,
		phoneNum: 594000000000,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "ylevy1@babson.edu",
		password: "",
		name: "Yael Levy",
		position : "President of Consulting ",
		gradDate: 2021,
		phoneNum: 3057782963,
		role: "admin",
		resume: "",
		profilePic: ""
		},
		{
		email : "nregen1@babson.edu",
		password: "",
		name: "Nicholas Regen",
		position : "President of Investing ",
		gradDate: 2020,
		phoneNum: 6177554371,
		role: "admin",
		resume: "",
		profilePic: ""
		},
		{
		email : "bsinsheimer1@babson.edu",
		password: "",
		name: "Brandon Sinsheimer ",
		position : "Investing",
		gradDate: 2020,
		phoneNum: 9178281420,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "pdeleongarcia1@babson.edu",
		password: "",
		name: "Pato De Leon ",
		position : "Investing",
		gradDate: 2020,
		phoneNum: 7814932354,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "jschuster1@babson.edu",
		password: "",
		name: "JP Schuster ",
		position : "Investing",
		gradDate: 2021,
		phoneNum: 6318710867,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "apadamsee1@babson.edu",
		password: "",
		name: "Afraz Padamsee ",
		position : "Investing",
		gradDate: 2021,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "aaragao1@babson.edu",
		password: "",
		name: "Alexander Aragao",
		position : "Treasurer",
		gradDate: 2021,
		phoneNum: 3054981852,
		role: "admin",
		resume: "",
		profilePic: ""
		},
		{
		email : "omayorga1@babson.edu",
		password: "",
		name: "Oli Mayorga",
		position : "Secretary",
		gradDate: 2021,
		phoneNum: 3057984151,
		role: "admin",
		resume: "",
		profilePic: ""
		},
		{
		email : "Dassor1@babson.edu",
		password: "",
		name: "Daniel Assor",
		position : "Investing",
		gradDate: 2021,
		phoneNum: 7868386390,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "jmouyal1@babson.edu",
		password: "",
		name: "Johanna Mouyal",
		position : "Consulting",
		gradDate: 2020,
		phoneNum: 3053085948,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "pchavestrento1@babson.edu",
		password: "",
		name: "Paula Chaves Trento ",
		position : "Consulting",
		gradDate: 2021,
		phoneNum: 7876434141,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "lhuguet1@babson.edu",
		password: "",
		name: "Laia Huguet",
		position : "Consulting",
		gradDate: 2021,
		phoneNum: 7862666699,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "wjalife1@babson.edu",
		password: "",
		name: "Wenceslao Jalife ",
		position : "Consulting",
		gradDate: 2021,
		phoneNum: 3057108245,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "cfernandezlondono1@babson.edu",
		password: "",
		name: "Carolina Fernandez",
		position : "Consulting",
		gradDate: 2021,
		phoneNum: 16177753606,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "jkatz2@babson.edu",
		password: "",
		name: "Jonathan Katz",
		position : "Consulting",
		gradDate: 2021,
		phoneNum: 3059046313,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "ashuster1@babson.edu",
		password: "",
		name: "Alex Shuster ",
		position : "President of ed/membership",
		gradDate: 2021,
		phoneNum: 7863257479,
		role: "admin",
		resume: "",
		profilePic: ""
		},
		{
		email : "skauffman2@babson.edu",
		password: "",
		name: "Scott Kauffman ",
		position : "Investing",
		gradDate: 2021,
		phoneNum: 6467736685,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "cdonneys1@babson.edu",
		password: "",
		name: "Camilo Donneys",
		position : "Investing",
		gradDate: 2021,
		role: "member",
		resume: "",
		profilePic: ""
		},
		{
		email : "mfeber1@babson.edu",
		password: "",
		name: "Max Feber",
		position : "Consulting",
		gradDate: 2021,
		role: "member",
		resume: "",
		profilePic: ""
		}
]



    User.create(usersArray)
    .then((result)=>{
        console.log(`created ${result.length} users`);
        mongoose.disconnect();
    })
    .catch((err)=>{
        console.log(err)
    })
