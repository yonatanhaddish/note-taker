const fs= require('fs');
const { createNewTask, validateTask } = require('../lib/db.js');
const db= require('../data/db.json');

jest.mock('fs');

test("create db object", () => {
    const newdb= createNewTask({title: "To do", text: "Workout"}, db);

    expect(newdb.title).toBe("To do");
    expect(newdb.text).toBe("Workout");
});

test("validate task property", () => {

    const db01= {
        title: "title01",
        text: "text01"
    };

    const db02= {
        title: "title02"
    };

    const result01= validateTask(db01);
    const result02= validateTask(db02);

    expect(result01).toBe(true);
    expect(result02).toBe(false);
});
