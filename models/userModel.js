const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    isAdmin: false
  },
  {
    id: 2,
    name: "Johnny Dollar",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    isAdmin: true
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    isAdmin: false
  },
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
  createuser: (profile) => {
    let new_user = {'id': profile.id, 'name':  profile.name}
    database.push(new_user)
  },
  isAdmin: (id) =>{
    const user = database.find((user) => user.id === id)
    if(user.status === "admin"){
      return true
    }
    return null
  }
};

module.exports = { database, userModel };
