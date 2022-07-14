import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmVmMzljY2Y2YzAzYTM5OGNhYmJkOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzgxNDcwNywiZXhwIjoxNjU4MDczOTA3fQ.rV1Sl5dLaD_pDW9b6qfrz4ROTk0knzeYFjStpt-XElA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
