// TODO: add tests
Tinytest.add('notifications - basic', function (test) {
    notifications = Notifications.find({}).forEach(function (doc) {
      test.equal(true, doc.read);
    });
});
