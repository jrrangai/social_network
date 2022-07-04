const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThought).post(addThought);

router
  .route("/:thougtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router.route("/:thoughtId/:reactions").put(addReaction).delete(removeReaction);

module.exports = router;
