const mongoose = require("mongoose");
const Joi = require("joi");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

function validateRun(run) {
    const schema = Joi.object({
        noClicks: Joi.number(),
        ogChar: Joi.string(),
        favPic: Joi.number(),
        ogAge: Joi.number()
    });

    return schema.validate(run);
}

app.get("/runs", (req, res) => {
    res.send(getRuns());    
});

app.post("/runs", (req, res) => {
    const result = validateRun(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
    }

    res.send(createRun(req.body));
});

app.listen(3000, () => {console.log("Server started...")});


/*    MONGODB Functions     */

mongoose.connect("mongodb://localhost/quiz_runs")
    .then(()=> {console.log("Connected to DB...")})
    .catch(()=> {console.log("Failed to connect to DB...")});

const dbSchema = mongoose.Schema({
    noClicks: Number,
    ogChar: String,
    favPic: Number,
    ogAge: Number
}); 

const Run = mongoose.model("Run", dbSchema);

async function createRun(run) {
    const new_run = new Run({
        noClicks: run.noClicks,
        ogChar: run.ogChar,
        favPic: run.favPic,
        ogAge: run.ogAge
    });

    try {
        const result = await new_run.save();
        return result;
    }
    catch(error) {
        console.log(error);
        return {};
    }
}

async function getRuns() {
    try {
        const runs = await Run.find();
        return runs;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}
