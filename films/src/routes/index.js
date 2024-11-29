const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();
/**
 * @swagger
 * 
 * components:
 *  schemas:
 *    Film:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the id of the film
 *          example: 1
 *        title:
 *          type: string
 *          description: the title of the film
 *          example: A New Hope
 *        opening_crawl:
 *          type: string
 *          description: the opening text at the beginning of the film
 *          example: It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.
 *        director:
 *          type: string
 *          description: the director of the film
 *          example: George Lucas
 *        producer:
 *          type: string
 *          description: the producer of the film
 *          example: Lucasfilm Ltd.
 *        release_date:
 *          type: string
 *          description: the release date of the film
 *          example: 1977-05-25
 *        characters:
 *          type: array
 *          description: the characters of the film
 *          example: [Luke Skywalker, C-3PO, R2-D2]
 *        
 */

/**
 * @swagger
 *    tags:
 *     name: Films
 *     description: Operations about Star Wars films
 */

router.get("/", controllers.getFilms);

/**
 * @swagger 
 * /films:
 *   get:
 *     summary: Get all films
 *     description: Returns all films
 *     tags: [Films]
 *     responses:
 *       200:
 *         description: Array of films
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Film'
 *       500:
 *         description: Internal server error
 *   
 */

router.get("/:id", controllers.getFilmById);

/**
 * @swagger
 * /films/{id}:
 *   get:
 *     summary: Get a film by id
 *     description: Returns a film by id
 *     tags: [Films]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *              type: string
 *         required: true
 *         description: ID of the film to return
 *     responses:
 *       200:
 *         description: The film
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Film'
 *       404:
 *         description: Film not found
 *       500:
 *         description: Internal server error
 */

router.post("/", middlewares.filmValidation, controllers.createFilm);

/**
 * @swagger
 * /films:
 *   post:
 *     summary: Create a film
 *     description: Creates a film
 *     tags: [Films]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the film
 *                 example: A New Hope
 *               opening_crawl:
 *                 type: string
 *                 description: The opening text at the beginning of the film
 *                 example: It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.
 *               director:
 *                 type: string
 *                 description: The director of the film
 *                 example: George Lucas
 *               producer:
 *                 type: string
 *                 description: The producer of the film
 *                 example: Lucasfilm Ltd.
 *               release_date:
 *                 type: string
 *                 description: The release date of the film
 *                 example: 1977-05-25
 *               characters:
 *                 type: array
 *                 description: The characters of the film
 *                 example: [Luke Skywalker]
 *     responses:
 *       200:
 *         description: The film
 *         content:
 *           application/json:
 *             schema:
 *               type: object   
 *               $ref: '#/components/schemas/Film'
 *       500:
 *         description: Internal server error
 */

module.exports = router;
