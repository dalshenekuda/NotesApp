const Router = require('express')
const router = new Router()
const noteController = require('../controllers/noteController')

//need some validators here


router.post('/create', noteController.create)
router.get('/list', noteController.list)
router.delete('/:id', noteController.delete)
router.put('/complete/:id', noteController.complete)
router.put('/edit/:id', noteController.edit)
router.get('/:id', noteController.getNote)



module.exports = router