const { Schema, model, models } = require("mongoose");

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El titulo es requerido'],
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'La descripción es requerida'],
        trim: true,
    }
},
    {
        timestamps: true
    })

    export default models.Task || model('Task',taskSchema)