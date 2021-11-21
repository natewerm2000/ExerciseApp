/* B"H
*/
const Users = require( "./users");
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('posts');
module.exports.collection = collection;

const list = [
    { 
        src: "https://cdn.kingsbox.com/assets/media/products/bars-plates/sets/X-104-1020--kids-home-gym-set--0.jpg",
        alt: "Placeholder image",
        activity: "Weight lifting related",
        caption: "New Gymset finally came in the mail #pumped",
        time: Date(),
        user_handle: "@llama",
        isPublic: true,
    },
    { 
        src: "https://www.bodybuilding.com/images/2016/june/arm-workouts-for-men-5-biceps-blasts-v2-1-700xh.jpg",
        alt: "Placeholder image",
        activity: "Motivation",
        caption: "We all need to reach our dreams, its what we live for. If there is no success then what is the point? btw that pic isnt me but I am going to look like that one day lol #success",
        time: Date(),
        user_handle: "@natewerm2000",
        isPublic: true,
    },
    { 
        src: "https://www.active.com/Assets/Running/580/New+England+Trail+Running+Guide/Northfield+Mountain+Trail.jpg",
        alt: "Placeholder image",
        activity: "Run",
        caption: "Ran 5 miles today! I feel such a great improvement to my stamina its crazy what a run can do to you.",
        time: Date(),
        user_handle: "@jp",
        isPublic: true,
    },
    { 
        src: "https://cdn1.coachmag.co.uk/sites/coachmag/files/2019/07/aftershokz-aeropex-wireless-bluetooth-headphones-male.jpg",
        alt: "Placeholder image",
        activity: "Run",
        caption: "Running with music makes the workout so much enjoyable!",
        time: Date(),
        user_handle: "@rapper",
        isPublic: true,
    },

    { 
        src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/enduro-mountain-biking-in-a-pristine-forest-royalty-free-image-1603405657.jpg?crop=1.00xw:0.753xh;0,0.247xh&resize=1200:*",
        alt: "Placeholder image",
        activity: "Biking",
        caption: "Biked the mountains this moring, starting the day feeling #energized.",
        time: Date(),
        user_handle: "@meme",
        isPublic: true,
    },
    
];

const addOwnerPipeline = [
    {"$lookup" : {
        from: "users",
        localField: 'user_handle',
        foreignField: 'handle',
        as: 'user',
    }},
    {$unwind: "$user"},
    { $project: { "owner.password": 0}}
];

module.exports.GetAll = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}

module.exports.GetWall = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray();
}


module.exports.GetFeed_ = function GetFeed_(handle) {
    //  The "SQL" way to do things
    const query = Users.collection.aggregate([
        {$match: { handle }},
        {"$lookup" : {
            from: "posts",
            localField: 'following.handle',
            foreignField: 'user_handle',
            as: 'posts'
        }},
        {$unwind: '$posts'},
        {$replaceRoot: { newRoot: "$posts" } },
    ].concat(addOwnerPipeline));
    return query.toArray();

}

module.exports.GetFeed = async function (handle) {
    //  The "MongoDB" way to do things. (Should test with a large `following` array)
    const user = await Users.collection.findOne({ handle });
    if(!user){
        throw { code: 404, msg: 'No such user'};
    }
    const targets = user.following.filter(x=> x.isApproved).map(x=> x.handle).concat(handle)
    const query = collection.aggregate([
        {$match: { user_handle: {$in: targets} } },
     ].concat(addOwnerPipeline));
    return query.toArray();
}


module.exports.Get = function Get(post_id) { return collection.findOne({_id: new ObjectId(post_id) }); }

module.exports.Add = async function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
    post.time = Date();
    
    const response = await collection.insertOne(post);
    
    post.id = response.insertedId;

    return { ...post };
}
module.exports.Update = async function Update(post_id, post) {
    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(post_id) }, 
        { $set: post },
        { returnDocument: 'after'}
    );

    return results.value;
}
module.exports.Delete = async function Delete(post_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(post_id) })

    return results.value;
} 

module.exports.Search = q => collection.find({ caption: new RegExp(q,"i") }).toArray();

module.exports.Seed = async ()=>{
    for (const x of list) {
        await this.Add(x)
    }
}