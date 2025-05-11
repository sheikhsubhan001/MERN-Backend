const mongoose = require('mongoose');

const ConnectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://ssm156789:SUBH%40n1122@cluster0.lohe7vl.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database Connected Successfully');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
  }
};

ConnectToDatabase();
