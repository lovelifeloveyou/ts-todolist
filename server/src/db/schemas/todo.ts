import { Document, Schema, SchemaTypes } from 'mongoose'
import { ITodo } from '../../interface'

export const TodoSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "todo"
  },
  content: SchemaTypes.String,
  status: SchemaTypes.Boolean
})

export interface ITodoModel extends ITodo, Document {}