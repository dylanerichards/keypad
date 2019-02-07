# Keypad Exercise

A Ruby on Rails + ReactJS application that returns all the words that can be formed from a given number sequence from a phone keypad.

## Live Demo

Find the app live at [http://thirtymadison-keypad.herokuapp.com/](http://thirtymadison-keypad.herokuapp.com/)

## Running the application locally

1. Clone this repository and `cd` into it.
2. Run `bundle` to install the Rails app dependencies.
3. Run `rake db create; rake db:migrate` to create the database
4. Start the Rails server on port 3001 by running `rails server -p 3001` in the project root.
5. Open another terminal window and `cd` into the `keypad-client` directory. Then run `npm install`.
6. After running `npm install`, run `yarn start` to start the front-end app on port 3000.