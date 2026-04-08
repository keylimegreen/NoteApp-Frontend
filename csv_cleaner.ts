import fs from "fs";
import csv from "csv-parser";

const results: string[] = [];

fs.createReadStream("./src/assets/diagnosis.csv")
  .pipe(
    csv({
      headers: ["symptom"], // Manually define the column name
      skipLines: 0, // Only set to 1 if you actually have a header you want to skip
    }),
  )
  .on("data", (data) => {
    console.log(data.symptom);
    if (data) results.push(data.symptom);
  })
  .on("end", () => {
    console.log(results);
    const fileContent = `export const DIAGNOSIS_LIST = ${JSON.stringify(results, null, 2)} as const;`;
    fs.writeFileSync("./src/assets/diagnosisList.ts", fileContent, "utf-8");
  });
