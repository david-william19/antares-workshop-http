var express = require("express");
var router = express.Router();
const antaresApi = require("../service/antaresAPI");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let status = "mati";

  res.render("index", { status });
});

/* POST DATA */
router.post("/postData", async function (req, res, next) {
  const data = {
    "m2m:cin": {
      con: JSON.stringify(req.body),
    },
  };
  await antaresApi.postData(data).then((response) => {
    res.status(200).json(response.data);
  });
});

module.exports = router;
