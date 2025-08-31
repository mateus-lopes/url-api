import express, { Router } from "express";
import {
    addUrl,
    getUrls,
    getUrl,
    updateUrl,
    getUrlByFakeUrl,
    deleteUrl
} from "../controllers/url.controller.js";

const router: Router = express.Router();

router.post("/", addUrl);
router.get("/", getUrls);
router.get("/:id", getUrl);
router.get("/fake/:id", getUrlByFakeUrl);
router.patch("/:id", updateUrl);
router.delete("/:id", deleteUrl);

export { router };
