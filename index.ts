import express from "express"
import multer from "multer"
import { storage } from "./multConfig"

const upload = multer({ storage: storage })
const app = express()

app.use("/files", express.static("uploads"))

app.post("/upload", upload.single('file'), (req, res) => {
    return res.json(req.file?.filename)
})

app.listen(3000)