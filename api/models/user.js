const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const {isEmail} = require('validator')


const userSchema = new mongoose.Schema({
    name: { type : String},
    email: { 
        type : String, 
        required : [true, 'Please enter a valid email' ],
        unique: true,
        lowercase: true,
        validator: [isEmail, 'Please enter a valid email address' ]
    },
    password: {
        type: String,
        required: [true,'Please enter a password'],
        minlength: [8, 'Please enter a password of min length 6']
    }
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

userSchema.statics.login = async function(email,password){
    const user = await this.findOne({email})
    if (user){
        const auth = await bcrypt.compare(password,user.password)
        if(auth){
            return user
        }
        throw Error('Invalid password')
    }
    throw Error('Invalid email')
}


module.exports = mongoose.model('user',userSchema)