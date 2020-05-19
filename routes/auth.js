const express = require("express");
const auth = require("../config/auth");
const db = require("../models");

const router = express.Router();

router.post("/api/login", (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then((dbUser) => res.json(dbUser))
    .catch((err) => res.status(400).json(err));
});

router.post("/api/signup", (req, res) => {
  db.User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
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

router.delete("/api/delete_user_favorite/:id", (req, res) => {
  db.User.favorites({ _id: req.params.id }.remove(), (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
