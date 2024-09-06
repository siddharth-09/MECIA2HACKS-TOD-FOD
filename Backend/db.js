
const mongoose = require ("mongoose"); 


//Conecting out URL 
mongoose.connect ("mongodb+srv://krishpatel632:krish123@cluster0.bnp6rj9.mongodb.net/clinic?retryWrites=true&w=majority")
.then(()=> console.log("Connected"))
.catch((error)=> console.log("Error",error))

// defing user Schema ( What inputs the db Should expect )


const Userschema = mongoose.Schema( {

         username : String, 
         password : String , 
         age : Number

})
const Docschema = mongoose.Schema( {

    username : String, 
    email : String, 
    password : String , 
    experience : Number
})

const drugSchema = mongoose.Schema ({

   
    mechanism : String ,
    action : String ,
    drugA : String , 
    drugB : String 
   
} ,  { collection: 'interactions' }); 

const medicalSchema = mongoose.Schema ({


    username: { type: String, ref: 'User', required: true }, 
    name : String, 
    sex : String,
    address : String,
    occupation : String,
    bloodgroup : String,
    height : String,
    weight : String,  

}) 

const appointmentSchema = mongoose.Schema ({ 

     username : {type : String , ref : 'User' , required : true} ,   
     doctor : {type : String , ref : 'Doctors' , required : true} ,  
     data : {type : Object , required : true} ,  


})

// where to store data 
const user = mongoose.model ("Users" , Userschema)
const doctors  = mongoose.model ("Doctors" , Docschema)
const Interaction = mongoose.model('Interaction', drugSchema);
const Medicaldata = mongoose.model('Medicaldata', medicalSchema);
const Appointment = mongoose.model('Appointments', appointmentSchema); 

module.exports =  {
    user : user,
    doctors : doctors, 
    Interaction : Interaction, 
    Medicaldata : Medicaldata, 
    appointments : Appointment    
}
