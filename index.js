const express = require('express')
const app = express()
app.get('/', (req, res) => {
      res.status(200).json({
        status: true,
        msg: "LaraTeal modul",
    });
});
app.listen(process.env.PORT || 3000)
