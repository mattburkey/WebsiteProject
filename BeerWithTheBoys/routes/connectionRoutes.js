const express = require('express');
const controller = require('../controllers/eventController');
const {isLoggedIn, isAuthor, isNotAuthor} = require('../middlewares/auth');
const{validateId, validateResult, validateConnection, validateRsvp} = require('../middlewares/validator');

const router = express.Router();

router.get('/', controller.index);
router.get('/new', isLoggedIn, controller.new);
router.get('/about', controller.about);
router.get('/contact', controller.contact);

router.get('/:id', validateId, controller.show);

//GET /connections/new: send html form for creating a new connection


//POST /stories: create a new connection
router.post('/', isLoggedIn, validateConnection, controller.create);


//GET /stories/:id/edit: send html form for editing an existing connection
router.get('/:id/edit', validateId, isLoggedIn, isAuthor, controller.edit);

//PUT /stories/:id: update the story identified by id
router.put('/:id', validateId, validateConnection, isLoggedIn, isAuthor, controller.update);

//DELETE /stories/:id, delete the story identified by id
router.delete('/:id', validateId, isLoggedIn, isAuthor, controller.delete);

router.post('/:id/rsvp', validateId, isLoggedIn, validateRsvp, validateResult, isNotAuthor, controller.editRsvp);

router.delete('/:id/rsvp', validateId, isLoggedIn, controller.deleteRsvp)

module.exports = router;