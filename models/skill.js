const skills = [
  {skill: "HTML", level: "7.5/10", experience: "5 weeks"},
  {skill: "CSS", level: "4.5/10", experience: "5 weeks"},
  {idx: 2, skill: "JavaScript", level: "9.5/10", experience: "5 weeks"},
  {skill: "jQuery", level: "0.5/10", experience: "1 week"},
  {skill: "Express", level: "0.5/10", experience: "3 days"},
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
}

function getAll() {
  return skills;
}

function getOne(idx) {
  return skills[idx];
}

function create(skill) {
  if (!skill.skill) skill.skill = "n/a";
  if (!skill.level) skill.level = "n/a";
  if (!skill.experience) skill.experience = "n/a";
  skills.push(skill);
}

function deleteOne(idx) {
  skills.splice(idx, 1);
}

function update(idx, updatedSkill) {
  if (!updatedSkill.skill) updatedSkill.skill = "n/a";
  if (!updatedSkill.level) updatedSkill.level = "n/a";
  if (!updatedSkill.experience) updatedSkill.experience = "n/a";
  Object.assign(skills[idx], updatedSkill);
}