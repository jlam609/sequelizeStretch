const db = require('./dbConfig');
const Sequelize = require('sequelize');
const {STRING, INTEGER, ENUM, BOOLEAN} = require('sequelize')


//YOUR CODE GOES HERE
const Recipe = db.define('recipe', {
    name:{
        type:STRING,
        defaultValue:'cereal',
        allowNull:false,
        validate:{
            function(){
                if(this.name === '') throw new Error('must not be empty')
            }
        }
    },
    cookTime:{
        type: INTEGER,
        validate:{
            customValidator(value){
                if (value < 1 || value > 60) throw new Error('out of range')
            }
        }
    },
    vegan:{
        type:BOOLEAN,
    },
    foodGroup:{
        type:ENUM,
        values: ['vegetable', 'meat', 'dairy', 'grain', 'fruit']
    }
})

//--------------------
module.exports = Recipe;
