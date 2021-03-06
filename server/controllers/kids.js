/* eslint no-console: 0 */

const Kid = require('../models/kids');

exports.getAllKids = async function (req, res) {
  try {
    const { parentId } = req.params;
    const kids = await Kid.find({ parentId });
    res.status(200);
    res.send(kids);
  } catch (error) {
    console.log('error: ', error);
    res.status(500);
  }
};

exports.createKid = async function (req, res) {
  try {
    const { parentId } = req.params;
    const kid = req.body;
    kid.parentId = parentId;
    const newKid = await Kid.create(kid);
    res.status(201);
    res.send(newKid);
  } catch (error) {
    console.log('error: ', error);
    res.status(500);
  }
};

exports.editKid = async function (req, res) {};

exports.deleteKid = async function (req, res) {};
