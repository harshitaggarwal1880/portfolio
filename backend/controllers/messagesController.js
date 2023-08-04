const Message = require("../Model/messageModel")

module.exports.addmsg = async (req, res, next) =>{
    try {
        const { from , to, message } = req.body;
        console.log(req.body)
        const data = await Message.create({
            message: {
                text: message,
            },
            users: [from, to],
            sender: from,
        });
        if(data){
            return res.json({msg:"Message added successfully"});
        }
        else{
            return res.json({msg:"Failed to add message to the database"});
        }
    } catch (error) {
        next(error);
    }
}

module.exports.getallmsg = async (req, res, next) =>{
    try {
        const { from , to } = req.body;
        const messages = await Message.find({
            users: {
                $all : [from, to],
            },
        }).sort({createdAt: 1});
        const projectMessages = messages.map((msg)=>{
            return {
                fromSelf : msg.sender.toString() === from,
                message: msg.message.text,
            };
        })

        return res.json(projectMessages);

    } catch (error) {
        next(error);
    }
}


module.exports.allusers = async (req, res, next) =>{
    try {
        const allusers = await Message.find({ users: { $in: [req.params.id] } }).select([
            "users"
        ])
        const unique_users = new Set();
        
        allusers.forEach((user)=>{
            if(user.users[0]!=req.params.id){
                unique_users.add(user.users[0]);
            }
            else{
                unique_users.add(user.users[1]);
            }
        })
        
        const users = [... unique_users]
        
        return res.json(users)

    } catch (error) {
        next(error)
    }
}