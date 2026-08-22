const mongooose=require("mongoose")
const userSchema=new mongooose.Schema(
  {
    first: {
      type: String,
      required: true
    },

    last: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password_hash: {
      type: String,
      required: true,
    },

    profile_photo_url: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);


module.exports=mongooose.model("User",userSchema)