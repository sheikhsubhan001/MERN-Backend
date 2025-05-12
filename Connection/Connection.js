const mongoose = require('mongoose');

const ConnectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://ssm156789:SUBH%40N1122@cluster0.hpic9wi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    //     , {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
);

    console.log('Database Connected Successfully');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
  }
};

ConnectToDatabase();
