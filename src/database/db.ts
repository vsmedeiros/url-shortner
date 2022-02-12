import mongoose from "mongoose";
class MongoConnection {
  async connect(): Promise<void> {
    try {
      await mongoose.connect(`${process.env.DB_URL}`);
      console.log("Banco de dados conectado");
    } catch (error) {}
  }
}
export default new MongoConnection();
