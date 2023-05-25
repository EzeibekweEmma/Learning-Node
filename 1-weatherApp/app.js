const yargs = require("yargs");

const geocode = require("./geocode");
// Parsing command line arguments using yargs
const argv = yargs
  .options({
    address: {
      demand: true,
      alias: "a",
      describe: "Address to fetch weather from",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;

// Calling the geocodeAddress function from the geocode module with the provided address
geocode.geocodeAddress(argv.address);

console.log("fetching data...");
