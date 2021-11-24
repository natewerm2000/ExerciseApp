
const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('users');
module.exports.collection = collection;

const list = [
    { 
        firstName: 'Nathaniel',
        lastName: 'Alexander',
        handle: '@natewerm2000',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nate_Huffman.jpg/220px-Nate_Huffman.jpg',
        password: 'me',
        isAdmin: true,
        email: 'alexandn7@newpaltz.edu',
        following: [ { handle: '@llama', isApproved: true }, { handle: '@jp', isApproved: true },{ handle: '@rapper', isApproved: true }, ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },
    { 
        firstName: 'Josh',
        lastName: 'Polumbo',
        handle: '@jp',
        pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34c0ce00-4b2b-4113-ae46-282dc56aae1c/ddsp0g2-099e51de-2479-48b4-8226-87ffd2a00e6d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM0YzBjZTAwLTRiMmItNDExMy1hZTQ2LTI4MmRjNTZhYWUxY1wvZGRzcDBnMi0wOTllNTFkZS0yNDc5LTQ4YjQtODIyNi04N2ZmZDJhMDBlNmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X8Vy0corb6ErJP2XS0umXynUUIWY1xMgBHGvt47VfDw',
        password: 'gains',
        isAdmin: true,
        email: 
            'JPWheyProtein@newpaltz.edu',
        following: [ { handle: '@natewerm2000', isApproved: true }, ],
    },
    { 
        firstName: 'Carl',
        lastName: 'Wheezer',
        handle: '@llama',
        pic: 'https://steamuserimages-a.akamaihd.net/ugc/1770448465120811876/79B6C0FEFCBDB2F14E10B35A796EB4B4B0C47E39/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        password: 'palooza',
        isAdmin: true,
        email: 
            'llamaLover@newpaltz.edu'
        ,
        following: [ { handle: '@jp', isApproved: true }, ],
    },
    { 
        firstName: 'Kenya',
        lastName: 'East',
        handle: '@rapper',
        pic: 'https://i.pinimg.com/originals/13/10/05/131005c3af1d6778844117dc8d5a7d80.jpg',
        password: 'music',
        isAdmin: true,
        email: 
            'Kenya@newpaltz.edu'
        ,
        following: [ { handle: '@llama', isApproved: true }, ],
    },
    { 
        firstName: 'Joe',
        lastName: 'Mama',
        handle: '@meme',
        pic: 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F529%2F300%2Fcf3.jpg',
        password: 'lol',
        isAdmin: true,
        email: 
            'Joewho@newpaltz.edu'
        ,
        following: [ { handle: '@natewerm2000', isApproved: true }, ],
    },
    { 
        firstName: 'Peter',
        lastName: 'Griffin',
        handle: '@guyfam',
        pic: 'https://media.cnn.com/api/v1/images/stellar/prod/150108073920-peter-griffin-real-life.jpg?q=h_570,w_1024,x_0,y_0,c_crop/h_619,w_1100,c_lpad,b_rgb:061015/h_270,w_480',
        password: 'peterirl',
        isAdmin: true,
        email: 
            'peter@newpaltz.edu'
        ,
        following: [ { handle: '@natewerm2000', isApproved: true }, ],
    },
    
    

];

module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }

module.exports.Get = user_id => collection.findOne({_id: new ObjectId(user_id)}) 

module.exports.GetByHandle = (handle) => collection.findOne({ handle }).then(x=> ({ ...x, password: undefined }));

module.exports.Add = async function Add(user) {
    if(!user.firstName){
         return Promise.reject( { code: 422, msg: "First Name is required" } )
    }

    const hash = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)
    
        console.log({
            user, salt: process.env.SALT_ROUNDS, hash
        })
        
        user.password = hash;

        const user2 = await collection.insertOne(user);
        user._id = user2.insertedId;

        return { ...user, password: undefined };
}


module.exports.Update = async function Update(user_id, user) {

    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(user_id) }, 
        { $set: user },
        { returnDocument: 'after'}
    );
    console.log({ user_id, results });
        
    return { ...results.value, password: undefined };
}

module.exports.Delete = async function Delete(user_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(user_id) })

    return results.value;
}

module.exports.Login = async function Login(handle, password){
    console.log({ handle, password})
    const user = await collection.findOne({ handle });
    if(!user){
        return Promise.reject( { code: 401, msg: "Sorry there is no user with that handle" });
    }

    const result = await bcrypt.compare(password, user.password)
        
    if( ! result ){
        throw { code: 401, msg: "Wrong Password" } ;
    }
    
    const data = { ...user, password: undefined };
    
    return { user: data };

    
}

module.exports.Seed = async ()=>{
    for (const x of list) {
        await module.exports.Add(x)
    }
}