const mongoose = require('mongoose')

// mongodb+srv://thong:<password>@cluster0.zzqjdfs.mongodb.net/?retryWrites=true&w=majority


async function connect(){
    try {
        await mongoose.connect('mongodb+srv://thong:Pham022585951@cluster0.zzqjdfs.mongodb.net/hanyonn_commission?retryWrites=true&w=majority',{
            family:4,
            useNewUrlParser: true,
            useUnifiedTopology: true
        } 
        );
        console.log('successfully!!')
    } catch (error) {
        console.log('failure!!' + error)
    }
}

module.exports = {connect}