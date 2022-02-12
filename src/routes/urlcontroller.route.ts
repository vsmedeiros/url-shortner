import { Router, Request, Response } from "express";
import shortId from "shortid";
import { URLModel } from "../database/model/URL";
const urlcontroller = Router();

urlcontroller.post("/short", async (req: Request, res: Response) => {
  try {
    const { originURL } = req.body;
    const url = await URLModel.findOne({ originURL });
    if (url) {
      res.json(url);
    } else {
      const hash = shortId.generate();
      const shortURL = `${process.env.API_URL}/${hash}`;
      const newurl = await URLModel.create({ hash, shortURL, originURL });
      res.json(newurl);
    }
  } catch (error) {}
});
urlcontroller.get("/:hash", async (req: Request, res: Response) => {
  try {
    const { hash } = req.params;
    const url = await URLModel.findOne({ hash });
    if (url) {
      res.redirect(`${url.originURL}`);
    } else {
      res.status(400).json({ error: "URL not found" });
    }
  } catch (error) {}
});
export default urlcontroller;
