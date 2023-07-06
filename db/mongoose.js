const mongoose_1 = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose_1.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
exports.default = dbConnect;
