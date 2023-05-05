import { createClient } from "altogic";

let envUrl = process.env.envUrl;
let clientKey = process.env.clientKey;

const altogic = createClient(envUrl, clientKey, {
  signInRedirect: "/signin",
});

export default altogic;