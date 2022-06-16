/* eslint-disable no-useless-escape */
const subscribeData = [
  {
    label: 'Email',
    name: 'email',
    rules: [
      {
        type: 'email', 
        message: 'Please write a valid email'
      },
      {
        required: true,
        message: 'Please write your email'
      }
    ],
    inputType: 'email'
  },
  {
    label: 'First Name',
    name: 'firstName',
    rules: [
      {
        pattern: /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/,
        message: 'This is not a proper name'
      },
      {
        required: true,
        message: 'Please write your first name'
      }
    ],
    inputType: 'text'
  },
  {
    label: 'Last Name',
    name: 'lastName',
    rules: [
      {
        pattern: /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/,
        message: 'This is not a proper name'
      },
      {
        required: true,
        message: 'Please write your last name'
      }
    ],
    inputType: 'text'
  },
  {
    label: 'Phone Number',
    name: 'phone',
    rules: [
      {
        pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        message: 'Please write a proper phone number'
      },
      {
        required: true,
        message: 'Please write your phone number'
      }
    ],
    inputType: 'phone'
  },
];

export default subscribeData;