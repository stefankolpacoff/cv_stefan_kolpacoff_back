import express from 'express';
import { handleError } from './helpers/errors';
import setupRoutes from './router';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// à faire des requetes axios
const corsOptions: cors.CorsOptions = {
  // must-have for frontend to communicate with API
  origin: ['http://localhost:3000', 'http://localhost:3001'],
};

// middleware cors
app.use(cors(corsOptions));
app.use(express.json());
setupRoutes(app);
//middleware pour lire le body

// A mettre à la fin pour gèrer les erreurs qui sortiront des routes
app.use(handleError);

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`server is listening on ${port}`);
  /* eslint-enable no-console */
});
