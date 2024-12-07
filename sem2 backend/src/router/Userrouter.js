import express from 'express'
import { getData,putData} from '../controller/usercontroller.js';

const router = express.Router();
 
router.get('/data',getData);

router.put('./putting',putData);

export default router;