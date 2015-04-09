Notifications = new Meteor.Collection('notifications');

Notifications.allow({
    update: function(userId, doc, fieldNames) {
        return doc && doc.userId === userId; // Only allow users to update their own notifications
    }
});