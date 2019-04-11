const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: "780684121983-2t7b0erkmj55uk5l6vnc9v8qdd93g4l3.apps.googleusercontent.com",
      clientSecret: "S2VRNHlaDjm05vS1ZzbX2OFX",
      callbackURL: "http://localhost:3003/users/google/callback",
      passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
      done(null, profile);
      //   User.findOrCreate({ googleId: profile.id }, function(err, user) {
      //     return done(err, user);
      //   });
    }
  )
);
