const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();
/**
 * @swagger
 * 
 * components:
 *  schemas:
 *   Planet:
 *    type: object
 *    properties:
 *     id:
 *      type: string
 *      description: The id of the planet
 *      example: 1
 *     name:
 *      type: string
 *      description: The name of the planet
 *      example: Tatooine
 *     rotation_period:
 *      type: string
 *      description: The rotation period of the planet
 *      example: 23
 *     orbital_period:
 *      type: string
 *      description: The orbital period of the planet
 *      example: 304
 *     diameter:
 *      type: string
 *      description: The diameter of the planet
 *      example: 10465
 *     climate:
 *      type: string
 *      description: The climate of the planet
 *      example: temperate
 *     gravity:
 *      type: string
 *      description: The gravity of the planet
 *      example: "1 standard"
 *     terrain:
 *      type: string
 *      description: The terrain of the planet
 *      example: desert
 *     surface_water:
 *      type: string
 *      description: The percentage of the planet surface that is water
 *      example: "100"
 *     residents:
 *      type: array
 *      description: Residents on the planet
 *      example: [Luke Skywalker, C-3PO]
 *     films:  
 *      type: array
 *      description: Films that have been shot on the planet
 *      example: [A New Hope, The Empire Strikes Back]
 * 
 */

/**
 * @swagger
 *    tags:
 *     name: Planets
 *     description: Operations about Star Wars planets  
 */
router.get("/", controllers.getPlanets);
/**
 * @swagger
 * /planets:
 *   get:
 *     summary: Get all planets
 *     description: Returns all planets
 *     tags: [Planets]
 *     responses:
 *       200:
 *         description: Array of planets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Planet'
 *       500:
 *         description: Internal server error
 * 
 */
router.get("/:id", controllers.getPlanetById);
/**
 * @swagger
 * /planets/{id}:
 *   get:
 *     summary: Get a planet by id
 *     description: Returns a planet by id
 *     tags: [Planets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *              type: string
 *         required: true
 *         description: ID of the planet to return
 *     responses:
 *       200:
 *         description: The planet
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Planet'
 *       404:
 *         description: Planet not found
 *       500:
 *         description: Internal server error
 */
router.post("/", middlewares.planetValidation, controllers.createPlanet);
/**
 * @swagger
 * /planets:
 *   post:
 *      summary: Create a planet
 *      description: Creates a planet
 *      tags: [Planets]
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: The name of the planet
 *                  example: Tatooine
 *                rotation_period:
 *                  type: string
 *                  description: The rotation period of the planet
 *                  example: 23
 *                orbital_period:
 *                  type: string
 *                  description: The orbital period of the planet
 *                  example: 304
 *                diameter:
 *                  type: string
 *                  description: The diameter of the planet
 *                  example: 10465
 *                climate:
 *                  type: string
 *                  description: The climate of the planet
 *                  example: temperate
 *                gravity:
 *                  type: string
 *                  description: The gravity of the planet
 *                  example: "1 standard"
 *                terrain:
 *                  type: string
 *                  description: The terrain of the planet
 *                  example: desert
 *                surface_water:
 *                  type: string
 *                  description: The percentage of the planet surface that is water
 *                  example: "100"
 *                residents:
 *                  type: array
 *                  description: Residents on the planet
 *                  example: [Luke Skywalker, C-3PO]
 *                films:  
 *                  type: array
 *                  description: Films that have been shot on the planet
 *                  example: [A New Hope, The Empire Strikes Back]
 *      responses:
 *        200:
 *          description: The planet
 *          content:
 *            application/json:
 *              schema:
 *                type: object   
 *                $ref: '#/components/schemas/Planet'
 *        500:
 *          description: Internal server error
 */
module.exports = router;
