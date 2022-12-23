const router = require("express").Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require("../../controller/thoughtController");
// This is an api to collect all this Get All and Post thoughts/reactions
router.route("/").get(getThoughts).post(createThought);
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);
router.route("/:thoughtId/reactions").post(createReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;