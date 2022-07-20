import { Express } from 'express';
import usersController from './controllers/users';
import educationsController from './controllers/educations';
import xpsController from './controllers/xps';
import skillsController from './controllers/skills';
const setupRoutes = (server: Express) => {
  server.get('/coucou', (req, res) => {
    res.send('hibou');
  });
  ///// USERS /////
  // GET all users
  server.get('/api/users', usersController.getAllUsers);

  //GET user by ID
  server.get('/api/users/:idUser', usersController.getUserById);

  ///// XP /////
  //GET all xp
  server.get('/api/xp', xpsController.getAllXp);

  ///// education /////
  //GET all education
  server.get('/api/education', educationsController.getAllEducations);

  ///// hobbies /////
  //GET all hobbies
  // server.get('/api/hobbies' hobbiesController.getAllHobbies);

  ///// skills /////
  //GET all skills
  server.get('/api/skills/tech', skillsController.getTechSkills);
  server.get('/api/skills/soft', skillsController.getSoftSkills);
};

export default setupRoutes;
