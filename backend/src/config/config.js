module.exports = {
  port: process.env.PORT || 3003,
  SECRET: "secret key",
  mongoURI:
    "mongodb://Miktor:mitia2004$@learningmongo-shard-00-00-p4m1u.mongodb.net:27017,learningmongo-shard-00-01-p4m1u.mongodb.net:27017,learningmongo-shard-00-02-p4m1u.mongodb.net:27017/test?ssl=true&replicaSet=LearningMongo-shard-0&authSource=admin&retryWrites=true"
};