import express from 'express';
import router from './routes/helpRoutes.js';
import mongoose from 'mongoose';


var app = express();
app.use(express.json());

const dbURI = 'mongodb+srv://efratdev0933:i6zGVHrf49sMn1Hd@efratcluster.gccfpzb.mongodb.net/lesson_8?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(dbURI)
      app.listen(3000, () => {
          console.log('port  is running on 3000');
        });
        app.use('/api', router);
  }
  catch (error) {
    console.error(error);
  }
}

connect();

