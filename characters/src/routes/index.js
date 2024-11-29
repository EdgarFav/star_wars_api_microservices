const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Character:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The id of the character
 *           example: 1
 *         name:
 *           type: string
 *           description: The name of the character
 *           example: Luke Skywalker
 *         height:
 *           type: string
 *           description: The height of the character
 *           example: 172
 *         mass:
 *           type: string
 *           description: The mass of the character
 *           example: 77
 *         hair_color:
 *           type: string
 *           description: The hair color of the character
 *           example: blond
 *         skin_color:
 *           type: string
 *           description: The skin color of the character
 *           example: fair
 *         eye_color:
 *           type: string
 *           description: The eye color of the character
 *           example: blue
 *         birth_year:
 *           type: string
 *           description: The birth year of the character
 *           example: 19BBY
 *         gender:
 *           type: string
 *           description: The gender of the character
 *           example: male
 *         homeworld:
 *           type: string
 *           description: The homeworld of the character
 *           example: tatooine
 *         films:
 *           type: array
 *           description: The films of the character
 *           example: [a new hope]   
 *        
 */

/**
 * @swagger
 *    tags:
 *     name: Characters
 *     description: Operations about Star Wars characters
 */

router.get("/", controllers.getCharacters);

/**
 * @swagger
 * /characters:
 *   get:
 *     summary: Get all characters
 *     description: Returns all characters
 *     tags: [Characters]
 *     responses:
 *       200:
 *         description: Array of characters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Character'
 *       500:
 *         description: Internal server error
 */

router.get("/:id", controllers.getCharacterById);

/**
 * @swagger
 * /characters/{id}:
 *   get:
 *     summary: Get a character by id
 *     description: Returns a character by id
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *              type: string
 *         required: true
 *         description: ID of the character to return
 *     responses:
 *       200:
 *         description: The character
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Character'
 *       404:
 *         description: Character not found
 *       500:
 *         description: Internal server error
 */

router.post("/", middlewares.characterValidation, controllers.createCharacter);

/**
 * @swagger
 * /characters:
 *   post:
 *     summary: Create a character
 *     description: Creates a character
 *     tags: [Characters]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the character
 *                 example: Luke Skywalker
 *               height:
 *                 type: string
 *                 description: The height of the character
 *                 example: 172
 *               mass:
 *                 type: string
 *                 description: The mass of the character
 *                 example: 77
 *               hair_color:
 *                 type: string
 *                 description: The hair color of the character
 *                 example: blond
 *               skin_color:
 *                 type: string
 *                 description: The skin color of the character
 *                 example: fair
 *               eye_color:
 *                 type: string
 *                 description: The eye color of the character
 *                 example: blue
 *               birth_year:
 *                 type: string
 *                 description: The birth year of the character
 *                 example: 19BBY
 *               gender:
 *                 type: string
 *                 description: The gender of the character
 *                 example: male
 *               homeworld:
 *                 type: string
 *                 description: The homeworld of the character
 *                 example: tatooine
 *               films:
 *                 type: array
 *                 description: The films of the character
 *                 example: [a new hope]   
 *     responses:
 *       200:
 *         description: The character
 *         content:
 *           application/json:
 *             schema:
 *               type: object   
 *               $ref: '#/components/schemas/Character'
 *       500:
 *         description: Internal server error
 */

module.exports = router;
