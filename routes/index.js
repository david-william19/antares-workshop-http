var express = require("express");
var router = express.Router();
const antaresApi = require("../service/antaresAPI");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let status = "mati";
  // get data
  const data = await antaresApi.getLatestData();
  // parse data disini
  let temperature = antaresData.temperature ?? 0
  let humidity = antaresData.humidity ?? 0
  

  res.render("index", { status, temperature, humidity });
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
