import mongoose from 'mongoose';
// import pkg from 'google-libphonenumber';
// const { PhoneNumberUtil } = pkg;
// const phoneUtil = PhoneNumberUtil.getInstance();

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      min: 5,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    state: {
      type: String,
      // required: [true, 'State is required'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
    },
    occupation: {
      type: String,
      required: [true, 'Occupation is required'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      // validate: {
      //   validator: function (v) {
      //     try {
      //       const number = phoneUtil.parse(v, this.country);
      //       return phoneUtil.isValidNumber(number);
      //     } catch (err) {
      //       return false;
      //     }
      //   },
      //   message: '{VALUE} is not a valid phone number!',
      // },
    },
    transactions: Array,
    role: {
      type: String,
      enum: ['user', 'admin', 'superadmin'],
      default: 'admin',
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
