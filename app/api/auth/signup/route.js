import User from "@/models/users";
import { connectToDB } from "@/utils/database";
import bcrypt from "bcrypt"


export const POST = async (req) => {
    const user = await req.json()
    const {username, password, name, email} = user
    console.log(user)

    
    try {
        await connectToDB()

        const user_name = await User.findOne({username: username.toLowerCase()});
        const user_email = await User.findOne({email: email.toLowerCase()});

        if (user_name) {
            const message = 'this user already exists'
            console.log(message)
            return new Response(JSON.stringify(message), {status: 302})
        }
        else if (user_email) {
            const message = 'This email already exists'
            console.log(message)
            return new Response(JSON.stringify(message), {status: 303})
        }
        else {
           const saltRounds = 10
            const hashed_password = await bcrypt.hash(password, saltRounds)
            const profile = `${process.env.SITE_URL}/u/@${username}`

           
           const  newUser = new User({
                    name,
                    username,
                    email,
                    hashed_password,
                    profile,
                });
            const create = await newUser.save()
            console.log("it creted here",create)

             return new Response(JSON.stringify({message: 'User created successfully'}), {status:200})
        }
    } catch (error) {
        console.log('create user', error)
        return new Response(JSON.stringify(error), {status: 500})
    }
}