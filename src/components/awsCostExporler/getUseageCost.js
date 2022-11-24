// var AWS = require("aws-sdk");
// // process.env.AWS_PROFILE = "default";
// AWS.config.update({ region: "us-east-1" });
// // var credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
// // var credentials = new AWS.CognitoIdentityCredentials(
// //   {
// //     IdentityPoolId: " ap-south-1_0W1EWQ0rG",
// //     RoleArn:
// //       "arn:aws:cognito-idp:ap-south-1:255182770479:userpool/ap-south-1_0W1EWQ0rG",
// //     RoleSessionName: "web",
// //   },
// //   { region: "ap-south-1" }
// // );
// // AWS.config.credentials = credentials;

// const getData = () => {
//   var costexplorer = new AWS.CostExplorer({ apiVersion: "2017-10-25" });
//   var params = {
//     Metrics: ["UNBLENDED_COST"],
//     TimePeriod: {
//       End: "2022-11-20" /* Fill the end date */,
//       Start: "2022-11-01" /* Fill the start date  */,
//     },
//     Granularity: "DAILY" /* MONTHLY or HOURLY */,
//     GroupBy: [
//       {
//         Key: "LINKED_ACCOUNT",
//         Type: "DIMENSION",
//       },
//     ],
//   };
//   costexplorer.getCostAndUsage(params, function (err, data) {
//     if (err) {
//       console.log(err, err.stack);
//     } // an error occurred
//     else {
//       console.log(data);
//       return data;
//     } // successful response
//   });
// };
// getData();
// // export default getData;
