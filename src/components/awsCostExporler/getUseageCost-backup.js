const {
  CostExplorerClient,
  GetCostAndUsageCommand,
} = require("@aws-sdk/client-cost-explorer");

const getData = async () => {
  const client = new CostExplorerClient({ region: "us-east-1" });

  var params = {
    Granularity: "MONTHLY" /* required */,
    Metrics: ["UNBLENDED_COST"] /* required */,
    TimePeriod: {
      /* required */ End: "2022-11-20" /* required */,
      Start: "2022-11-01" /* required */,
    },
  };
  const command = new GetCostAndUsageCommand(params);

  try {
    const data = await client.send(command);
    let res = await data.ResultsByTime[0].Total;
    // process data.
    console.log(data.ResultsByTime[0].Total);
    return res;
  } catch (error) {
    console.log(error);
  }
};
getData();
// export default getData;
