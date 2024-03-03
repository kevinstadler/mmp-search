import createClient from "openapi-fetch";
import type {paths} from "./mmp";

const client = createClient<paths>({
  baseUrl: "https://mmp.acdh-dev.oeaw.ac.at/api/",
  headers: {
    // the target server does not allow the 'Content-Type' header in 
    // cross-origin requests, so stop openapi-fetch from explicitly requesting 
    // 'application/json'
    'Content-Type': null
  }
});

export default client;
