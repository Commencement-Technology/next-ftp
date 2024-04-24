import Head from "next/head";

import {
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
    Card,
    Typography,
} from "@material-tailwind/react";
import React from "react";

export default function FilePermsDialog({ handleClick, fileName, permissionData, open }) {
    return (
        <>
            {/* Add The Modal Script */}
            <Head>
                <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js"></script>
            </Head>

            <Dialog size="xs" open={open} handler={handleClick}>
                <DialogHeader className="justify-between">
                    <IconButton
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={handleClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </DialogHeader>
                <DialogBody className="!px-5">
                    <div className="mb-6">
                        <Typography
                            variant="paragraph"
                            color="blue-gray"
                            className="py-3 font-semibold uppercase opacity-70"
                        >
                            Permissions for: {
                                fileName.length > 22 
                                ? fileName.slice(0, 20) + "..." : fileName  
                            }
                        </Typography>
                        <Card className="h-full w-full">
                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            Permission Name
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {permissionData.map(([k, v], index) => {
                                        return (
                                            <React.Fragment key={`${k}-${index}`}>
                                                <tr className="even:bg-blue-gray-50/50">
                                                    <td className="p-4">
                                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                                            {k.toUpperCase()}
                                                        </Typography>
                                                    </td>
                                                    <td className="p-4">
                                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                                            <b>
                                                                {v.toString()}
                                                            </b>
                                                        </Typography>
                                                    </td>
                                                </tr>
                                            </React.Fragment>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    )
}