import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
    try {

        const filePath = path.join(process.cwd(), "data.json");
        const fileContents = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(fileContents);

        return NextResponse.json(data); 
    } catch (error) {
        console.error("Error reading data.json:", error);
        return NextResponse.json(
            { message: "Failed to load data" },
            { status: 500 } 
        );
    }
}
