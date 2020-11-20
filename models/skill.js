module.exports = {
  getAll,
  getOne
}

const skills = [
  {skill: 'HTML', level: '7.5/10', experience: '5 weeks'},
  {skill: 'CSS', level: '4.5/10', experience: '5 weeks'},
  {skill: 'JavaScript', level: '9.5/10', experience: '5 weeks'},
  {skill: 'jQuery', level: '0.5/10', experience: '1 week'},
  {skill: 'Express', level: '0.5/10', experience: '3 days'},
];

function getAll() {
  return skills;
}

function getOne(idx) {
  return skills[idx];
}