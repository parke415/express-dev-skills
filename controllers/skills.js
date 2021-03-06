const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function index(req, res) {
  res.render('skills/index', {skills: Skill.getAll()});
}

function show(req, res) {
  res.render('skills/show', {skill: Skill.getOne(req.params.idx), id: parseInt(req.params.idx)});
}

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.idx);
  res.redirect('/skills');
}

function edit(req, res) {
  res.render('skills/edit', {skill: Skill.getOne(req.params.idx), id: parseInt(req.params.idx)});
}

function update(req, res) {
  Skill.update(req.params.idx, req.body);
  res.redirect(`/skills/${req.params.idx}`);
}