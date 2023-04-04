const Task = require("../model/taskModel");

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params);
        if (!task) {
            return res.status(404).json("No task with id");
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const deleteTask =  async (req, res) => {
	try {
		//should check owner id also
		const task = await Task.findOneAndDelete({
			_id: req.params.id,
		});
		if (!task) {
			return res.status(404).send();
		}
		res.send(task);
	} catch (e) {
		res.send(e);
	}
};

const updateTask =  async (req, resp) => {
    const _id = req.params.id;
    try {
        const updatedTask = await Task.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        if (!updatedTask) {
            return resp.status(404).send();
        }
        resp.status(200).send(updatedTask);
    } catch (error) {
        resp.status(400).send(error);
    }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}

