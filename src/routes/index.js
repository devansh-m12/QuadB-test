import {Router} from 'express';
import profileRouter from './profile.route.js';

const router = Router();

router.get('/' ,(req,res)=>{
    res.json({
        api:"success",
        application:"QuadB-Backend",
        author:"Devansh",
        version:"1.0.0"
    })
})

router.use('/Profile' ,profileRouter);

export default router;