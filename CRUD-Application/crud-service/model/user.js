import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const connection = mongoose.connection;
const AutoIncrement = AutoIncrementFactory(mongoose);

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String
});

// Apply auto-increment plugin to the schema
userSchema.plugin(AutoIncrement, { inc_field: 'id' });

const User = mongoose.model('user', userSchema);

export default User;
