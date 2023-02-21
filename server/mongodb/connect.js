import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true); //option is useful for search functionality

    mongoose.connect(url)  ///connect to db
       .then(() => console.log('MongoDB Ayos'))
       .catch((err) => console.log(err));
}

export default connectDB;