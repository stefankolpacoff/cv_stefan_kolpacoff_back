import { Express } from 'express';
import usersController from './controllers/users';
import educationsController from './controllers/educations';
import xpsController from './controllers/xps';
import skillsController from './controllers/skills';
import hobbiesController from './controllers/Hobbies';
import commentsController from './controllers/comments';

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

  ///// EDUCATION /////
  //GET all education
  server.get('/api/education', educationsController.getAllEducations);

  ///// HOBBIES /////
  //GET all hobbies
  server.get('/api/hobbies', hobbiesController.getAllHobbies);

  ///// SKILLS /////
  //GET all skills
  server.get('/api/skills/tech', skillsController.getTechSkills);
  server.get('/api/skills/soft', skillsController.getSoftSkills);

  ///// MESSAGE /////
  // POST message
  server.post(`/api/comments`, commentsController.postComment);
};

export default setupRoutes;
