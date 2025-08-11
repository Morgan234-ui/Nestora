import { readFile, writeFile } from 'fs/promises'

export const POST = async (req) => {
    const filePath = './lib/databaseduplicate/listings.json'
    const userData = await req.json()

    try {
        const user = await readFile(filePath, 'utf-8')

        if (user) {    
            const data = JSON.parse(user)
            data.user.push(userData)
            const create = await writeFile(filePath, JSON.stringify(data, null, 2))
            console.log(create, data)

             if (create == undefined) {
                return new Response(JSON.stringify({ message: "item update successfully" }), { status: 200 })
            }
            else {
                return new Response(JSON.stringify({ message: "Error while updating, check server listings" }), { status: 502 })
            }
        }
        else {
            const data = {
                user: [
                    userData
                ]
            }
            const create = await writeFile(filePath, JSON.stringify(data, null, 2))
            if (create == undefined) {
                return new Response(JSON.stringify({message: "item created succesfully"}), {status:200})
            }
            else {
                return new Response(JSON.stringify({message: "Error while creating, check create server listings"}), {status: 502})
            }
        }
    } catch (error) {
        console.log("create new profile", error)
        return new Response(JSON.stringify(error), {status: 502})
    }
}