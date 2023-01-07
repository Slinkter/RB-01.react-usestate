import React, { memo, useEffect } from "react";

const Item = memo(({ user }) => {
    useEffect(() => {
        /* console.log("item render " + user.name); */
        return () => {};
    }, []);

    return <li>{user.name}</li>;
});

export default Item;
