const Query = require("../models/Query");

const addQuery = (req, res) => {
  res.render("pages/addQuery");
};

const createQuery = async (req, res) => {
  try {
    if (req.user) {
      req.body.createdBy = req.user.name;
    }
    await Query.create(req.body);
    req.session.pendingMessage = "The Inquiry was created.";
    console.log(req.body);
    res.redirect("/queries");
  } catch (err) {
    if (err.name === "ValidationError") {
      res.locals.message = Object.values(err.errors)
        .map((item) => item.message)
        .join(", ");
    } else {
      res.locals.message = "Something went wrong.";
    }
    res.render("pages/addQuery");
  }
};

const deleteQuery = async (req, res) => {
  try {
    const query = await Query.findByIdAndDelete(req.params.id, req.body);
    console.log("question was deleted");
    req.session.pendingMessage = "The inquiry was deleted";
    res.redirect("/queries");
  } catch (err) {
    if (err.name === "ValidationError") {
      res.locals.message = Object.values(err.errors)
        .map((item) => item.message)
        .join(", ");
    } else {
      res.locals.message = "Something went wrong.";
    }

    res.redirect("/queries");
  }
};

const editQuery = async (req, res) => {
  try {
    const query = await Query.findById(req.params.id);
    req.session.pendingMessage = "The inquiry was edited";
    console.log(query);
    res.render("pages/editQuery", { query });
  } catch (err) {
    req.session.pendingMessage = "Something went wrong";
    res.redirect("/queries");
  }
};

const updateQuery = async (req, res) => {
  // FIrst, you find the task being updated. Then you attempt to update it with the values from the body of the post request. Then, if that fails, you render the page again, passing the message and the task on the render call. If it succeeds, you give the user the success message and redirect to the tasks page.
  query = false;
  try {
    let messages = [];
    if (req.session.messages) {
      messages = req.session.messages;
      req.session.messages = [];
    }
    if (req.user.isAdmin) {
      query = await Query.findById(req.params.id);
      await Query.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
      });
    }
    query = await Query.findById(req.params.id);
    await Query.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    console.log(query);
    req.session.pendingMessage = "The inquiry was updated.";
    res.redirect("/queries");
  } catch (err) {
    if (err.name === "ValidationError") {
      res.locals.message = Object.values(err.errors)
        .map((item) => item.message)
        .join(", ");
    } else {
      res.locals.message = "User logged out.";
    }
    if (query) {
      res.render("pages/editQuery", { query });
    } else {
      req.session.pendingMessage = "Something went wrong. Try again";
      res.redirect("/queries");
    }
  }
};

const getQueries = async (req, res) => {
  try {
    //if iaAdmin
    if (req.user.isAdmin) {
      const queries = await Query.find();
      res.render("pages/queries", { queries, messages: [] });
    }
    const queries = await Query.find({ createdBy: req.user.name });

    if (queries) {
      res.render("pages/queries", { queries, messages: [] });
    }
  } catch (err) {
    res.render("pages/queries", { queries: [] });
  }
};

module.exports = {
  addQuery,
  updateQuery,
  deleteQuery,
  getQueries,
  createQuery,
  editQuery,
};
