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


/**
 * @swagger
 * /urls:
 *   post:
 *     summary: Cria uma nova URL encurtada
 *     tags: [URLs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               originalUrl:
 *                 type: string
 *                 example: "https://exemplo.com"
 *     responses:
 *       201:
 *         description: URL criada com sucesso
 *   get:
 *     summary: Lista todas as URLs encurtadas
 *     tags: [URLs]
 *     responses:
 *       200:
 *         description: Lista de URLs
 */
router.post("/", addUrl);
router.get("/", getUrls);

/**
 * @swagger
 * /urls/{id}:
 *   get:
 *     summary: Busca uma URL encurtada pelo ID
 *     tags: [URLs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da URL
 *     responses:
 *       200:
 *         description: URL encontrada
 *   patch:
 *     summary: Atualiza uma URL encurtada
 *     tags: [URLs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da URL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               originalUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: URL atualizada
 *   delete:
 *     summary: Remove uma URL encurtada
 *     tags: [URLs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da URL
 *     responses:
 *       204:
 *         description: URL removida
 */
router.get("/:id", getUrl);
router.patch("/:id", updateUrl);
router.delete("/:id", deleteUrl);

/**
 * @swagger
 * /urls/fake/{id}:
 *   get:
 *     summary: Busca uma URL encurtada pelo fakeUrl
 *     tags: [URLs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: fakeUrl da URL
 *     responses:
 *       200:
 *         description: URL encontrada
 */
router.get("/fake/:id", getUrlByFakeUrl);

export { router };
