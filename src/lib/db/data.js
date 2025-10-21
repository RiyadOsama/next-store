import { promises as fs } from "fs";

import path from "path";
const filePath = path.join(process.cwd(), "src", "lib", "db", "data.json");

async function getData() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function setData(data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export { getData, setData };
