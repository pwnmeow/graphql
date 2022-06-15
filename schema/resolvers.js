const { UserList,MovieList } = require('../Fakedata')
const _ = require('lodash')
const resolvers = {
    Query: {
        users(){
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },

        movies(){
            return MovieList;
        },
        movie: (parent, args) =>{
            const name = args.name;
            const movie = _.find(MovieList, {name: name});
            return movie;
        }


    },

    User: {
        favMovies:() => {
            return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010 )
        }
    },

    Mutation: {
        createUser: (parent,args) => {
            const user = args.input
            console.log(user);
            const lastId = UserList[UserList.length - 1].id
            user.id = lastId+1
            UserList.push(user);
            return user;
        },
        UpdateUsername: (parent,args) => {
            const oldusername = args.input.username
            const newusername = args.input.newusername
            console.log(oldusername,newusername)
        }
    }
    
}

module.exports = { resolvers }