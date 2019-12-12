//
// Copyright (c) 2016-2019 Cisco Systems
// Licensed under the MIT License 
//

/* 
 * a Webex Teams webhook that leverages a simple library (batteries included)
 *
 */

var SparkBot = require("../sparkbot/webhook");

// Starts your Webhook with default configuration 
var bot = new SparkBot();

// Create webhook
const publicURL = process.env.PUBLIC_URL || "https://d3fc85fe.ngrok.io";
bot.secret = process.env.WEBHOOK_SECRET || "not THAT secret";
bot.createOrUpdateWebhook("register-cards-bot", publicURL, "attachmentActions", "created", null, bot.secret, function (err, webhook) {
   if (err) {
      console.error("could not create Webhook, err: " + err);

      // Fail fast
      process.exit(1);
   }

   console.log("webhook successfully checked, with id: " + webhook.id);
});
 
bot.onEvent("all", "all", function(trigger) {
  
    //
    // YOUR CODE HERE
    //
    console.log("EVENT: " + trigger.resource + "/" + trigger.event + ", with data id: " + trigger.data.id + ", triggered by person id:" + trigger.actorId);
  
});

