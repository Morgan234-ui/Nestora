import User from "@/models/users";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
   const slug = await req.json()
   console.log(slug)

   try {
    await connectToDB()

    const user = await User.findOne({username: slug})
//     we want the console to show the specific data from the data base 'mongodb'
    .select('email username name')

    if(user) {
         return new Response(JSON.stringify(user), {status: 200})
    } else {
         return new Response(JSON.stringify({message: "No User"}), {status: 404})
    }
   } catch (error) {
     return new Response(JSON.stringify(error), {status: 500})
   }
}