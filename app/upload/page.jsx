"use client";
import { CldUploadWidget } from "next-cloudinary";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
            <h1 className="text-4xl font-bold text-white mb-8">Upload Your Image</h1>
            <CldUploadWidget
                uploadPreset="better_version"
                options={{
                    maxFiles: 1,
                    maxFileSize: 2000000, // 2MB
                    cropping: true,
                    croppingAspectRatio: 1,
                }}
            >
                {({ open }) => (
                    <button
                        onClick={() => open()} // ✅ prevent event object from being passed
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                    >
                        Upload Image
                    </button>
                )}
            </CldUploadWidget>
        </div>
    );
}
