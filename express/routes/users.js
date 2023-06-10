const express = require('express');
const router = express.Router()


router.get('/', (req,res)=>{
    res.send("User List")
})

router.get('/new', (req,res)=>{
    res.send("New User Form")
})

router.post('/', (req,res)=>{
    res.send("Crate user")
})


// router.get('/:id', (req,res)=>{
//     res.send("user get " + req.params.id)
// })

// router.put('/:id', (req,res)=>{
//     res.send("user update " + req.params.id)
// })

// router.delete('/:id', (req,res)=>{
//     res.send("user delete " + req.params.id)
// })

router.route('/:id')
    .get((req,res)=>{
        res.send("user get " + req.params.id)
    })
    .put((req,res)=>{
        res.send("user update " + req.params.id)
        })
    .delete((req,res)=>{
        res.send("user delete " + req.params.id)
    })

module.exports = router