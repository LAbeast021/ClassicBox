const mongoose = require('mongoose');

// NEW VERSION OF MONGOOSE ALREADY ASSUMES ALL THE FOLLOWIN  }}}}} IF THERE IS AN ERROR CONNECTING TO DATABASE {{{{{{{{{}}}}}}}}}
  // useNewUrlParser , useUnifiedTopology , useFindAndModify , and useCreateIndex are no longer supported options
  // . Mongoose 6 always behaves as if useNewUrlParser , useUnifiedTopology , and useCreateIndex are true , and useFindAndModify is false .
  // useNewUrlParser: true,
  // useCreateIndex: true,
  // useUnifiedTopology: true
// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// mongoose.connect(process.env.DATABASE_URL);
//   }); \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/


// CONNECTING TO DATABASE AND HANDLING ANY INITIAL ERRORS //////////
mongoose.connect(process.env.DATABASE_URL).catch(error => handleError(error));

 // TO CHECK WE ARE CONNECTED AND WHERE WE ARE CONNECTED TO //////////
var db = mongoose.connection;
db.on('connected', function (err) {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

// TO HANDLE ERRORS DURING THE RUNTIME //////////
db.on('error', err => {
    logError(err);
});

