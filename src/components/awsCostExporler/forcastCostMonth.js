var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

var costexplorer = new AWS.CostExplorer({ apiVersion: "2017-10-25" });
var params = {
  Granularity: "MONTHLY" /* required */,
  Metric: "UNBLENDED_COST" /* required */,
  TimePeriod: {
    /* required */ End: "2023-04-06" /* required */,
    Start: "2022-11-19" /* required */,
  },

  PredictionIntervalLevel: "80",
};
costexplorer.getCostForecast(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data.Total); // successful response
});
