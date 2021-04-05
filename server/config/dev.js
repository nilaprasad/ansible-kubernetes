module.exports = {
  googleClientID: '964808011168-29vqsooppd769hk90kjbjm5gld0glssb.apps.googleusercontent.com',
  googleClientSecret: 'KnH-rZC23z4fr2CN4ISK4srN',
  // mongoURI: 'mongodb://nila:LwNbKA3XikBDfLBT@cluster0-shard-00-00-gvcc5.mongodb.net:27017,cluster0-shard-00-01-gvcc5.mongodb.net:27017,cluster0-shard-00-02-gvcc5.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
  mongoURI: 'mongodb://Nila:Wrhug8Uf1sgNpwrt@blogster-k8s-shard-00-00-n5h0r.gcp.mongodb.net:27017,blogster-k8s-shard-00-01-n5h0r.gcp.mongodb.net:27017,blogster-k8s-shard-00-02-n5h0r.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Blogster-K8S-shard-0&authSource=admin&retryWrites=true&w=majority',
  cookieKey: '123123123',
  //redisUrl: 'redis://127.0.0.1:6379',
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT
};