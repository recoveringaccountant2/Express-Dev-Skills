
const skills = [
    {id: 100000, skill: 'HTML', done: true},
    {id: 100001, skill: 'CSS', done: true},
    {id: 100002, skill: 'JavaScript', done: true},
    {id: 100003, skill: 'Node.js', done: false},
    {id: 100004, skill: 'Express', done: false},
    {id: 100005, skill: 'Expert napper', done: true},
    {id: 100006, skill: 'Expert facial hair grower', done: false},
    {id: 100007, skill: 'Docker', done: false},
    {id: 100008, skill: 'SQL', done: false},
    {id: 100009, skill: 'React', done: false},
    {id: 100010, skill: 'Wix interface', done: false},    
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
  }
  
  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }
  
  function getAll() {
    return skills;
  }