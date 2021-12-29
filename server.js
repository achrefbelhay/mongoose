const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Person = require("./Models/Person");
mongoose.connect(
  "mongodb://localhost/contactDB",
  () => {
    console.log("Database connected successifully");
  },
  () => {
    console.error("Database connexion failed");
  }
);

const run = async () => {
  // create new personne
  /*
  try {
    const person = await Person.create({
      name: "wael",
      age: 32,
      favoriteFoods: ["Burritos", "Pizza"],
    });
    console.log(person);
  } catch (e) {
    console.log(e.message);
  }
*/
  // find personne
  /*
  try {
    const person = await Person.find({
      name: "monir",
    });
    console.log(person);
  } catch (e) {
    console.log(e.message);
  }
*/
  //findOne person
  /*
  try {
    const person = await Person.findOne({
      name: "monir",
    });
    console.log(person);
  } catch (e) {
    console.log(e.message);
  }
*/

  //find by ID
  // try {
  //   const person = await Person.findById("61c73a2abedf8e3ea3dd7e91");
  //   console.log(person);
  // } catch (e) {
  //   console.log(e.message);
  // }
  // findOne and update push
  // try {
  //   const person = await Person.findOneAndUpdate(
  //     { id: "61c73a2abedf8e3ea3dd7e91" },
  //     { $push: { favoriteFoods: "Humberger" } }
  //   );
  //   console.log(person);
  // } catch (e) {
  //   console.log(e.message);
  // }
  // FindOne with name and update age
  // try {
  //   const person = await Person.findOneAndUpdate(
  //     { name: "achref" },
  //     { $set: { age: 27 } },
  //     { new: true }
  //   );
  //   console.log(person);
  // } catch (e) {
  //   console.log(e.message);
  // }
  // findbyId and delete person
  /*
  try {
    const person = await Person.findByIdAndRemove("61c73a2abedf8e3ea3dd7e91");
    console.log(person);
  } catch (e) {
    console.log(e.message);
  }
  */
  //delete all persons
  /*
  try {
    const person = await Person.remove({
      name: "monir",
    });
    console.log(person);
  } catch (e) {
    console.log(e.message);
  }
  */
  //research result
  try {
    const person = await Person.find({
      favoriteFoods: "Burritos",
    })
      .sort("name")
      .limit(2)
      .select(["name", "favoriteFoods"])
      .exec();
    console.log(person);
  } catch (e) {
    console.log(e.message);
  }
};

run();
app.listen(4000, () => {
  console.log("server is runnig on port 4000");
});
