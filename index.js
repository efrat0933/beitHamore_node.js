import express from 'express';
import router from './routes/helpRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import { errorHandling } from './middlewares/errorHandler.js';

//  https://koshercode.netlify.app/video-tutorials/nodejs/tmfx8chy9km/

var app = express();

//  מאפשר באופן דיפולטיבי לכולם
app.use(cors());
app.use(cors({
  // נגדיר דומיינים מסויימים שאנו מרשים להם לגשת
  origin: 'http://localhost:4200',
  methods: "PUT, POST, DELETE, GET" // מגדיר אילו פונקציות מורשות לגשת
}));

app.use(express.json());


const dbURI = 'mongodb+srv://efratdev0933:i6zGVHrf49sMn1Hd@efratcluster.gccfpzb.mongodb.net/lesson_8?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(dbURI)      
  }
  catch (error) {
    throw new Error('failed to connect to db');
  }
}
connect();


app.use('/api', router);

app.listen(3000, () => {
  console.log('port  is running on 3000');
});

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use(errorHandling);



