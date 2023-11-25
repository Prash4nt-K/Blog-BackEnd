const express = require('express');
const db = require("./MongoConfig");
const cors = require('cors');
const router = require("./routes/routes");
const app = express();

app.use(express.json());

app.use(cors({
  origin : "*"
}));

const port = process.env.PORT || 5000;

app.use(router);


// Server.....................

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
         



