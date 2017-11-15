var express = require('express');
var router = express.Router();
var Task = require('../models/task');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        Task.getTaskById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Task.getAllTask(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
// router.get('/', function (req, res, next) {
//     Task.getAllTask(function (err, rows) {
//         if (err) {
//             res.json(err)
//         } else {
//             res.json(rows)
//         }
//     })
// })
router.post('/', function (req, res, next) {
    Task.addTask(req.body, function (err, count) {
        if (err) {
            console.log("errrorrrrr", err)
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});
router.delete('/:id', function (req, res, next) {
    Task.deleteTask(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.put('/:id', function (req, res, next) {
    Task.updateTask(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;  