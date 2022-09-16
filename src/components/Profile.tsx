import React from "react";
import classes from './Profile.module.css'
export function Profile (){
    return(
        <div className={classes.content}>
            <img src={"https://avatars.mds.yandex.net/i?id=0d9be7e07c58d4f7d95b3a90d5cd1506-5660145-images-thumbs&n=13"}/>
            <div>ava</div>
            <div className={classes.posts}>
                <div className={classes.item}>post1</div>
                <div className={classes.item}>post2</div>
            </div>

        </div>
    )
}