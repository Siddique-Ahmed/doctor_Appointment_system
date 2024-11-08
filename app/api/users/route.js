import connectDB from "@/lib/connectMongoDB";
import { UserModel } from "@/lib/models/UsersModel";

export async function POST(request) {
  await connectDB();
  try {
    const obj = await request.json();

    let newUser = await new UserModel({ ...obj });

    newUser = await newUser.save();

    return Response.json({
      error: false,
      user: newUser,
      msg: "User Registered Successfully",
    },{status: 201});
  } catch (e) {
    return Response.json({
      error: true,
      msg: "Something Went Wrong",
    },{status: 400});
  }
}

export async function GET(request) {
  await connectDB()
  const users = await UserModel.find()
  return Response.json({
    error: false,
    users,
    msg: "User fetched Successfully",
  },{status: 200});
}

export async function PUT(request) {}

export async function DELETE(request) {}
