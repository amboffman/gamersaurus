const express = require("express");
const db = require("../models");
const isAuthenticated = require("../config/isAuthenticated");

const router = express.Router();

// use isAuthenticated middleware to protect this route
router.get("/api/user/:id", isAuthenticated, (req, res) => {
  db.User.findById(req.params.id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

router.put("/api/new_user_favorite/:id", (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    { $push: { favorites: req.body } },
    (error) => {
      if (error) {
        res.send(error);
      } else {
        res.end();
      }
    }
  );
});

router.delete("/api/delete_user_favorite/:id/:gameId", (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    { $pull: { favorites: { id: req.params.gameId } } },
    (error) => {
      if (error) {
        res.send(error);
      } else {
        res.end();
      }
    }
  );
});

router.get("/api/share_user_favorites/:userName", (req, res) => {
  const userName = req.params.userName;
  db.User.find({ username: userName })
    .then((data) => {
      if (data) {
        res.json(data[0].favorites);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
