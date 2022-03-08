let todo_list = [
    {
        id:0,
        title: 'Finish this website',
        description: 'Long Description here',
    },
    {
        id:1,
        title: 'Make slides for Software Saturdays',
        description: 'Long Description here',
    },
    {
        id:2,
        title: 'Teach VueJS',
        description: 'Long Description here',
    }
];
let nxtTodoID = 3;

let done_list = [
    {
        id:0,
        title: 'Find some attendees',
        description: 'Long Description here',
    },
];
let nxtDoneID = 1;

//===========================================

function add_todo(title, description) {
    todo_list.push({
        id: nxtTodoID,
        title: title,
        description: description,
    });
    nxtTodoID++;
}

function get_todo(id) {
    for(let index in todo_list) {
        if(todo_list[index].id == id) {
            return todo_list[index];
        }
    }
}

function delete_todo(id) {
    for(let index in todo_list) {
        if(todo_list[index].id == id) {
            todo_list.splice(index, 1);
            break;
        }
    }
}

function edit_todo(id, title, description) {
    for(let index in todo_list) {
        if(todo_list[index].id == id) {
            todo_list.title = title;
            todo_list.description = description;
            break;
        }
    }
}

//============================================

function delete_done(id) {
    for(let index in done_list) {
        if(done_list[index].id == id) {
            done_list.splice(index, 1);
            break;
        }
    }
}

function add_done(title, description) {
    done_list.push({
        id: nxtDoneID,
        title: title,
        description: description,
    });
    nxtDoneID++;
}

function get_done(id) {
    for(let index in done_list) {
        if(done_list[index].id == id) {
            return done_list[index];
        }
    }
}

export { todo_list, done_list, add_todo, delete_todo, edit_todo, get_todo, delete_done, add_done, get_done };