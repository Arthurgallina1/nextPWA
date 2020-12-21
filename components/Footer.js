import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const rootStyle = {
    width: "100%",
    position: "fixed",
    left: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "space-evenly",
    padding: "0 0 3px",
    marginBottom: 10,
};

const activeStyle = {
    color: "red",
};
const navigation = [
    { path: "/", name: "Home" },
    { path: "/productlist", name: "Loja" },
    { path: "/outro", name: "Outro" },
];

export default function SimpleBottomNavigation() {
    const router = useRouter();
    const path = router.pathname;

    const spanStyle = (current) => {
        if (path == current.path) {
            return {
                color: "red",
            };
        }
        return {
            color: "gray",
        };
    };

    return (
        <div style={rootStyle}>
            {navigation.map((item) => (
                <Link href={item.path} key={item.name}>
                    <span style={spanStyle(item)}>{item.name}</span>
                </Link>
            ))}
        </div>
    );
}
