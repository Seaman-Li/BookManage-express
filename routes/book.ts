import express from 'express';
import { Book } from '../model';

const router = express.Router();

router.get('/', async (req, res) => {
    // current是当前的页码，每页20条数据
    const {current = 1, pageSize = 20, name, author, category} = req.query;
    // 显示当前页码的页面，需要略过当前页面之前的所有数据，并且限制返回的数据为pageSize
    const data = await Book.find({
        ...(name && { name }),
        ...(author && { author }),
        ...(category && { category }),
    })
        .skip((Number(current) - 1 ) * Number(pageSize))
        .limit(Number(pageSize));
    const total = await Book.countDocuments({
        ...(name && { name }),
        ...(author && { author }),
        ...(category && { category }),
    });
    return res.status(200).json({ data, total });

    // return res.json({ success: true });
});

router.post('/', (req, res)=>{
    const body = req.body;
    const bookModel = new Book({ ...body })
    bookModel.save();
    return res.json({ success: true });
})

// 删除逻辑
router.delete('/:id', async (req, res)=>{
    const { id } = req.params;
    await Book.findByIdandDelete(id);
    return res.status(200).json({ success: true });
});

router.get('/:id', async(req, res)=>{
    const { id } = req.params;
    const book = await Book.findById(id);
    
})

export default router;