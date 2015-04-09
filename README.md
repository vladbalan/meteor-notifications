# Bootstrap styled notifications for Meteor

## Version
0.1.1

## Installation
`meteor add vladbalan:notifications`

## Use
### Creating notifications
Trigger a notification by adding it to the Notifications collection
 ```
    Notifications.upsert({
        // For example, if you want to alert the user when he receives
        // a new message, you should use the message's _id property
        docId: doc._id
    }
    , {
        // userId is required in order for the user to see the alert
        userId: doc.userId
        // The same as above
        , docId: doc._id
        // Click a notification to mark it as 'read'
        , read: false
        // Notification text
        , text: '<strong>Alert!</strong> ' + doc.sender + ' has sent you a message!'
        // Notification link path
        , path: 'path/to/message'
    });
 ```
 
### Showing notifications
Include the `{{> Notifications[ path="a/default/path"][ text="Default notification text"][ label="Click here for notifications!"]}}` template inside your menu bar to display alerts

- `path` is the default path for a notification if it's not stored in the collection
- `text` is the default notification text for notifications with no `text` property
- `label` replaces the bell icon with your custom text