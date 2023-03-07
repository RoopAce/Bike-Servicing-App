const mongoose = require("mongoose");

// connection creation and creating a new db
mongoose.connect("mongodb://127.0.0.1:27017/roopace", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successfull...."))
    .catch((err) => console.log(err));

//schema
//A Mongoose schema defines the structure of the document,
//default values, validators, etc.,

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uppercase: false,
        trim: true
    },
    ctype: {
        type: String,
        required: true
    },
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//A Mongoose model is wrapper on the Mongoose schema.
//A Mongoose schema defines the structure of the document,
// default values, validators etc., whereas a Mongoose model
// provides an interface to the database for creating,
// querying, updating, deleting records, etc. 

//Collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//create document or insert

const createDocument = async () => {
    try {
        // const jsPlaylist = new Playlist({
        //     name: "javascript",
        //     ctype: "Front End",
        //     videos: 200,
        //     author: "RoopAce",
        //     active: true,
        // })

        // const mongoPlaylist = new Playlist({
        //     name: "MongoDB",
        //     ctype: "Database",
        //     videos: 20,
        //     author: "RoopAce",
        //     active: true,
        // })

        // const mongoosePlaylist = new Playlist({
        //     name: "Mongoose JS",
        //     ctype: "Database",
        //     videos: 4,
        //     author: "RoopAce",
        //     active: true,
        // })

        const expressPlaylist = new Playlist({
            name: "         ExpReSs JS                    ",
            ctype: "Back End",
            videos: 11,
            author: "RoopAce",
            active: true,
        })

        const result = await Playlist.insertMany([expressPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();

const getDocument = async () => {
    const result = await Playlist
        .find({ author: "RoopAce" })
        .select({ name: 1 })
        // .sort({name : -1});
        .countDocuments();
    //  .limit(1);
    console.log(result);
}
// getDocument();

//update the document
const updateDocument = async (_id) => {
    try {
        const result = await Playlist.updateOne({ _id }, {
            $set: {
                name: "Javascript"
            }
        });

        console.log(result);

    } catch (err) {
        console.log(err);
    }

}

// updateDocument("6400ad301c3d03d6b762be43");

// delete the document

const deleteDocument = async (_id) => {
    try {
        const result = await Playlist.findByIdAndDelete({ _id });
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
// deleteDocument("6400ae251c3d03d6b762be44")