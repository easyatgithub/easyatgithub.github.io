import axios from "axios";

import { data } from "@/api/data.js";
import { dev } from "@/api/dev.js";
import { leancloud } from "@/api/leancloud.js";

const baseURL = "http://127.0.0.1:3000";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export const api = "dev" === "dev" ? dev : leancloud;
