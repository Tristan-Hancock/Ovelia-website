import express from "express";
import { google } from "googleapis";
import cors from "cors";


const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

const auth = new google.auth.GoogleAuth({
  keyFile: "./ovelia_test.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function writeEmailToSheet(email) {
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = "1i1grm8SSL0ZE0p3o-Jabe_1ENf2IRt13t42TAnF0Cfo";
  const range = "Sheet1!A2:A";
  const valueInputOption = "USER_ENTERED";

  const resource = { values: [[email]] };

  try {
    const res =  sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });
    return res;
  } catch (err) {
    console.error("update error", err);
    throw new Error("Failed to write to google sheet");
  }
}


app.post("/submit", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  try {
    await writeEmailToSheet(email);
    res.status(200).send("Email added to Google Sheet");
  } catch (err) {
    console.error("Error handling email submission:", err);
    res.status(500).send("Failed to add email to Google Sheet.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
