const mongoose = require('mongoose');

const ConnectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database Connected Successfully');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
  }
};

ConnectToDatabase();
