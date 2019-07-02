import React from "react";
import {PageTemplate} from "../menu/pages";
import {PostList} from "./PostList";

export const PostListView = () =>
    <PageTemplate>
        <section className="posts">
            <PostList/>
        </section>
    </PageTemplate>