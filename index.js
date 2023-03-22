const mongoose = require("mongoose");
const photos = require("./data.json");

mongoose.connect("mongodb://127.0.0.1:27017/photos");

const Photo = mongoose.model("Photo", {
  albumId: {
    type: "Number",
  },
  id: {
    type: "Number",
  },
  title: {
    type: "String",
  },
  url: {
    type: "String",
  },
  thumbnailUrl: {
    type: "String",
  },
});

for (let photo of photos) {
  new Photo(photo)
    .save()
    .then((savedPhoto) => {
      console.log("successfully saved: ", savedPhoto);
    })
    .catch((err) => {
      console.log(err);
    });
}
