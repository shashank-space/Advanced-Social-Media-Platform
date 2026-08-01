import User from "../models/User.js";

// Get Logged-in User
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Profile
export const updateProfile = async (req, res) => {

  try {

    const { username, bio } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success:false,
        message:"User not found"
      });
    }

    if(username) user.username=username;
    if(bio) user.bio=bio;

    await user.save();

    res.json({
      success:true,
      user
    });

  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};

// Follow User
export const followUser = async (req,res)=>{

try{

const user=await User.findById(req.user.id);

const target=await User.findById(req.params.id);

if(!target){

return res.status(404).json({
success:false,
message:"User not found"
});

}

if(!user.following.includes(target._id)){

user.following.push(target._id);

target.followers.push(user._id);

await user.save();
await target.save();

}

res.json({

success:true,
message:"User followed"

});

}catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};

// Unfollow User
export const unfollowUser=async(req,res)=>{

try{

const user=await User.findById(req.user.id);

const target=await User.findById(req.params.id);

user.following=user.following.filter(
id=>id.toString()!==target._id.toString()
);

target.followers=target.followers.filter(
id=>id.toString()!==user._id.toString()
);

await user.save();
await target.save();

res.json({

success:true,
message:"User unfollowed"

});

}catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};