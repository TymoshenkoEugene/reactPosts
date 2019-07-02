import React from 'react'
import {PostView} from '../post/Post-view'
import './PostList.scss'
import {Col, Container, Row} from "react-bootstrap";

export const PostList = ({products = []}) =>
    <Container className="posts-list">
            <Row>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
                    <Col> <PostView/></Col>
            </Row>
    </Container>