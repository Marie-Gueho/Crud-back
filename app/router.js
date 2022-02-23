const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController.js');

router.get('/', mainController.homePage);
/*router.get('/member/:id', mainController.detailPage);*/
router.post('/member', mainController.createNewMember);
router.delete('/member/:id', mainController.deleteOneMember);
router.patch('/member/:id', mainController.updateOneMember);

module.exports = router;