// Schema  - 
// model
// query 


import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    city: String,
    house_num: Number
})
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true
    },
    age: {
        type: Number,
        min: 18
    },
    createdAt: {
        type: Date,
        default: new Date(),
        immutable: true
    },

    updatedAt: {
        type: Date,
        default: new Date(),
    },

    bestFriend: {type: mongoose.Types.ObjectId, ref: 'User' },
    hasPet: Boolean,
    address: addressSchema,
    evenNumber: { 
        type: Number,
        validate: x => x % 2 == 0
},
});


// פונקציה ששייכת לסכמה ומופעלת עליה
//אפשר להפעיל אותה על כל מופע של המודל 
UserSchema.methods.sayHi = function() {
console.log(`Hi ${this.username}`);
}


// פונקציה סטטית מופעלות ישירות מהמודל עצמו ולא רק מהמופע שלו
// מיועדות לפונקציות שימושיות על המודל עצמו
// כמו לדוגמא שאילתא נפוצה 

UserSchema.statics.findByUsername = function (name) {
    return this.where({ username: new RegExp(name, 'i') })
}

// middleware
// פונקצית ביניים לפני כל שמירה לדטה בייס של המודל הזה 

UserSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
})
export const userModel = mongoose.model("User", UserSchema);


