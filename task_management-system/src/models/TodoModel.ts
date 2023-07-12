import {types} from "mobx-state-tree"

const TodoModel=types.model('todo',{
    id:types.identifier,
    title:types.string,
    description:types.string,
    status:types.string
})