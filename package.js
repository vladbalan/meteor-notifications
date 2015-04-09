Package.describe({
  name: 'vladbalan:notifications',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap styled notifications for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/vladbalan/meteor-notifications.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.1');
  api.use('templating', 'client');
  api.addFiles('server/publications/notifications.js', 'server');
  api.addFiles([
    'lib/collections/notifications.js'
    , 'notifications.js'
  ]);
  api.addFiles([
    'client/views/notifications/notifications.html'
    , 'client/views/notifications/notifications.js'
    , 'client/subscriptions/notifications.js'
  ], 'client');
  api.export('Notifications');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('vladbalan:notifications');
//   api.addFiles('notifications-tests.js');
// });
