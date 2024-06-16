const mongoose = require("mongoose");
const schema = mongoose.Schema;

const listingschema = new schema({
    mail:{
        type:String,
        require,
    },
    previousmedicalreports:{
         type:String,
         require,
    },
    TIME:{
        type:Number,
       
    },
    Doctor:{
        type:String,
     
    }
});
const listing = mongoose.model("listing", listingschema);
module.exports=listing;