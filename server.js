const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
//Passport Config
//require("./config/passport")(passport);

const app = express();

const users = require("./routes/api/users");
// const profile = require("./routes/api/profile");
// const post = require("./routes/api/post");
// const usertypes = require("./routes/api/usertype");
// const restaurants = require("./routes/api/restaurants");
// const dishes = require("./routes/api/dishes");
// const dishComments = require("./routes/api/dishComments");
// const restaurantComments = require("./routes/api/restaurantComments");
// const categories = require("./routes/api/categories");
// const promos = require("./routes/api/promo");
// const polls = require("./routes/api/polls");
// const dashboard = require("./routes/api/dashboard");
// const questions = require("./routes/api/questions");

//Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//files
// app.use("/uploads", express.static("uploads"));

//connect to Mongo DB
mongoose
   .connect(db)
   .then(() => console.log("MongoDB Connected"))
   .catch(err => console.log(err));

//passport middleware
//app.use(passport.initialize());


//Use Routes
app.use("/api/users", users);
// app.use("/api/profile", profile);
// app.use("/api/post", post);
// app.use("/api/usertype", usertypes);
// app.use("/api/restaurants", restaurants);
// app.use("/api/dishes", dishes);
// app.use("/api/dishComments", dishComments);
// app.use("/api/restaurantComments", restaurantComments);
// app.use("/api/categories", categories);
// app.use("/api/promos", promos);
// app.use("/api/polls", polls);
// app.use("/api/dashboard", dashboard);
// app.use("/api/questions", questions);

// // server static assets if in production
// if (process.env.NODE_ENV === "production") {
//    //set a statuc folder
//    app.use(express.static("./client/build"));

//    app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//    });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
