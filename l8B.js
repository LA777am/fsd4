const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.static('./public', { index: 'multer.html' }));

const Storage = multer.diskStorage({
    destination: 'jambo',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: Storage });

app.post('/data', upload.array('mypic', 3), (req, res) => {
    const files = req.files;
    if (files) {
        for (let i of files) {
            res.write(`your file name : ${i.originalname}\n`);
        }
        res.end();
    } else {
        res.send('not found');
    }
});

app.listen(5555, () => {
})
