var SuperUser = {
  _id: 1323,
  email: "h@h.com",
  userId: 12313,
  startTrial: function () {
    return "started";
  },
  getCoupon: function (couponName, value) {
    return 10;
  },
};
SuperUser.email = "superuser@gmail.com";
//SuperUser._id = 33 //Cannot assign read-only properties
