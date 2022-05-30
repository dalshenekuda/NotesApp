const Note = require('../models/noteModel')

class noteController {

    async create(req, res) {
        try {
            let {title, description} = req.body.note
            const note = new Note({
                title: title,
                description: description,
            });
            const createdNote = await note.save();

            return res.json({message: 'Note has created', note: createdNote})
        } catch (e) {
            res.status(400).json({message: 'Something went wrong'})
        }
    }

    async list(req, res) {
        try {
            const noteList = await Note.find()
            return res.json({message: 'List of Notes', noteList: noteList})
        } catch (e) {
            res.status(400).json({message: 'Something went wrong'})
        }
    }

    async delete(req, res) {
        const note = await Note.findById(req.params.id);
        if (note) {
            const deleteNote = await note.remove();
            console.log('deleted')
            // i dont use deleteNote in client but it maybe useful for some tasks
            res.send({message: 'Note Deleted', note: deleteNote});
        } else {
            res.status(404).send({message: 'Note Not Found'});
        }
    }

    async complete(req, res) {
        const note = await Note.findById(req.params.id);
        if (note) {
            note.completed = true
            const completeNote = await note.save();
            // i dont use completeNote in client but it maybe useful for some tasks
            res.send({message: 'Note completed', note: completeNote});
        } else {
            res.status(404).send({message: 'Note Not Found'});
        }
    }
    async edit(req, res) {
        const note = await Note.findById(req.params.id);
        if (note) {
            note.title = req.body.note.title
            note.description = req.body.note.description
            const editedNote = await note.save();
            // i dont use editedNote in client but it maybe useful for some tasks
            res.send({message: 'Note found', note: editedNote});
        } else {
            res.status(404).send({message: 'Note Not Found'});
        }
    }

    async getNote(req, res) {
        const note = await Note.findById(req.params.id);
        if (note) {
            res.send({message: 'Note found', note: note});
        } else {
            res.status(404).send({message: 'Note Not Found'});
        }
    }

}

module.exports = new noteController()