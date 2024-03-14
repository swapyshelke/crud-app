import mongoose from "mongoose"


const connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@paytm.1cqgi9u.mongodb.net/?retryWrites=true&w=majority&appName=paytm`

    try {
    await mongoose.connect(URL)

        console.log('🚀🚀🚀 connected to db 🚀🚀🚀');
    } catch (error) {
        console.log('💔💔💔 error while connection to database 💔💔💔', error);
    }
}

export default connection;