import { connect } from 'mongoose';

const connectDB = async () => {
    try {
        const con = await connect(process.env.MONGO_URI);
        console.log(`Mongo DB Connected: ${con.connection.host}`);
    } catch (error) {
        console.error(`Error ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;