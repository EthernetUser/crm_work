
const { Router } = require('express')
const router = Router()
const { TaskController } = require('@controllers/task-controller')
const { verifyTokenAndRole } = require('@services/auth-service')
const { taskGetValidation, taskCreateValidation, taskDeleteValidation,
    taskDenyValidation, taskDoneValidation,
    taskFinishValidation, taskStartValidation
} = require('@validators/task').default
const validDecorator = require('@services/validatedecorator-service')
const { task } = require('../config/roleapi.json')

router.get('/:id', verifyTokenAndRole(task.get), taskGetValidation, validDecorator(TaskController.get))
router.get('/all', verifyTokenAndRole(task.getAll), TaskController.getAll)
router.get('/executer/:id', verifyTokenAndRole(task.getExecuter), taskGetValidation, validDecorator(TaskController.getByExecuter))
router.get('/executer/all', verifyTokenAndRole(task.getAllExecuter), TaskController.getAllByExecuter)
router.post('/create', verifyTokenAndRole(task.create), taskCreateValidation,validDecorator(TaskController.create))
router.delete('/delete', verifyTokenAndRole(task.delete), taskDeleteValidation, validDecorator(TaskController.delete))
router.patch('/deny', verifyTokenAndRole(task.deny), taskDenyValidation, validDecorator(TaskController.deny))
router.patch('/done', verifyTokenAndRole(task.done), taskDoneValidation, validDecorator(TaskController.done))
router.patch('/start', verifyTokenAndRole(task.start), taskStartValidation, validDecorator(TaskController.start))
router.patch('/finish', verifyTokenAndRole(task.finish), taskFinishValidation, validDecorator(TaskController.finish))

module.exports = router