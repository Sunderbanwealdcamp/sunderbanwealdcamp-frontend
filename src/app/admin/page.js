'use client'
import React from "react";
import { storage } from "../../../firebase";
import { useEffect, useState } from "react";

export default function Admin() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        } else {
            setFile(null);
            setError("Please select a file");
        }
    };

    const handleUpload = () => {
        if (file) {
            const uploadTask = storage.ref(`uploads/${file.name}`).put(file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Progress function
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    console.log(progress);
                },
                (error) => {
                    // Error function
                    setError(error.message);
                },
                () => {
                    // Complete function
                    storage
                        .ref("uploads")
                        .child(file.name)
                        .getDownloadURL()
                        .then((url) => {
                            console.log(url);
                            // Do something with the download URL
                        });
                }
            );
        } else {
            setError("Please select a file");
        }
    };
    return (
        <div className="about-page">
            <div className="wrapper">
                <h1>About Us</h1>
                <div>
                    <input type="file" onChange={handleChange} />
                    <button onClick={handleUpload}>Upload</button>
                    {error && <div>{error}</div>}
                </div>
            </div>
        </div>
    )
}